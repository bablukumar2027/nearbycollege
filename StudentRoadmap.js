import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  ChevronRight, 
  ExternalLink, 
  GraduationCap, 
  Briefcase, 
  BookOpen, 
  TrendingUp, 
  Users, 
  BarChart3, 
  PieChart,
  Menu,
  X,
  Home,
  Book,
  Target,
  Clock,
  DollarSign,
  Building
} from "lucide-react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import "./StudentRoadmap.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

// Roadmap data remains the same...
const roadmapData = {
  "10th": [
    {
      id: "science",
      title: "Science",
      icon: <BookOpen className="icon-small" />,
      color: "blue",
      description: "Physics, Chemistry, Mathematics/Biology",
      hasSubStreams: true,
      subStreams: {
        "mathematics": {
          title: "Science with Mathematics (PCM)",
          description: "Physics, Chemistry, Mathematics",
          degrees: ["B.Tech", "B.E", "B.Arch", "B.Sc Physics", "B.Sc Chemistry", "B.Sc Mathematics", "BCA", "B.Sc IT"],
          exams: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "SRMJEEE", "WBJEE", "MHT CET", "KCET"],
          careers: ["Software Engineer", "Mechanical Engineer", "Civil Engineer", "Data Scientist", "Architect", "Research Scientist", "IT Consultant"],
          opportunities: "IT Sector, Manufacturing, Construction, Research & Development, Consulting, Startups, Government PSUs",
          specializations: ["Computer Science", "Mechanical", "Civil", "Electrical", "Electronics", "Chemical", "Aerospace"],
          topColleges: ["IITs", "NITs", "IIITs", "BITS Pilani", "VIT", "SRM Institute", "DTU", "NSIT"],
          salaryRange: "₹6-30 LPA",
          duration: "4 Years"
        },
        "biology": {
          title: "Science with Biology (PCB)",
          description: "Physics, Chemistry, Biology",
          degrees: ["MBBS", "BDS", "BAMS", "BHMS", "B.Pharm", "B.Sc Nursing", "BPT", "B.Sc Biotechnology", "B.Sc Botany", "B.Sc Zoology"],
          exams: ["NEET UG", "AIIMS", "JIPMER", "CMC Vellore", "Manipal University", "BHU PMT", "AFMC"],
          careers: ["Doctor", "Dentist", "Pharmacist", "Nurse", "Physiotherapist", "Biotechnologist", "Medical Lab Technician"],
          opportunities: "Healthcare, Pharmaceutical Industry, Research, Medical Tourism, Clinical Research, Government Health Services",
          specializations: ["General Medicine", "Surgery", "Pediatrics", "Gynecology", "Orthopedics", "Cardiology", "Neurology"],
          topColleges: ["AIIMS", "PGIMER", "CMC Vellore", "JIPMER", "KMC Manipal", "AFMC Pune", "MAMC Delhi"],
          salaryRange: "₹8-50 LPA",
          duration: "4.5-5.5 Years"
        }
      }
    },
    {
      id: "commerce",
      title: "Commerce",
      icon: <TrendingUp className="icon-small" />,
      color: "blue",
      description: "Accountancy, Business Studies, Economics",
      hasSubStreams: true,
      subStreams: {
        "withMaths": {
          title: "Commerce with Mathematics",
          description: "Accountancy, Business Studies, Economics, Mathematics",
          degrees: ["B.Com (Hons)", "BBA", "B.Eco (Hons)", "CA Foundation", "CS Foundation", "B.Com Applied Economics", "BMS", "BBA LLB"],
          exams: ["CUET UG", "IPMAT", "BBA Entrance", "CA Foundation", "CS Foundation", "CMA Foundation", "NPAT", "SET"],
          careers: ["Chartered Accountant", "Investment Banker", "Data Analyst", "Financial Advisor", "Business Analyst", "Risk Manager"],
          opportunities: "Banking, Finance, Fintech, Consulting, Corporate Sector, Investment Banking, Financial Planning",
          specializations: ["Finance", "Marketing", "HR", "International Business", "Supply Chain", "Digital Marketing"],
          topColleges: ["SRCC", "LSR", "Hindu College", "IIM Indore (IPM)", "NMIMS", "Symbiosis", "Christ University"],
          salaryRange: "₹4-25 LPA",
          duration: "3 Years"
        },
        "withoutMaths": {
          title: "Commerce without Mathematics",
          description: "Accountancy, Business Studies, Economics",
          degrees: ["B.Com", "BBA", "Company Secretary", "Cost Management", "B.Com Corporate", "BBA Retail", "B.Com Taxation"],
          exams: ["CUET UG", "B.Com Admission", "CS Foundation", "CMA Foundation", "IPM", "DU JAT"],
          careers: ["Accountant", "Business Manager", "Company Secretary", "Tax Consultant", "Retail Manager", "Operations Manager"],
          opportunities: "Corporate Sector, Government Jobs, Tax Consulting, Retail Management, Entrepreneurship, Startups",
          specializations: ["Accounting", "Taxation", "Corporate Law", "Retail Management", "Entrepreneurship"],
          topColleges: ["Shri Ram College", "Lady Shri Ram", "Hans Raj College", "Miranda House", "IIM Rohtak"],
          salaryRange: "₹3-15 LPA",
          duration: "3 Years"
        }
      }
    },
    {
      id: "arts",
      title: "Arts/Humanities",
      icon: <Users className="icon-small" />,
      color: "blue",
      description: "History, Political Science, Geography, Psychology",
      hasSubStreams: true,
      subStreams: {
        "law": {
          title: "Law and Legal Studies",
          description: "Legal Studies, Political Science, Economics",
          degrees: ["BA LLB", "BBA LLB", "LLB (3-year)", "LLM", "B.A Political Science", "B.A Sociology"],
          exams: ["CLAT", "LSAT", "AILET", "CUET UG", "DU LLB", "MH CET Law", "AP LAWCET"],
          careers: ["Lawyer", "Judge", "Legal Advisor", "Corporate Counsel", "Public Prosecutor", "Legal Journalist"],
          opportunities: "Corporate Law, Litigation, Judiciary, Legal Consulting, Government Services, International Law",
          specializations: ["Corporate Law", "Criminal Law", "Civil Law", "International Law", "Intellectual Property"],
          topColleges: ["NLSIU Bangalore", "NALSAR Hyderabad", "WBNUJS Kolkata", "NUALS Kochi", "GNLU Gandhinagar"],
          salaryRange: "₹5-40 LPA",
          duration: "5 Years"
        },
        "others": {
          title: "Liberal Arts & Humanities",
          description: "History, Political Science, Geography, Psychology, Sociology",
          degrees: ["BA", "BFA", "BJMC", "BSW", "B.Design", "B.Sc Psychology", "B.A Economics", "B.A English"],
          exams: ["CUET UG", "NID/NIFT", "IIMC Entrance", "JMI Entrance", "DUET", "BHU UET"],
          careers: ["Journalist", "Designer", "Social Worker", "Teacher", "Civil Servant", "Psychologist", "Content Writer"],
          opportunities: "Media, Design, Civil Services, Education, Social Sector, Creative Industries, Digital Marketing",
          specializations: ["Journalism", "Fine Arts", "Social Work", "Psychology", "Economics", "English Literature"],
          topColleges: ["St. Stephen's", "Miranda House", "JNU", "DU Colleges", "IIMC", "NID", "NIFT"],
          salaryRange: "₹3-20 LPA",
          duration: "3 Years"
        }
      }
    }
  ],
  "12th": [
    // ... (same as before, but update all colors to "blue")
    // Add 'color: "blue"' to all stream objects
  ],
  "UG": [
    // ... (same as before, but update all colors to "blue")
    // Add 'color: "blue"' to all stream objects
  ]
};

