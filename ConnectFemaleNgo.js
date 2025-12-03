import React, { useState, useEffect } from 'react';
import './ConnectCounsellor.css';
import { useAuth } from './AuthContext';

const StudentRequestForm = () => {
  const { user, token } = useAuth();
  const currentStudentId = user?.id || user?._id || user?.userId;
  
  const [formData, setFormData] = useState({
    name: '',
    language: '',
    reason: '',
    email: '',
    phone: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sentRequests, setSentRequests] = useState([]);
  const [loadingRequests, setLoadingRequests] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  // Fetch only current student's requests
  useEffect(() => {
    const fetchRequests = async () => {
      if (!currentStudentId) {
        console.log('No user logged in');
        setSentRequests([]);
        setLoadingRequests(false);
        return;
      }

      try {
        const headers = {
          'Content-Type': 'application/json',
        };
        
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }

        console.log('Fetching requests for student:', currentStudentId);
        
        const resp = await fetch(`http://localhost:8000/api/requests/student/${currentStudentId}`, {
          headers: headers
        });
        
        if (resp.ok) {
          const result = await resp.json();
          console.log('Received requests:', result.requests);
          setSentRequests(result.requests || []);
        } else {
          throw new Error('Failed to fetch from API');
        }
      } catch (error) {
        console.error('Error fetching requests:', error);
        // Fallback to localStorage with student ID filter
        const studentSpecificKey = `counselingRequests_${currentStudentId}`;
        const savedRequests = localStorage.getItem(studentSpecificKey);
        if (savedRequests) {
          const requests = JSON.parse(savedRequests);
          const studentRequests = requests.filter(req => req.studentId === currentStudentId);
          setSentRequests(studentRequests);
        } else {
          setSentRequests([]);
        }
      } finally {
        setLoadingRequests(false);
      }
    };

    fetchRequests();
  }, [currentStudentId, token]);

  // Save to localStorage with student-specific key
  useEffect(() => {
    if (sentRequests.length > 0 && currentStudentId) {
      const studentSpecificKey = `counselingRequests_${currentStudentId}`;
      localStorage.setItem(studentSpecificKey, JSON.stringify(sentRequests));
    }
  }, [sentRequests, currentStudentId]);

  const languages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Chinese',
    'Hindi',
    'Arabic',
    'Portuguese',
    'Russian',
    'Japanese'
  ];

  const reasons = [
    'Academic Stress',
    'Career Guidance',
    'Family Concerns',
    'Support Female Ngo',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!currentStudentId) {
      alert('Please log in to submit a request');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const requestData = {
        ...formData,
        studentId: currentStudentId,
        studentName: user?.name || formData.name
      };

      const headers = {
        'Content-Type': 'application/json',
      };
      
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const resp = await fetch("http://localhost:8000/api/requests", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(requestData)
      });

      const result = await resp.json();
      
      if (resp.ok && result.success) {
        const newRequest = {
          id: result.request._id || Date.now(),
          ...requestData,
          status: result.request.status || 'pending',
          submittedDate: new Date().toLocaleDateString(),
          submittedTime: new Date().toLocaleTimeString(),
          timestamp: new Date().toISOString()
        };
        
        setSentRequests(prev => [newRequest, ...prev]);
        setIsSubmitted(true);
        setFormData({
          name: '',
          language: '',
          reason: '',
          email: '',
          phone: '',
          additionalInfo: ''
        });
      } else {
        alert(result.message || "Failed to submit request");
      }
    } catch (error) {
      console.error('Error submitting request:', error);
      const newRequest = {
        id: Date.now(),
        ...formData,
        studentId: currentStudentId,
        studentName: user?.name || formData.name,
        status: 'pending',
        submittedDate: new Date().toLocaleDateString(),
        submittedTime: new Date().toLocaleTimeString(),
        timestamp: new Date().toISOString(),
        localSave: true
      };
      
      setSentRequests(prev => [newRequest, ...prev]);
      setIsSubmitted(true);
      setFormData({
        name: '',
        language: '',
        reason: '',
        email: '',
        phone: '',
        additionalInfo: ''
      });
      
      alert("Request saved locally. We'll sync with server when available.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteRequest = async (requestId, isLocalSave = false) => {
    if (!window.confirm('Are you sure you want to delete this request?')) {
      return;
    }

    setDeletingId(requestId);

    try {
      if (!isLocalSave) {
        const headers = {
          'Content-Type': 'application/json',
        };
        
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }

        const resp = await fetch(`http://localhost:8000/api/requests/${requestId}`, {
          method: "DELETE",
          headers: headers
        });

        if (!resp.ok) {
          throw new Error('Failed to delete from server');
        }
      }

      setSentRequests(prev => prev.filter(request => request.id !== requestId));
      
      const studentSpecificKey = `counselingRequests_${currentStudentId}`;
      const updatedRequests = sentRequests.filter(request => request.id !== requestId);
      if (updatedRequests.length > 0) {
        localStorage.setItem(studentSpecificKey, JSON.stringify(updatedRequests));
      } else {
        localStorage.removeItem(studentSpecificKey);
      }

    } catch (error) {
      console.error('Error deleting request:', error);
      alert('Failed to delete request. Please try again.');
    } finally {
      setDeletingId(null);
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { class: 'status-pending', text: 'Pending', icon: '⏳' },
      accepted: { class: 'status-accepted', text: 'Accepted', icon: '✅' },
      rejected: { class: 'status-rejected', text: 'Rejected', icon: '❌' }
    };
    
    const config = statusConfig[status] || statusConfig.pending;
    return (
      <span className={`status-badge ${config.class}`}>
        <span className="status-icon">{config.icon}</span>
        {config.text}
      </span>
    );
  };

  if (isSubmitted) {
    return (
      <div className="success-container">
        <div className="success-card">
          <div className="success-icon">
            <div className="checkmark">✓</div>
          </div>
          <h2>Request Sent Successfully!</h2>
          <p>Your request has been sent to our counselors. They will contact you within 24 hours.</p>
          <div className="success-actions">
            <button 
              className="back-button primary"
              onClick={() => setIsSubmitted(false)}
            >
              Send Another Request
            </button>
            <button 
              className="back-button secondary"
              onClick={() => {
                setIsSubmitted(false);
                document.querySelector('.requests-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Your Requests
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      {/* Enhanced User Profile Header */}
      <div className="user-profile-header">
        <div className="profile-content">
          <div className="profile-avatar">
            <div className="avatar-icon">
              {user?.name ? user.name.charAt(0).toUpperCase() : '👤'}
            </div>
          </div>
          <div className="profile-info">
            <h1 className="profile-welcome">
              {user?.name ? `Welcome, ${user.name}!` : 'Welcome to Counseling Services'}
            </h1>
            <p className="profile-subtitle">
              {user?.name ? 'Connect with professional counselors for support' : 'Please log in to access counseling services'}
            </p>
            {currentStudentId && (
              <div className="profile-meta">
                <span className="user-id-badge">
                  <span className="meta-icon">🆔</span>
                  Student ID: {currentStudentId}
                </span>
                <span className="request-count">
                  <span className="meta-icon">📋</span>
                  {sentRequests.length} Request{sentRequests.length !== 1 ? 's' : ''}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        {/* Left Side - Request Form */}
        <div className="form-section">
          <div className="request-card glass-effect">
            <div className="card-header">
              <div className="header-icon">💬</div>
              <div className="header-section">
                <h1 className="title">Connect with a Counselor</h1>
                <p className="subtitle">
                  Fill out the form below and our professional counselors will get in touch with you
                </p>
                {!currentStudentId && (
                  <div className="login-warning">
                    <span className="warning-icon">⚠️</span>
                    Please log in to submit and view your requests
                  </div>
                )}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="request-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <span className="label-icon">👤</span>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder={user?.name ? `Logged in as: ${user.name}` : "Enter your full name"}
                  required
                  disabled={!currentStudentId}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="language" className="form-label">
                    <span className="label-icon">🌐</span>
                    Preferred Language *
                  </label>
                  <select
                    id="language"
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    className="form-select"
                    required
                    disabled={!currentStudentId}
                  >
                    <option value="">Select your preferred language</option>
                    {languages.map(lang => (
                      <option key={lang} value={lang}>{lang}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="reason" className="form-label">
                    <span className="label-icon">🎯</span>
                    Reason for Counseling *
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="form-select"
                    required
                    disabled={!currentStudentId}
                  >
                    <option value="">Select a reason</option>
                    {reasons.map(reason => (
                      <option key={reason} value={reason}>{reason}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <span className="label-icon">📧</span>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder={user?.email ? `Logged in email: ${user.email}` : "Enter your email"}
                    required
                    disabled={!currentStudentId}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    <span className="label-icon">📱</span>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your phone number"
                    required
                    disabled={!currentStudentId}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="additionalInfo" className="form-label">
                  <span className="label-icon">📝</span>
                  Additional Information (Optional)
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Any additional details you'd like to share with the counselor..."
                  rows="4"
                  disabled={!currentStudentId}
                />
              </div>

              <button
                type="submit"
                className={`submit-button ${isSubmitting ? 'submitting' : ''} ${!currentStudentId ? 'disabled' : ''}`}
                disabled={isSubmitting || !currentStudentId}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending Request...
                  </>
                ) : !currentStudentId ? (
                  <>
                    <span className="button-icon">🔒</span>
                    Please Log In to Submit
                  </>
                ) : (
                  <>
                    <span className="button-icon">🚀</span>
                    Send Request to Counselor
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Right Side - Sent Requests */}
        <div className="requests-section">
          <div className="requests-card glass-effect">
            <div className="card-header">
              <div className="header-icon">📋</div>
              <div className="requests-header">
                <h2 className="requests-title">
                  {currentStudentId ? 'Your Counseling Requests' : 'Counseling Requests'}
                </h2>
                <p className="requests-subtitle">
                  {currentStudentId 
                    ? 'Track the status of your counseling requests below'
                    : 'Log in to view and manage your requests'
                  }
                </p>
                {sentRequests.length > 0 && currentStudentId && (
                  <div className="requests-stats">
                    <div className="stat-item">
                      <span className="stat-number">{sentRequests.length}</span>
                      <span className="stat-label">Total Requests</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">
                        {sentRequests.filter(req => req.status === 'pending').length}
                      </span>
                      <span className="stat-label">Pending</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">
                        {sentRequests.filter(req => req.status === 'accepted').length}
                      </span>
                      <span className="stat-label">Accepted</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="requests-list">
              {!currentStudentId ? (
                <div className="empty-state">
                  <div className="empty-icon">🔒</div>
                  <h3>Authentication Required</h3>
                  <p>Please log in to view your counseling requests</p>
                </div>
              ) : loadingRequests ? (
                <div className="empty-state">
                  <div className="spinner large"></div>
                  <h3>Loading Your Requests...</h3>
                  <p>Please wait while we fetch your data</p>
                </div>
              ) : sentRequests.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-icon">📝</div>
                  <h3>No Requests Yet</h3>
                  <p>Submit your first counseling request using the form</p>
                  <button 
                    className="create-first-request"
                    onClick={() => document.querySelector('.form-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Create Your First Request
                  </button>
                </div>
              ) : (
                <div className="requests-grid">
                  {sentRequests.map(request => (
                    <div key={request.id} className="request-item">
                      <div className="request-header">
                        <div className="request-info">
                          <h4 className="request-name">{request.name}</h4>
                          <span className="request-meta">
                            {request.submittedDate} • {request.language}
                            {request.localSave && <span className="local-badge">Local</span>}
                          </span>
                        </div>
                        <div className="request-actions">
                          {getStatusBadge(request.status)}
                          <button
                            className={`delete-button ${deletingId === request.id ? 'deleting' : ''}`}
                            onClick={() => handleDeleteRequest(request.id, request.localSave)}
                            disabled={deletingId === request.id}
                            title="Delete request"
                          >
                            {deletingId === request.id ? (
                              <div className="spinner small"></div>
                            ) : (
                              '🗑️'
                            )}
                          </button>
                        </div>
                      </div>
                      
                      <div className="request-details">
                        <div className="detail-grid">
                          <div className="detail-item">
                            <span className="detail-label">Reason:</span>
                            <span className="detail-value">{request.reason}</span>
                          </div>
                          
                          <div className="detail-item">
                            <span className="detail-label">Contact:</span>
                            <span className="detail-value">
                              <span className="contact-email">{request.email}</span>
                              <span className="contact-separator">•</span>
                              <span className="contact-phone">{request.phone}</span>
                            </span>
                          </div>
                          
                          {request.additionalInfo && (
                            <div className="detail-item full-width">
                              <span className="detail-label">Additional Info:</span>
                              <span className="detail-value">{request.additionalInfo}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRequestForm;
