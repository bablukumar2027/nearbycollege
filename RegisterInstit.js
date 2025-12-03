import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/universal-form.css';

const API = "http://localhost:8000/api";

const RegisterInstit = () => {
  const [userType, setUserType] = useState("");
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  // School form data
  const [schoolData, setSchoolData] = useState({
    name: "",
    state: "",
    district: "",
    location: "",
    website: "",
    category: "",
    minClass: "",
    maxClass: "",
    notes: "",
    // Admin details
    principalName: "",
    principalContact: "",
    adminEmail: "",
    adminPassword: "",
  });

  // College form data
  const [collegeData, setCollegeData] = useState({
    name: "",
    state: "",
    district: "",
    address: "",
    website: "",
    category: "",
    institutionType: "",
    locationType: "",
    coursesOffered: [],
    primaryAdmissionExam: "",
    medium: "",
    facilities: [],
    programs: [],
    cutoffs: {},
    // Admin details
    principalName: "",
    principalContact: "",
    adminEmail: "",
    adminPassword: "",
  });

  const categories = userType === "school" 
    ? ['Primary', 'Secondary', 'Higher Secondary']
    : ['Engineering', 'Arts', 'Medical', 'Commerce', 'Management', 'Science'];

  const classOptions = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'];
  
  const institutionTypes = ['Government', 'Private', 'Semi-Government'];
  const locationTypes = ['City', 'Town', 'Village'];
  const courses = ['UG', 'PG', 'Diploma', 'PhD'];
  const admissionExams = ['JEE', 'NEET', 'CUET', 'Merit-Based', 'CAT', 'GATE'];
  const mediums = ['English', 'Hindi', 'Regional Language', 'Bilingual'];

  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    if (userType === "school" && schoolData.state) {
      fetchDistricts(schoolData.state);
    } else if (userType === "college" && collegeData.state) {
      fetchDistricts(collegeData.state);
    }
  }, [schoolData.state, collegeData.state, userType]);

  const fetchStates = async () => {
    try {
      const endpoint = userType === "school" ? "/schools/states" : "/colleges/states";
      const response = await fetch(`${API}${endpoint}`);
      const data = await response.json();
      setStates((data.data || data).sort() || []);
    } catch (error) {
      console.error('Error fetching states:', error);
    }
  };

  const fetchDistricts = async (state) => {
    try {
      // If Jammu & Kashmir, use static list of all districts
      if (state === "Jammu Kashmir" || state === "Jammu & Kashmir") {
        const jkDistricts = [
          "Anantnag", "Bandipora", "Baramulla", "Budgam", "Doda", "Ganderbal",
          "Jammu", "Kargil", "Kathua", "Kishtwar", "Kulgam", "Kupwara",
          "Leh", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi",
          "Samba", "Shopian", "Srinagar", "Udhampur"
        ];
        setDistricts(jkDistricts.sort());
        return;
      }

      const endpoint = userType === "school" 
        ? `/schools/districts/${encodeURIComponent(state)}`
        : `/colleges/districts?state=${encodeURIComponent(state)}`;
      const response = await fetch(`${API}${endpoint}`);
      const data = await response.json();
      setDistricts((data.data || data).sort() || []);
    } catch (error) {
      console.error('Error fetching districts:', error);
    }
  };

  const handleSchoolChange = (e) => {
    const { name, value } = e.target;
    setSchoolData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCollegeChange = (e) => {
    const { name, value } = e.target;
    setCollegeData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayInput = (field, value) => {
    const items = value.split(',').map(item => item.trim()).filter(item => item);
    setCollegeData(prev => ({
      ...prev,
      [field]: items
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setIsError(false);

    try {
      const formData = userType === "school" ? schoolData : collegeData;
      
      // First register as institution (for admin login)
      const institutionResponse = await fetch("http://localhost:8000/api/institution/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          userType,
          // Map fields to match institution schema
          institutionId: formData.name.replace(/\s+/g, '-').toLowerCase(),
          institutionName: formData.name,
          address: formData.location || formData.address,
          city: formData.district,
          pincode: "000000", // Default
          classes: userType === "school" ? {
            primary: formData.category === "Primary",
            middle: formData.category === "Secondary",
            secondary: formData.category === "Secondary",
            higherSecondary: formData.category === "Higher Secondary"
          } : {},
          degrees: userType === "college" ? formData.programs : []
        }),
      });

      const institutionResult = await institutionResponse.json();

      if (!institutionResponse.ok) {
        throw new Error(institutionResult.message || "Institution registration failed");
      }

      // Then add to main collections (for student search)
      const endpoint = userType === "school" ? "/schools/add" : "/colleges/add";
      const searchResponse = await fetch(`${API}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const searchResult = await searchResponse.json();

      if (searchResponse.ok) {
        setMessage("✅ Registration successful! Your institution is now visible to students.");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setMessage("⚠️ Institution registered but may not appear in search immediately.");
      }
    } catch (error) {
      setIsError(true);
      setMessage("❌ " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const renderSchoolForm = () => (
    <form onSubmit={handleSubmit}>
      <h3 className="form-title">School Registration</h3>
      
      <div className="form-section">
        <h4>Basic Information</h4>
        
        <div className="form-group">
          <label>School Name *</label>
          <input
            type="text"
            name="name"
            value={schoolData.name}
            onChange={handleSchoolChange}
            placeholder="Enter school name"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>State *</label>
            <select
              name="state"
              value={schoolData.state}
              onChange={handleSchoolChange}
              required
            >
              <option value="">Select State</option>
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>District *</label>
            <select
              name="district"
              value={schoolData.district}
              onChange={handleSchoolChange}
              required
              disabled={!schoolData.state}
            >
              <option value="">Select District</option>
              {districts.map(district => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Location/Address</label>
          <input
            type="text"
            name="location"
            value={schoolData.location}
            onChange={handleSchoolChange}
            placeholder="School address or location details"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Category *</label>
            <select
              name="category"
              value={schoolData.category}
              onChange={handleSchoolChange}
              required
            >
              <option value="">Select Category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Website</label>
            <input
              type="url"
              name="website"
              value={schoolData.website || ''}
              onChange={handleSchoolChange}
              placeholder="https://www.school.edu.in"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Minimum Class *</label>
            <select
              name="minClass"
              value={schoolData.minClass}
              onChange={handleSchoolChange}
              required
            >
              <option value="">Select Min Class</option>
              {classOptions.map((cls, index) => (
                <option key={index} value={index + 1}>{cls}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Maximum Class *</label>
            <select
              name="maxClass"
              value={schoolData.maxClass}
              onChange={handleSchoolChange}
              required
            >
              <option value="">Select Max Class</option>
              {classOptions.map((cls, index) => (
                <option key={index} value={index + 1}>{cls}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Additional Information</label>
          <textarea
            name="notes"
            value={schoolData.notes}
            onChange={handleSchoolChange}
            rows="3"
            placeholder="Any additional information about school"
          />
        </div>
      </div>

      <div className="form-section">
        <h4>Administrator Details</h4>
        
        <div className="form-row">
          <div className="form-group">
            <label>Principal Name *</label>
            <input
              type="text"
              name="principalName"
              value={schoolData.principalName}
              onChange={handleSchoolChange}
              placeholder="Principal's full name"
              required
            />
          </div>
          <div className="form-group">
            <label>Principal Contact *</label>
            <input
              type="text"
              name="principalContact"
              value={schoolData.principalContact}
              onChange={handleSchoolChange}
              placeholder="Phone number"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Admin Email *</label>
            <input
              type="email"
              name="adminEmail"
              value={schoolData.adminEmail}
              onChange={handleSchoolChange}
              placeholder="admin@school.edu"
              required
            />
          </div>
          <div className="form-group">
            <label>Admin Password *</label>
            <input
              type="password"
              name="adminPassword"
              value={schoolData.adminPassword}
              onChange={handleSchoolChange}
              placeholder="Create strong password"
              required
            />
          </div>
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" disabled={loading} className="btn btn-primary">
          {loading ? 'Registering...' : 'Register School'}
        </button>
      </div>
    </form>
  );

  const renderCollegeForm = () => (
    <form onSubmit={handleSubmit}>
      <h3 className="form-title">College Registration</h3>
      
      <div className="form-section">
        <h4>Basic Information</h4>
        
        <div className="form-group">
          <label>College Name *</label>
          <input
            type="text"
            name="name"
            value={collegeData.name}
            onChange={handleCollegeChange}
            placeholder="Enter college name"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>State *</label>
            <select
              name="state"
              value={collegeData.state}
              onChange={handleCollegeChange}
              required
            >
              <option value="">Select State</option>
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>District *</label>
            <select
              name="district"
              value={collegeData.district}
              onChange={handleCollegeChange}
              required
              disabled={!collegeData.state}
            >
              <option value="">Select District</option>
              {districts.map(district => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={collegeData.address}
            onChange={handleCollegeChange}
            placeholder="College address"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Category *</label>
            <select
              name="category"
              value={collegeData.category}
              onChange={handleCollegeChange}
              required
            >
              <option value="">Select Category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Website</label>
            <input
              type="url"
              name="website"
              value={collegeData.website || ''}
              onChange={handleCollegeChange}
              placeholder="https://www.college.edu.in"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Institution Type *</label>
            <select
              name="institutionType"
              value={collegeData.institutionType}
              onChange={handleCollegeChange}
              required
            >
              <option value="">Select Type</option>
              {institutionTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Location Type *</label>
            <select
              name="locationType"
              value={collegeData.locationType}
              onChange={handleCollegeChange}
              required
            >
              <option value="">Select Location Type</option>
              {locationTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Courses Offered (comma-separated)</label>
          <input
            type="text"
            name="coursesOffered"
            value={collegeData.coursesOffered.join(', ')}
            onChange={(e) => handleArrayInput('coursesOffered', e.target.value)}
            placeholder="UG, PG, Diploma"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Admission Exam</label>
            <select
              name="primaryAdmissionExam"
              value={collegeData.primaryAdmissionExam}
              onChange={handleCollegeChange}
            >
              <option value="">Select Exam</option>
              {admissionExams.map(exam => (
                <option key={exam} value={exam}>{exam}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Medium of Instruction</label>
            <select
              name="medium"
              value={collegeData.medium}
              onChange={handleCollegeChange}
            >
              <option value="">Select Medium</option>
              {mediums.map(medium => (
                <option key={medium} value={medium}>{medium}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Programs/Degrees (comma-separated)</label>
          <input
            type="text"
            name="programs"
            value={collegeData.programs.join(', ')}
            onChange={(e) => handleArrayInput('programs', e.target.value)}
            placeholder="B.Tech, M.Tech, PhD"
          />
        </div>
      </div>

      <div className="form-section">
        <h4>Administrator Details</h4>
        
        <div className="form-row">
          <div className="form-group">
            <label>Principal Name *</label>
            <input
              type="text"
              name="principalName"
              value={collegeData.principalName}
              onChange={handleCollegeChange}
              placeholder="Principal's full name"
              required
            />
          </div>
          <div className="form-group">
            <label>Principal Contact *</label>
            <input
              type="text"
              name="principalContact"
              value={collegeData.principalContact}
              onChange={handleCollegeChange}
              placeholder="Phone number"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Admin Email *</label>
            <input
              type="email"
              name="adminEmail"
              value={collegeData.adminEmail}
              onChange={handleCollegeChange}
              placeholder="admin@college.edu"
              required
            />
          </div>
          <div className="form-group">
            <label>Admin Password *</label>
            <input
              type="password"
              name="adminPassword"
              value={collegeData.adminPassword}
              onChange={handleCollegeChange}
              placeholder="Create strong password"
              required
            />
          </div>
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" disabled={loading} className="btn btn-primary">
          {loading ? 'Registering...' : 'Register College'}
        </button>
      </div>
    </form>
  );

  return (
    <div className="form-container">
      <div className="form-card form-card-wide">
        <h2 className="form-title">Institution Registration</h2>

        {!userType && (
          <div className="type-selection">
            <h3>Select Institution Type</h3>
            <div className="type-buttons">
              <button
                type="button"
                className="type-btn schoolBtn"
                onClick={() => setUserType("school")}
              >
                School
              </button>
              <button
                type="button"
                className="type-btn collegeBtn"
                onClick={() => setUserType("college")}
              >
                College
              </button>
            </div>

            <div className="auth-switch">
              <button
                className="btn btn-outline"
                onClick={() => navigate("/login")}
              >
                School / College Login
              </button>
              <button
                className="btn btn-outline"
                onClick={() => navigate("/counsellor-login")}
              >
                Counsellor Login
              </button>
            </div>
          </div>
        )}

        {userType && (
          <>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setUserType("")}
            >
              ← Back to Type Selection
            </button>

            {message && (
              <div className={`message ${isError ? 'message-error' : 'message-success'}`}>
                {message}
              </div>
            )}

            {userType === "school" ? renderSchoolForm() : renderCollegeForm()}

            <div className="auth-switch">
              <p>
                Already have an account?{" "}
                <button 
                  type="button"
                  className="link"
                  onClick={() => navigate("/institution/login")}
                >
                  Login here
                </button>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RegisterInstit;