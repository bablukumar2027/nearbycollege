import React, { useState, useEffect } from "react";
import "./school-finder.css";

export default function SchoolFinder() {
  const API = "http://localhost:5000/api/schools";
  
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [classes, setClasses] = useState([]);

  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [category, setCategory] = useState("");
  const [classNum, setClassNum] = useState("");

  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [error, setError] = useState("");

  const CLASS_MAP = {
    "Primary": [1, 2, 3, 4, 5],
    "Primary with Middle": [1, 2, 3, 4, 5, 6, 7, 8],
    "Primary/Middle": [1, 2, 3, 4, 5, 6, 7, 8],
    "Middle": [6, 7, 8],
    "Secondary": [6, 7, 8, 9, 10],
    "Higher Secondary": [11, 12],
    "Senior Secondary": [11, 12]
  };

  // Load states
  useEffect(() => {
    setLoading(true);
    setError("");
    fetch(`${API}/states`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("States loaded:", data);
        if (Array.isArray(data)) {
          setStates(data);
        } else {
          setError("Invalid states data received");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching states:", err);
        setError("Failed to load states. Please check if server is running.");
        setLoading(false);
      });
  }, []);

  // Load districts when state changes
  useEffect(() => {
    if (state) {
      setLoading(true);
      setError("");
      fetch(`${API}/districts/${encodeURIComponent(state)}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          console.log("Districts loaded:", data);
          if (Array.isArray(data)) {
            setDistricts(data);
          } else {
            setError("Invalid districts data received");
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching districts:", err);
          setError("Failed to load districts");
          setLoading(false);
        });
    } else {
      setDistricts([]);
      setDistrict("");
      setCategory("");
      setClassNum("");
      setSchools([]);
      setSearchPerformed(false);
    }
  }, [state]);

  // Load categories when district changes
  useEffect(() => {
    if (district) {
      setLoading(true);
      setError("");
      fetch(`${API}/categories/${encodeURIComponent(district)}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          console.log("Categories loaded:", data);
          if (Array.isArray(data)) {
            setCategories(data);
          } else {
            setError("Invalid categories data received");
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching categories:", err);
          setError("Failed to load categories");
          setLoading(false);
        });
    } else {
      setCategories([]);
      setCategory("");
      setClassNum("");
      setSchools([]);
      setSearchPerformed(false);
    }
  }, [district]);

  // Load class options when category changes
  useEffect(() => {
    if (category) {
      console.log("Category selected:", category);
      const availableClasses = CLASS_MAP[category] || [];
      console.log("Available classes:", availableClasses);
      setClasses(availableClasses);
      setClassNum("");
      setSchools([]);
      setSearchPerformed(false);
    } else {
      setClasses([]);
      setClassNum("");
      setSchools([]);
      setSearchPerformed(false);
    }
  }, [category]);

  // Auto search when all filters are selected
  useEffect(() => {
    console.log("Current filters:", { state, district, category, classNum });
    if (state && district && category && classNum) {
      console.log("All filters selected, performing search...");
      performSearch();
    }
  }, [state, district, category, classNum]);

  // Search schools function
  const performSearch = () => {
    if (!state || !district || !category || !classNum) {
      console.log("Missing filters, cannot search");
      return;
    }

    console.log("Starting search with:", { state, district, category, classNum });
    setLoading(true);
    setSearchPerformed(true);
    setError("");
    
    const queryParams = new URLSearchParams({
      state: state,
      district: district,
      category: category,
      classNum: classNum
    });

    const url = `${API}/filter?${queryParams}`;
    console.log("Fetching from:", url);
    
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Schools data received:", data);
        if (Array.isArray(data)) {
          setSchools(data);
          if (data.length === 0) {
            setError("No schools found with the selected criteria. Try different filters.");
          }
        } else {
          setSchools([]);
          setError("Invalid data format received from server");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching schools:", err);
        setError("Failed to search schools. Please check your connection and try again.");
        setSchools([]);
        setLoading(false);
      });
  };

  // Manual search function
  const handleManualSearch = () => {
    if (!state || !district || !category || !classNum) {
      setError("Please select all filters before searching");
      return;
    }
    performSearch();
  };

  // Reset all filters
  const resetFilters = () => {
    setState("");
    setDistrict("");
    setCategory("");
    setClassNum("");
    setSchools([]);
    setSearchPerformed(false);
    setError("");
  };

  // SchoolCard component
  const SchoolCard = ({ school }) => {
    return (
      <div className="school-card fade-in">
        <h3 className="school-card-header">{school.name || "School Name Not Available"}</h3>
        
        <div className="school-card-content">
          <div className="badge-container">
            <span className="badge badge-location">📍 {school.district || "N/A"}</span>
            <span className="badge badge-category">🏫 {school.category || "N/A"}</span>
          </div>
          
          <div className="badge-container">
            <span className="badge badge-classes">
              📚 Classes: {school.minClass || "N/A"} – {school.maxClass || "N/A"}
            </span>
          </div>
          
          <p className="school-info">
            <strong>Location:</strong> {school.location || "Location not specified"}
          </p>

          <p className="school-info">
            <strong>State:</strong> {school.state || state}
          </p>
          
          {school.notes && (
            <div className="school-notes">
              <p className="notes-text">
                <strong>Notes:</strong> {school.notes}
              </p>
            </div>
          )}

          {school.medium && (
            <p className="school-info">
              <strong>Medium:</strong> {school.medium}
            </p>
          )}

          {school.type && (
            <p className="school-info">
              <strong>Type:</strong> {school.type}
            </p>
          )}
        </div>
      </div>
    );
  };

  // SchoolList component
  const SchoolList = () => {
    if (loading) {
      return (
        <div className="loading-state">
          <div className="loading-emoji">🔍</div>
          <p className="loading-text">Searching for schools...</p>
        </div>
      );
    }

    if (error && searchPerformed) {
      return (
        <div className="no-results-state">
          <div className="no-results-emoji">⚠️</div>
          <p className="no-results-text">{error}</p>
          <button 
            className="retry-button"
            onClick={handleManualSearch}
            style={{
              padding: "10px 20px",
              backgroundColor: "#3498db",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px"
            }}
          >
            Retry Search
          </button>
        </div>
      );
    }

    if (!searchPerformed) {
      return (
        <div className="empty-state">
          <div className="empty-state-emoji">🏫</div>
          <h3 className="empty-state-title">Welcome to School Finder</h3>
          <p>Select state, district, category, and class to find schools</p>
          {error && <p className="error-text" style={{color: "#e74c3c", marginTop: "10px"}}>{error}</p>}
        </div>
      );
    }

    if (schools.length === 0 && !error) {
      return (
        <div className="no-results-state">
          <div className="no-results-emoji">😞</div>
          <p className="no-results-text">No schools found matching your criteria</p>
          <p className="no-results-hint">Try adjusting your filters or check if the data exists in your database</p>
        </div>
      );
    }

    return (
      <div className="schools-grid">
        {schools.map((school, index) => (
          <SchoolCard key={school._id || school.id || `school-${index}`} school={school} />
        ))}
      </div>
    );
  };

  return (
    <div className="school-finder-container">
      <div className="school-finder-wrapper">
        {/* Header */}
        <div className="school-finder-header">
          <h1 className="school-finder-title">🏫 School Finder</h1>
          <p className="school-finder-subtitle">Discover Schools in Jammu Division</p>
        </div>

        {/* Debug Info */}
        <div style={{ 
          padding: "10px", 
          margin: "10px 0", 
          backgroundColor: "#f8f9fa", 
          borderRadius: "5px",
          fontSize: "12px",
          color: "#666"
        }}>
          <strong>Debug Info:</strong> State: {state || "Not selected"} | District: {district || "Not selected"} | Category: {category || "Not selected"} | Class: {classNum || "Not selected"}
        </div>

        {/* Filter Panel */}
        <div className="filter-panel">
          <div className="filter-grid">
            {/* State Filter */}
            <div className="filter-group">
              <label className="filter-label">🌎 State</label>
              <select 
                className="filter-select"
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                  setDistrict("");
                  setCategory("");
                  setClassNum("");
                }}
              >
                <option value="">Select State</option>
                {states.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* District Filter */}
            <div className="filter-group">
              <label className="filter-label">🗺️ District</label>
              <select 
                className="filter-select"
                value={district}
                onChange={(e) => {
                  setDistrict(e.target.value);
                  setCategory("");
                  setClassNum("");
                }}
                disabled={!state}
              >
                <option value="">Select District</option>
                {districts.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div className="filter-group">
              <label className="filter-label">🏫 Category</label>
              <select 
                className="filter-select"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setClassNum("");
                }}
                disabled={!district}
              >
                <option value="">Select Category</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Class Filter */}
            <div className="filter-group">
              <label className="filter-label">📚 Class</label>
              <select 
                className="filter-select"
                value={classNum}
                onChange={(e) => setClassNum(e.target.value)}
                disabled={!category}
              >
                <option value="">Select Class</option>
                {classes.map((cls) => (
                  <option key={cls} value={cls}>
                    Class {cls}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            <button 
              type="button"
              className="reset-button"
              onClick={resetFilters}
            >
              🔄 Reset Filters
            </button>
            
            <button 
              type="button"
              className="search-button"
              onClick={handleManualSearch}
              disabled={!state || !district || !category || !classNum}
              style={{
                padding: "12px 30px",
                backgroundColor: !state || !district || !category || !classNum ? "#bdc3c7" : "#2ecc71",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: !state || !district || !category || !classNum ? "not-allowed" : "pointer",
                fontSize: "16px",
                fontWeight: "600",
                transition: "all 0.3s ease"
              }}
            >
              🔍 Search Now
            </button>
          </div>
        </div>

        {/* Results Section */}
        <div className="results-section">
          {searchPerformed && (
            <h3 className="results-header">
              📊 Found {schools.length} School{schools.length !== 1 ? 's' : ''}
              {loading && <span className="results-count">(Searching...)</span>}
            </h3>
          )}
          <SchoolList />
        </div>
      </div>
    </div>
  );
}