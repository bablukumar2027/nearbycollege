import React, { useState } from 'react';
import './StudentRequestForm.css';

const StudentRequestForm = () => {
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
    'Personal Issues',
    'Mental Health Support',
    'Relationship Problems',
    'Study Skills',
    'Time Management',
    'Motivation Issues',
    'Family Concerns',
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
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      setTimeout(() => {
        const newRequest = {
          id: Date.now(),
          ...formData,
          status: 'pending',
          submittedDate: new Date().toLocaleDateString(),
          submittedTime: new Date().toLocaleTimeString()
        };
        
        setSentRequests(prev => [newRequest, ...prev]);
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          language: '',
          reason: '',
          email: '',
          phone: '',
          additionalInfo: ''
        });
      }, 2000);
    } catch (error) {
      console.error('Error submitting request:', error);
      setIsSubmitting(false);
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
                  placeholder="Enter your full name"
                  required
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
                    placeholder="Enter your email"
                    required
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
                    placeholder="Enter your phone"
                    required
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
                />
              </div>

              <button
                type="submit"
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending Request...
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
                <h2 className="requests-title">Your Sent Requests</h2>
                <p className="requests-subtitle">
                  Track the status of your counseling requests
                </p>
              </div>
            </div>

            <div className="requests-list">
              {sentRequests.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-icon">📝</div>
                  <h3>No Requests Yet</h3>
                  <p>Your sent requests will appear here</p>
                </div>
              ) : (
                sentRequests.map(request => (
                  <div key={request.id} className="request-item">
                    <div className="request-header">
                      <div className="request-info">
                        <h4 className="request-name">{request.name}</h4>
                        <span className="request-meta">
                          {request.submittedDate} • {request.language}
                        </span>
                      </div>
                      {getStatusBadge(request.status)}
                    </div>
                    
                    <div className="request-details">
                      <div className="detail-grid">
                        <div className="detail-item">
                          <span className="detail-label">Reason:</span>
                          <span className="detail-value">{request.reason}</span>
                        </div>
                        
                        <div className="detail-item">
                          <span className="detail-label">Contact:</span>
                          <span className="detail-value">{request.email} • {request.phone}</span>
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
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRequestForm;