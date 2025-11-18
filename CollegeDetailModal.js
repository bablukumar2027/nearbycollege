// frontend/src/components/CollegeDetailModal.jsx
import React, { useEffect } from 'react';
import './CollegeDetailModal.css';

const CollegeDetailModal = ({ college, onClose }) => {
  useEffect(() => {
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!college) return null;

  // Function to get category color
  const getCategoryColor = (category) => {
    const colors = {
      'Medical': '#dc2626',
      'Engineering': '#2563eb',
      'Arts & Science': '#7c3aed',
      'General/Multidisciplinary': '#059669',
      'Vocational': '#d97706',
      'default': '#6b7280'
    };
    return colors[category] || colors.default;
  };

  // Function to render rating stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="stars-container">
        {'⭐'.repeat(fullStars)}
        {hasHalfStar && '⭐'}
        {'☆'.repeat(emptyStars)}
        <span className="rating-text">({rating.toFixed(1)})</span>
      </div>
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Header Section */}
        <div className="modal-header" style={{ 
          background: `linear-gradient(135deg, ${getCategoryColor(college.category)}20, ${getCategoryColor(college.category)}40)`,
          borderLeft: `4px solid ${getCategoryColor(college.category)}`
        }}>
          <div className="header-content">
            <div className="college-basic-info">
              <h1 className="college-name">{college.name}</h1>
              <div className="college-meta-tags">
                <span 
                  className="category-tag"
                  style={{ backgroundColor: getCategoryColor(college.category) }}
                >
                  {college.category}
                </span>
                <span className="type-tag">{college.institutionType}</span>
                <span className="location-tag">📍 {college.district}, {college.state}</span>
              </div>
            </div>
            <button className="modal-close-button" onClick={onClose}>
              <span className="close-icon">&times;</span>
            </button>
          </div>
        </div>

        <div className="modal-body">
          
          {/* Quick Stats Bar */}
          <div className="stats-bar">
            <div className="stat-item">
              <div className="stat-value">{college.establishedYear || 'N/A'}</div>
              <div className="stat-label">Established</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value">{college.reviewCount || 120}+</div>
              <div className="stat-label">Reviews</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value">
                {renderStars(college.averageRating || 4)}
              </div>
              <div className="stat-label">Rating</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value">{college.medium || 'English'}</div>
              <div className="stat-label">Medium</div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="modal-grid">
            
            {/* Left Column */}
            <div className="modal-column">
              
              {/* Academics Section */}
              <div className="info-card">
                <div className="card-header">
                  <div className="card-icon">🎓</div>
                  <h3>Academics & Programs</h3>
                </div>
                <div className="card-content">
                  <div className="info-grid">
                    <div className="info-item">
                      <span className="info-label">Category</span>
                      <span className="info-value">{college.category}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Institution Type</span>
                      <span className="info-value">{college.institutionType}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Location Type</span>
                      <span className="info-value">{college.locationType}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Medium</span>
                      <span className="info-value">{college.medium}</span>
                    </div>
                    <div className="info-item full-width">
                      <span className="info-label">Primary Admission Exam</span>
                      <span className="info-value highlight">{college.primaryAdmissionExam}</span>
                    </div>
                  </div>

                  {/* Programs Offered */}
                  <div className="programs-section">
                    <h4>Programs Offered</h4>
                    <div className="programs-grid">
                      {(college.programs || []).map((program, index) => (
                        <div key={index} className="program-card">
                          <span className="program-icon">📚</span>
                          <span className="program-name">{program}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Courses Offered */}
                  <div className="courses-section">
                    <h4>Courses Available</h4>
                    <div className="courses-tags">
                      {(college.coursesOffered || []).map((course, index) => (
                        <span key={index} className="course-tag">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Cutoffs Section */}
              {college.cutoffs && Object.keys(college.cutoffs).length > 0 && (
                <div className="info-card">
                  <div className="card-header">
                    <div className="card-icon">📊</div>
                    <h3>Recent Cutoffs (Approx)</h3>
                  </div>
                  <div className="card-content">
                    <div className="cutoffs-grid">
                      {Object.entries(college.cutoffs).map(([program, cutoff]) => (
                        <div key={program} className="cutoff-item">
                          <span className="cutoff-program">{program}</span>
                          <div className="cutoff-bar">
                            <div 
                              className="cutoff-fill"
                              style={{ width: `${Math.min(100, cutoff)}%` }}
                            ></div>
                            <span className="cutoff-value">{cutoff}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="modal-column">
              
              {/* Facilities Section */}
              <div className="info-card">
                <div className="card-header">
                  <div className="card-icon">🏢</div>
                  <h3>Campus Facilities</h3>
                </div>
                <div className="card-content">
                  <div className="facilities-grid">
                    {(college.facilities || []).map((facility, index) => (
                      <div key={index} className="facility-item">
                        <span className="facility-icon">
                          {facility.includes('Hostel') ? '🏠' : 
                           facility.includes('Library') ? '📚' :
                           facility.includes('Sports') ? '⚽' :
                           facility.includes('Lab') ? '🔬' :
                           facility.includes('Cafeteria') ? '🍽️' :
                           facility.includes('Medical') ? '🏥' :
                           facility.includes('Transport') ? '🚌' :
                           facility.includes('Wi-Fi') ? '📡' : '✅'}
                        </span>
                        <span className="facility-name">{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ratings & Reviews */}
              <div className="info-card">
                <div className="card-header">
                  <div className="card-icon">⭐</div>
                  <h3>Ratings & Reviews</h3>
                </div>
                <div className="card-content">
                  <div className="rating-overview">
                    <div className="rating-score">
                      <div className="score-circle">
                        <span className="score-value">{(college.averageRating || 4).toFixed(1)}</span>
                        <span className="score-total">/5</span>
                      </div>
                    </div>
                    <div className="rating-details">
                      {renderStars(college.averageRating || 4)}
                      <p className="review-count">{college.reviewCount || 120} verified reviews</p>
                    </div>
                  </div>
                  
                  {/* Rating Breakdown */}
                  <div className="rating-breakdown">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <div key={stars} className="breakdown-row">
                        <span className="stars-label">{stars} ⭐</span>
                        <div className="breakdown-bar">
                          <div 
                            className="breakdown-fill"
                            style={{ 
                              width: `${(stars / 5) * 100}%`,
                              opacity: stars <= (college.averageRating || 4) ? 1 : 0.3
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact & Location */}
              <div className="info-card">
                <div className="card-header">
                  <div className="card-icon">📍</div>
                  <h3>Location Details</h3>
                </div>
                <div className="card-content">
                  <div className="location-details">
                    <p className="address">{college.address || `${college.district}, ${college.state}`}</p>
                    <button className="map-button">
                      <span className="map-icon">🗺️</span>
                      View on Map
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="modal-footer">
          <button className="action-btn secondary" onClick={onClose}>
            Close
          </button>
          <button className="action-btn primary">
            <span className="btn-icon">📋</span>
            Apply Now
          </button>
          <button className="action-btn secondary">
            <span className="btn-icon">❤️</span>
            Save to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetailModal;