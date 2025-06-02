


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './priya.css';
import { FaThLarge, FaUserPlus, FaUser, FaFileAlt, FaClipboardList, FaSignOutAlt } from 'react-icons/fa';

import Home from './Home/home';
import RegisterForm from './RegisterForm';
import ManageUsers from './manger/manger';
import UserProfile from './user profile/userprofile';
import EditProfile from './editprofile/editprofile';
import CourseDetails from './cousre/coursedetails';
import EligibilityChecker from './EligibilityChecker/EligibilityChecker';
import Location from './location/location';
import AdminContact from './Admincontact/admincontact';
import Logout from './Logout/logout';
import Feedback from './Feedback/Feedback';
import Notifications from './notification/notification';  // Import the Notifications component

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-logo">
            <h2>Admission Form</h2>
          </div>
          <ul className="sidebar-links">
            <li className="category-title">Quick Links</li>
            <li>
              <Link to="/home"><FaThLarge /> Home</Link>
            </li>
            <li className="category-title">Admin Tools</li>
            <li>
              <Link to="/register"><FaUserPlus /> Register</Link>
            </li>
            <li>
              <Link to="/manage-users"><FaUser /> Manage Users</Link>
            </li>
            <li className="category-title">Course Info</li>
            <li>
              <Link to="/course-details"><FaClipboardList /> Course Details</Link>
            </li>
            <li>
              <Link to="/eligibility-checker"><FaClipboardList /> Eligibility Checker</Link>
            </li>
            <li>
              <Link to="/feedback"><FaFileAlt /> Feedback</Link>
            </li>
            <li className="category-title">Support</li>
            <li>
              <Link to="/contact-admin"><FaFileAlt /> Admin Contact</Link>
            </li>
            <li>
              <Link to="/location"><FaFileAlt /> Location</Link>
            </li>
            <li className="category-title">Logout</li>
            <li>
              <Link to="/logout"><FaSignOutAlt /> Logout</Link>
            </li>
            <li>
              <Link to="/notification"><FaFileAlt /> Notifications</Link> {/* Notifications Link */}
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/manage-users" element={<ManageUsers />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/edit/:id" element={<EditProfile />} />
            <Route path="/course-details" element={<CourseDetails />} />
            <Route path="/eligibility-checker" element={<EligibilityChecker />} />
            <Route path="/contact-admin" element={<AdminContact />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/notification" element={<Notifications />} /> {/* Notifications Route */}
            <Route path="/location" element={<Location />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