// Update all colors in roadmapData to "blue" for consistency
Object.keys(roadmapData).forEach(level => {
  roadmapData[level].forEach(stream => {
    stream.color = "blue";
    if (stream.subStreams) {
      Object.values(stream.subStreams).forEach(subStream => {
        // Optionally add color to subStreams if needed
      });
    }
  });
});

const StudentRoadmap = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [currentLevel, setCurrentLevel] = useState("10th");
  const [userClass, setUserClass] = useState("10th");
  const [selectedStream, setSelectedStream] = useState(null);
  const [selectedSubStream, setSelectedSubStream] = useState(null);
  const [navigationLevel, setNavigationLevel] = useState('main');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState('overview'); // overview, streams, stats

  useEffect(() => {
    const storedClass = localStorage.getItem('userClass') || "10th";
    setUserClass(storedClass);
    setCurrentLevel(storedClass);
  }, []);

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const selectStream = (streamId) => {
    setSelectedStream(streamId);
    setNavigationLevel('stream');
    setActiveView('streams');
    if (window.innerWidth < 1024) setSidebarOpen(false);
  };

  const selectSubStream = (subStreamId) => {
    setSelectedSubStream(subStreamId);
    setNavigationLevel('substream');
    if (window.innerWidth < 1024) setSidebarOpen(false);
  };

  const goBack = () => {
    if (navigationLevel === 'substream') {
      setNavigationLevel('stream');
      setSelectedSubStream(null);
    } else if (navigationLevel === 'stream') {
      setNavigationLevel('main');
      setSelectedStream(null);
      setActiveView('overview');
    }
  };

  const currentLevelData = roadmapData[currentLevel] || [];

  const getColorClasses = (color) => {
    return {
      bg: "bg-gradient-to-r from-blue-100 to-blue-50",
      hover: "hover:from-blue-200 hover:to-blue-100",
      light: "bg-blue-50",
      text: "text-blue-700",
      border: "border-blue-200",
      chart: "rgba(96, 165, 250, 0.8)"
    };
  };

  const getChartData = () => {
    const data = roadmapData[currentLevel];
    if (!data) return null;

    const labels = data.map(item => item.title);
    const colors = data.map(() => getColorClasses("blue").chart);
    
    const values = currentLevel === "10th" ? [45, 30, 25] : 
                   currentLevel === "12th" ? [35, 25, 20, 20] : 
                   [30, 25, 25, 20];

    return {
      labels,
      datasets: [
        {
          label: 'Student Preference (%)',
          data: values,
          backgroundColor: colors,
          borderColor: 'rgba(59, 130, 246, 1)',
          borderWidth: 2,
          borderRadius: 8,
        },
      ],
    };
  };

  const getPieChartData = () => {
    const data = roadmapData[currentLevel];
    if (!data) return null;

    const labels = data.map(item => item.title);
    const colors = data.map(() => getColorClasses("blue").chart);
    const values = currentLevel === "10th" ? [45, 30, 25] : 
                   currentLevel === "12th" ? [35, 25, 20, 20] : 
                   [30, 25, 25, 20];

    return {
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: colors,
          borderColor: '#ffffff',
          borderWidth: 2,
        },
      ],
    };
  };

  const getLevelTitle = () => {
    switch(currentLevel) {
      case "10th": return "Stream Selection Guide";
      case "12th": return "Career Path Explorer";
      case "UG": return "Professional Growth Roadmap";
      default: return "Academic Roadmap";
    }
  };

  const Sidebar = () => (
    <>
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <Book className="logo-icon" />
            <h2 className="logo-text">EduPath</h2>
          </div>
          <button 
            className="sidebar-close"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="sidebar-content">
          <nav className="sidebar-nav">
            <div className="sidebar-section">
              <h3 className="sidebar-section-title">Academic Levels</h3>
              <div className="level-buttons-sidebar">
                {["10th", "12th", "UG"].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => {
                      setCurrentLevel(lvl);
                      setNavigationLevel('main');
                      setSelectedStream(null);
                      setSelectedSubStream(null);
                      setActiveView('overview');
                      if (window.innerWidth < 1024) setSidebarOpen(false);
                    }}
                    className={`level-button-sidebar ${currentLevel === lvl ? 'active' : ''}`}
                  >
                    <div className="level-button-icon">
                      {lvl === "UG" ? "🎓" : `📚`}
                    </div>
                    <span>{lvl === "UG" ? "After Graduation" : `Class ${lvl}`}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3 className="sidebar-section-title">Views</h3>
              <div className="view-buttons">
                <button
                  onClick={() => {
                    setActiveView('overview');
                    setNavigationLevel('main');
                    if (window.innerWidth < 1024) setSidebarOpen(false);
                  }}
                  className={`view-button ${activeView === 'overview' ? 'active' : ''}`}
                >
                  <Home className="view-icon" />
                  Overview
                </button>
                <button
                  onClick={() => {
                    setActiveView('streams');
                    if (window.innerWidth < 1024) setSidebarOpen(false);
                  }}
                  className={`view-button ${activeView === 'streams' ? 'active' : ''}`}
                >
                  <Book className="view-icon" />
                  Streams
                </button>
                <button
                  onClick={() => {
                    setActiveView('stats');
                    if (window.innerWidth < 1024) setSidebarOpen(false);
                  }}
                  className={`view-button ${activeView === 'stats' ? 'active' : ''}`}
                >
                  <BarChart3 className="view-icon" />
                  Statistics
                </button>
              </div>
            </div>

            {selectedStream && (
              <div className="sidebar-section">
                <h3 className="sidebar-section-title">Current Stream</h3>
                <div className="current-stream">
                  <div className="current-stream-icon">
                    {roadmapData[currentLevel].find(s => s.id === selectedStream)?.icon}
                  </div>
                  <div className="current-stream-info">
                    <h4 className="current-stream-title">
                      {roadmapData[currentLevel].find(s => s.id === selectedStream)?.title}
                    </h4>
                    <p className="current-stream-desc">
                      {roadmapData[currentLevel].find(s => s.id === selectedStream)?.description}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="sidebar-section">
              <h3 className="sidebar-section-title">Quick Links</h3>
              <div className="quick-links">
                <a href="#" className="quick-link">
                  <Target className="quick-link-icon" />
                  Career Assessment
                </a>
                <a href="#" className="quick-link">
                  <Building className="quick-link-icon" />
                  College Finder
                </a>
                <a href="#" className="quick-link">
                  <Clock className="quick-link-icon" />
                  Exam Calendar
                </a>
                <a href="#" className="quick-link">
                  <DollarSign className="quick-link-icon" />
                  Scholarship Info
                </a>
              </div>
            </div>
          </nav>
        </div>

        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar">
              <GraduationCap className="w-6 h-6 text-blue-600" />
            </div>
            <div className="user-details">
              <p className="user-name">Student</p>
              <p className="user-class">Class {userClass}</p>
            </div>
          </div>
        </div>
      </aside>
      
      {/* Mobile Overlay - only show when sidebar is open on mobile */}
      {sidebarOpen && window.innerWidth < 1024 && (
        <div 
          className="mobile-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );

  const MainStreamCard = ({ stream, index }) => {
    const colors = getColorClasses(stream.color);

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
        className="stream-card"
        onClick={() => selectStream(stream.id)}
      >
        <div className="relative overflow-hidden">
          <div className="card-content">
            <div className="card-header">
              <div className="icon-container">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="icon-wrapper"
                >
                  {stream.icon}
                </motion.div>
                <div>
                  <h3 className="card-title">
                    {stream.title}
                  </h3>
                  <p className="card-description">
                    {stream.description}
                  </p>
                </div>
              </div>
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="chevron-icon"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.div>
            </div>

            <div className="card-footer">
              <span className="explore-badge">
                Click to Explore →
              </span>
              <div className="flex gap-2">
                {stream.hasSubStreams && (
                  <span className="multiple-options-badge">
                    Multiple Options
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const SubStreamCard = ({ subStreamId, subStreamData, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ x: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
        className="substream-card"
        onClick={() => selectSubStream(subStreamId)}
      >
        <div className="card-content">
          <div className="card-header">
            <div className="flex-1">
              <h4 className="text-lg md:text-xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {subStreamData.title}
              </h4>
              <p className="text-sm text-gray-600 mt-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {subStreamData.description}
              </p>
            </div>
            <ChevronRight className="chevron-icon flex-shrink-0 ml-4" />
          </div>
          
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-number">{subStreamData.degrees.length}</div>
              <div className="stat-label">Degree Options</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">{subStreamData.careers.length}</div>
              <div className="stat-label">Career Paths</div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const DetailedRoadmapView = () => {
    const streamData = roadmapData[currentLevel].find(s => s.id === selectedStream);
    const subStreamData = streamData?.subStreams[selectedSubStream];

    if (!subStreamData) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="detailed-view"
      >
        <div className="detailed-header">
          <motion.button
            onClick={goBack}
            whileHover={{ x: -5 }}
            className="back-button"
          >
            <ChevronRight className="chevron-icon-small rotate-180" />
            Back to {streamData.title} Options
          </motion.button>
          <h2 className="detailed-title">
            {subStreamData.title}
          </h2>
          <p className="detailed-description">
            {subStreamData.description}
          </p>
        </div>

        <div className="detailed-stats">
          {[
            { label: "Degree Programs", value: subStreamData.degrees.length, icon: "🎓" },
            { label: "Entrance Exams", value: subStreamData.exams.length, icon: "📝" },
            { label: "Career Options", value: subStreamData.careers.length, icon: "💼" },
            { label: "Duration", value: subStreamData.duration, icon: "⏰" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="stat-card"
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="info-card">
            <h3 className="section-title">
              <GraduationCap className="section-icon" />
              Available Degrees
            </h3>
            <div className="degree-grid">
              {subStreamData.degrees.map((degree, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="degree-item"
                >
                  <span className="degree-text">{degree}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="info-card">
            <h3 className="section-title">
              <BookOpen className="section-icon" />
              Entrance Exams
            </h3>
            <div className="degree-grid">
              {subStreamData.exams.map((exam, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="degree-item exam-item"
                >
                  <span className="degree-text">{exam}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="info-card">
          <h3 className="section-title">
            <Briefcase className="section-icon" />
            Career Opportunities
          </h3>
          <div className="career-grid">
            {subStreamData.careers.map((career, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="career-item"
              >
                <span className="career-text">{career}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="info-card">
            <h3 className="section-title">
              <TrendingUp className="section-icon" />
              Specializations
            </h3>
            <div className="specialization-list">
              {subStreamData.specializations.map((spec, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="specialization-item"
                >
                  <div className="specialization-bullet"></div>
                  <span className="specialization-text">{spec}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="info-card">
            <h3 className="section-title">
              <Building className="section-icon" />
              Top Colleges
            </h3>
            <div className="specialization-list">
              {subStreamData.topColleges.map((college, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="specialization-item"
                >
                  <div className="specialization-bullet"></div>
                  <span className="specialization-text">{college}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="info-card">
            <h3 className="section-title">
              <DollarSign className="section-icon" />
              Salary Range
            </h3>
            <div className="salary-card">
              <div className="salary-value">{subStreamData.salaryRange}</div>
              <p className="salary-description">Average starting salary for professionals</p>
            </div>
          </div>

          <div className="info-card">
            <h3 className="section-title">
              <Clock className="section-icon" />
              Opportunities
            </h3>
            <div className="opportunities-content">
              <p className="opportunities-text">{subStreamData.opportunities}</p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#1e293b',
        bodyColor: '#475569',
        padding: 12,
        borderColor: '#e2e8f0',
        borderWidth: 1,
        titleFont: { family: 'Inter, sans-serif', size: 14 },
        bodyFont: { family: 'Inter, sans-serif', size: 12 },
        cornerRadius: 8,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(226, 232, 240, 0.5)',
          drawBorder: false
        },
        ticks: {
          font: { family: 'Inter, sans-serif' },
          color: '#64748b'
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: { family: 'Inter, sans-serif', size: 12 },
          color: '#64748b'
        }
      }
    }
  };

  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: { family: 'Inter, sans-serif', size: 12 },
          padding: 20,
          usePointStyle: true,
          color: '#475569'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#1e293b',
        bodyColor: '#475569',
        padding: 12,
        borderColor: '#e2e8f0',
        borderWidth: 1,
        cornerRadius: 8,
      }
    }
  };

  const renderMainContent = () => {
    if (navigationLevel === 'substream') {
      return <DetailedRoadmapView />;
    }

    if (activeView === 'stats') {
      return (
        <div className="stats-view">
          <h2 className="view-title">Statistics & Insights</h2>
          <div className="stats-grid-main">
            <div className="chart-card">
              <h3 className="chart-title">
                <BarChart3 className="chart-icon" />
                Student Preferences
              </h3>
              <div className="chart-container">
                {getChartData() && <Bar data={getChartData()} options={chartOptions} />}
              </div>
            </div>
            <div className="chart-card">
              <h3 className="chart-title">
                <PieChart className="chart-icon" />
                Distribution Analysis
              </h3>
              <div className="chart-container">
                {getPieChartData() && <Pie data={getPieChartData()} options={pieChartOptions} />}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <>
        <div className="hero-section">
          <h1 className="hero-title">
            🎓 {getLevelTitle()}
          </h1>
          <p className="hero-description">
            Explore detailed career paths, degree options, and make informed decisions for your academic future.
          </p>
          
          <div className="hero-stats-main">
            <div className="hero-stat">
              <div className="hero-stat-number">{currentLevelData.length}</div>
              <div className="hero-stat-label">Main Streams</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">50+</div>
              <div className="hero-stat-label">Career Paths</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">95%</div>
              <div className="hero-stat-label">Success Rate</div>
            </div>
          </div>
        </div>

        {navigationLevel === 'stream' ? (
          <div className="streams-view">
            <div className="view-header">
              <h2 className="view-title">Choose Your Specialization</h2>
              <motion.button
                onClick={goBack}
                whileHover={{ x: -3 }}
                className="back-button-small"
              >
                <ChevronRight className="chevron-icon-small rotate-180" />
                Back to Streams
              </motion.button>
            </div>
            <div className="substream-grid">
              {Object.entries(roadmapData[currentLevel].find(s => s.id === selectedStream).subStreams).map(([subStreamId, subStreamData], index) => (
                <SubStreamCard key={subStreamId} subStreamId={subStreamId} subStreamData={subStreamData} index={index} />
              ))}
            </div>
          </div>
        ) : (
          <div className="streams-view">
            <h2 className="view-title">Available Streams</h2>
            <div className="stream-cards-grid">
              {currentLevelData.map((stream, index) => (
                <MainStreamCard key={stream.id} stream={stream} index={index} />
              ))}
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="roadmap-container">
      <Sidebar />
      
      <main className="main-content">
        {/* Mobile Header */}
        <div className="mobile-header">
          <button 
            className="menu-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="mobile-title">
            <h1 className="app-title">EduPath</h1>
            <span className="current-level">Class {currentLevel}</span>
          </div>
        </div>

        <div className="content-area">
          {renderMainContent()}

          {/* Guidance Section */}
          {navigationLevel === 'main' && activeView !== 'stats' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="guidance-section"
            >
              <h2 className="guidance-title">
                🎯 Expert Guidance
              </h2>
              <div className="guidance-grid">
                <div className="guidance-card">
                  <div className="guidance-icon">🔍</div>
                  <h3 className="guidance-card-title">
                    Research Thoroughly
                  </h3>
                  <p className="guidance-card-text">
                    Explore all options and understand requirements before deciding.
                  </p>
                </div>
                <div className="guidance-card">
                  <div className="guidance-icon">❤️</div>
                  <h3 className="guidance-card-title">
                    Follow Your Passion
                  </h3>
                  <p className="guidance-card-text">
                    Choose paths aligned with your interests for long-term success.
                  </p>
                </div>
                <div className="guidance-card">
                  <div className="guidance-icon">🚀</div>
                  <h3 className="guidance-card-title">
                    Future Growth
                  </h3>
                  <p className="guidance-card-text">
                    Consider fields with strong career prospects and growth potential.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default StudentRoadmap;