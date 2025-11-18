import { useNavigate } from 'react-router-dom';
import './nearby.css';


const NearBy = () => {

     const navigate = useNavigate();
  const handleCollegeSearch = () => {
    alert('Redirecting to College Search Page');
    // You can replace this with your routing logic
     navigate('/colleges');
  };

  const handleSchoolSearch = () => {
    alert('Redirecting to School Search Page');
     navigate('/schools');
   
  };

 

  return (
    <div className="app">
  
    
      {/* Main Section */}
      <main className="main-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Find the Perfect <span className="highlight">Educational Institution</span> Near You
            </h1>
            <p className="hero-subtitle">
              Discover colleges and schools in your area with detailed information, ratings, and admission details.
            </p>
          </div>

          <div className="cards-container">
            {/* College Card */}
            <div className="card college-card" onClick={handleCollegeSearch}>
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="card-title">Search Nearby Colleges</h3>
              <p className="card-description">
                Find colleges, universities, and higher education institutions in your vicinity with detailed information.
              </p>
              <div className="card-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>

            {/* School Card */}
            <div className="card school-card" onClick={handleSchoolSearch}>
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="card-title">Search Nearby Schools</h3>
              <p className="card-description">
                Discover schools, primary and secondary education centers near your location with comprehensive details.
              </p>
              <div className="card-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NearBy;