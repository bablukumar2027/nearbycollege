import React, { useEffect, useState, useMemo, useCallback } from "react";
import "./CategoryFilter.css";
import CollegeDetailModal from "./CollegeDetailModal";

const API = process.env.REACT_APP_API_BASE || "http://localhost:5000/api";

// Initial grid limit
const INITIAL_COLLEGE_LIMIT = 9;

// Function to generate random admission periods (for demo purposes)
const generateRandomAdmissionPeriod = () => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const startMonthIndex = Math.floor(Math.random() * 12);
  const duration = Math.floor(Math.random() * 6) + 1; // 1-6 months duration
  const endMonthIndex = (startMonthIndex + duration) % 12;
  
  return {
    startMonth: months[startMonthIndex],
    endMonth: months[endMonthIndex]
  };
};

export default function CollegeListWithFilters() {
  const [colleges, setColleges] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [category, setCategory] = useState("All");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");

  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COLLEGE_LIMIT);
  const [selectedCollege, setSelectedCollege] = useState(null);

  /* -------------------------- CATEGORY LIST --------------------------- */
  const categories = [
    "All",
    "Medical",
    "Engineering",
    "Arts & Science",
    "General/Multidisciplinary",
    "Vocational",
  ];

  /* -------------------------- FETCH STATES --------------------------- */
  useEffect(() => {
    fetch(`${API}/colleges/states`)
      .then((r) => r.json())
      .then((j) => setStates(j.data || []))
      .catch(() => {});
  }, []);

  /* -------------------------- FETCH DISTRICTS --------------------------- */
  useEffect(() => {
    if (!state) return setDistricts([]);

    setDistrict("");

    fetch(`${API}/colleges/districts?state=${encodeURIComponent(state)}`)
      .then((r) => r.json())
      .then((j) => setDistricts(j.data || []))
      .catch(() => {});
  }, [state]);

  /* ------------------- FETCH ALL COLLEGES INITIALLY ------------------- */
  useEffect(() => {
    setLoading(true);
    fetch(`${API}/colleges`)
      .then((res) => res.json())
      .then((json) => {
        const data = json.data || [];
        // Add admission periods to each college
        const collegesWithAdmissionPeriods = data.map(college => ({
          ...college,
          admissionPeriod: generateRandomAdmissionPeriod()
        }));
        setColleges(collegesWithAdmissionPeriods);
        setFiltered(collegesWithAdmissionPeriods);
      })
      .catch(() => {
        setColleges([]);
        setFiltered([]);
      })
      .finally(() => setLoading(false));
  }, []);

  /* ----------------- FILTER FUNCTION (STATE + DISTRICT + CATEGORY) ---------------- */
  const applyFilters = useCallback(() => {
    let result = [...colleges];

    // 1. Category Filter
    if (category !== "All") {
      result = result.filter(
        (c) => c.category?.toLowerCase() === category.toLowerCase()
      );
    }

    // 2. State Filter
    if (state) {
      result = result.filter((c) => c.state === state);
    }

    // 3. District Filter
    if (district) {
      result = result.filter((c) => c.district === district);
    }

    setFiltered(result);
    setVisibleCount(INITIAL_COLLEGE_LIMIT);
  }, [category, state, district, colleges]);

  useEffect(() => {
    applyFilters();
  }, [category, state, district, colleges, applyFilters]);

  /* -------------------------- LOAD MORE FEATURE -------------------------- */
  const handleSeeMore = () =>
    setVisibleCount((prev) => prev + INITIAL_COLLEGE_LIMIT);

  /* ----------------------- SELECT A COLLEGE ----------------------- */
  const handleCardClick = (college) => setSelectedCollege(college);
  const handleCloseModal = () => setSelectedCollege(null);

  /* ----------------------- DISPLAY COLLEGES ----------------------- */
  const collegesToDisplay = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount]
  );

  /* ----------------------- CATEGORY COLORS ----------------------- */
  const getCategoryColor = (cat) => {
    const colors = {
      Medical: "#dc2626",
      Engineering: "#2563eb",
      "Arts & Science": "#7c3aed",
      "General/Multidisciplinary": "#059669",
      Vocational: "#d97706",
      default: "#6b7280",
    };
    return colors[cat] || colors.default;
  };

  /* ----------------------- ADMISSION PERIOD HELPERS ----------------------- */
  const getAdmissionStatus = (startMonth, endMonth) => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    const currentMonth = new Date().getMonth();
    // const currentMonthName = months[currentMonth];
    
    const startIndex = months.indexOf(startMonth);
    const endIndex = months.indexOf(endMonth);
    
    // Handle year-wrap (e.g., November to February)
    const isWrapped = endIndex < startIndex;
    
    let isActive = false;
    if (isWrapped) {
      // Admission spans across year end
      isActive = currentMonth >= startIndex || currentMonth <= endIndex;
    } else {
      // Normal case
      isActive = currentMonth >= startIndex && currentMonth <= endIndex;
    }
    
    return {
      isActive,
      status: isActive ? "Open" : "Closed",
      className: isActive ? "admission-open" : "admission-closed"
    };
  };

  return (
    <div className="filter-wrapper">
      <h2 className="main-heading">
        <span role="img" aria-label="magnifying glass">
          🔎
        </span>{" "}
        Find Colleges by Location & Category
      </h2>

      {/* STATE + DISTRICT FILTER - MOVED TO TOP */}
      <div className="location-filter-section">
        <h3 className="filter-section-title">Search by Location</h3>
        <div className="filter-sections">
          <div className="form-field">
            <label>State</label>
            <select
              className="dropdown"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="">-- Select State --</option>
              {states.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label>District</label>
            <select
              className="dropdown"
              value={district}
              disabled={!state}
              onChange={(e) => setDistrict(e.target.value)}
            >
              <option value="">-- All Districts --</option>
              {districts.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* CATEGORY FILTER */}
      <div className="category-filter-section">
        <p className="select-text">Filter by Category</p>
        <div className="category-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-btn ${category === cat ? "active" : ""}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <hr className="divider" />

      {/* RESULTS */}
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading colleges...</p>
        </div>
      ) : (
        <>
          <h3 className="results-heading">Results ({filtered.length} Found)</h3>

          {filtered.length === 0 ? (
            <div className="no-results-container">
              <div className="no-results-icon">🏫</div>
              <p className="no-results-message">
                No colleges found based on your filters.
              </p>
              <p className="no-results-suggestion">
                Try adjusting your state, district, or category filters
              </p>
            </div>
          ) : (
            <div className="college-results-container">
              <div className="college-grid">
                {collegesToDisplay.map((c) => {
                  const admissionStatus = getAdmissionStatus(
                    c.admissionPeriod.startMonth,
                    c.admissionPeriod.endMonth
                  );
                  
                  return (
                    <div
                      key={c._id}
                      className="college-card"
                      onClick={() => handleCardClick(c)}
                    >
                      {/* Card Header with Category and Admission Status */}
                      <div className="card-header">
                        <span
                          className="category-badge"
                          style={{
                            backgroundColor: getCategoryColor(c.category),
                            color: "white",
                          }}
                        >
                          {c.category || "N/A"}
                        </span>
                        <div className={`admission-status ${admissionStatus.className}`}>
                          {admissionStatus.status}
                        </div>
                      </div>

                      {/* College Rank */}
                      <div className="college-rank-badge">
                        #{c.rank || "N/A"}
                      </div>

                      {/* Icon */}
                      <div className="college-icon">🏫</div>

                      {/* Name */}
                      <h4 className="college-title">{c.name}</h4>

                      {/* Admission Period */}
                     

                      {/* Location */}
                      <div className="college-location">
                        <span className="location-icon">📍</span>
                        {c.district}, {c.state}
                      </div>
                       <div className="admission-period">
                        {/* <div className="admission-calendar-icon">📅</div> */}
                        <div className="admission-dates"> 📅
                          <span className="admission-range"> 
                            {c.admissionPeriod.startMonth} - {c.admissionPeriod.endMonth}
                          </span>
                        </div>
                      </div>

                      {/* Courses */}
                      {/* <div className="programs-section">
                        <div className="programs-list">
                          {(c.coursesOffered || []).slice(0, 2).map((course, i) => (
                            <span key={i} className="program-tag">
                              {course}
                            </span>
                          ))}
                          {(c.coursesOffered || []).length > 2 && (
                            <span className="program-tag more">
                              +{(c.coursesOffered || []).length - 2} more
                            </span>
                          )}
                        </div>
                      </div> */}

                      {/* Rating */}
                      <div className="rating-section">
                        <div className="rating-stars">
                          {"⭐".repeat(Math.round(c.averageRating || 4))}
                          <span className="rating-text">
                            ({c.averageRating || 4}/5)
                          </span>
                        </div>
                      </div>

                      {/* Button */}
                      <button
                        className="view-details-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(c);
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* SEE MORE */}
              {filtered.length > collegesToDisplay.length && (
                <div className="see-more-section">
                  <button className="see-more-button" onClick={handleSeeMore}>
                    Load More ({filtered.length - collegesToDisplay.length} remaining)
                  </button>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* MODAL */}
      {selectedCollege && (
        <CollegeDetailModal
          college={selectedCollege}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}