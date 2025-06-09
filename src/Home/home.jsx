import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [studentCount, setStudentCount] = useState(0);
  const [monthlyStats, setMonthlyStats] = useState({
    registeredThisMonth: 0,
    rejectedThisMonth: 0,
    joinedThisMonth: 0,
    totalStudentsThisYear: 0,
  });
  const [showSubCourses, setShowSubCourses] = useState(false); 
const toggleSubCourses = () => {
    setShowSubCourses(!showSubCourses);
  };
const subCourseDetails = {
    "Java/J2EE": {
      online: { amount: "10000", tutor: "Maha", type: "online", duration: "6 months" },
      offline: { amount: "10500", tutor: "Ravi", type: "offline", duration: "6 months" },
    },
    "Java Full stack": {
      online: { amount: "10000", tutor: "Maha", type: "online", duration: "6 months" },
      offline: { amount: "10500", tutor: "Ravi", type: "offline", duration: "6 months" },
    },
    "Mern stack/Mean Stack": {
      online: { amount: "10000", tutor: "Maha", type: "online", duration: "6 months" },
      offline: { amount: "10500", tutor: "Ravi", type: "offline", duration: "6 months" },
    },
    "Python/Django": {
      online: { amount: "9500", tutor: "Maha", type: "online", duration: "6 months" },
      offline: { amount: "10000", tutor: "Ravi", type: "offline", duration: "6 months" },
    },
    "Ruby": {
      online: { amount: "11000", tutor: "Maha", type: "online", duration: "6 months" },
      offline: { amount: "11500", tutor: "Ravi", type: "offline", duration: "6 months" },
    },
    "Android": {
      online: { amount: "11000", tutor: "Maha", type: "online", duration: "6 months" },
      offline: { amount: "11500", tutor: "Ravi", type: "offline", duration: "6 months" },
    },
    "Flutter/Swift": {
      online: { amount: "11000", tutor: "Maha", type: "online", duration: "6 months" },
      offline: { amount: "11500", tutor: "Ravi", type: "offline", duration: "6 months" },
    },
    "R Languge": {
      online: { amount: "11000", tutor: "Maha", type: "online", duration: "6 months" },
      offline: { amount: "11500", tutor: "Ravi", type: "offline", duration: "6 months" },
    },
    "Asp.net": {
      online: { amount: "10500", tutor: "Maha", type: "online", duration: "6 months" },
      offline: { amount: "11000", tutor: "Ravi", type: "offline", duration: "6 months" },
    },
    "Node.js/MongoDB": {
      online: { amount: "12000", tutor: "Surya", type: "online", duration: "6 months" },
      offline: { amount: "12500", tutor: "Anbu", type: "offline", duration: "6 months" },
    },
    "PHP": {
      online: { amount: "11500", tutor: "Surya", type: "online", duration: "6 months" },
      offline: { amount: "12000", tutor: "Anbu", type: "offline", duration: "6 months" },
    },
    "Ethical Hacking": {
      online: { amount: "13000", tutor: "Surya", type: "online", duration: "6 months" },
      offline: { amount: "13500", tutor: "Anbu", type: "offline", duration: "6 months" },
    },
    "Python/Django": {
      online: { amount: "12500", tutor: "Surya", type: "online", duration: "6 months" },
      offline: { amount: "13000", tutor: "Anbu", type: "offline", duration: "6 months" },
    },
    "Photoshop": {
      online: { amount: "8000", tutor: "Santhosh", type: "online", duration: "3 months" },
      offline: { amount: "8500", tutor: "Santhosh", type: "offline", duration: "3 months" },
    },
    "Video Editing": {
      online: { amount: "8500", tutor: "Santhosh", type: "online", duration: "3 months" },
      offline: { amount: "9000", tutor: "Santhosh", type: "offline", duration: "3 months" },
    },
    "AfterEffects": {
      online: { amount: "9500", tutor: "Santhosh", type: "online", duration: "3 months" },
      offline: { amount: "10000", tutor: "Santhosh", type: "offline", duration: "3 months" },
    },
    "Multimedia": {
      online: { amount: "10000", tutor: "Santhosh", type: "online", duration: "3 months" },
      offline: { amount: "10500", tutor: "Santhosh", type: "offline", duration: "3 months" },
    },
    "Preminder Pro": {
      online: { amount: "10000", tutor: "Santhosh", type: "online", duration: "3 months" },
      offline: { amount: "10500", tutor: "Santhosh", type: "offline", duration: "3 months" },
    },
    "HTML5/CSS3": {
      online: { amount: "9000", tutor: "Siva", type: "online", duration: "3 months" },
      offline: { amount: "9500", tutor: "Siva", type: "offline", duration: "3 months" },
    },
    "Mern/Mean": {
      online: { amount: "9500", tutor: "Siva", type: "online", duration: "3 months" },
      offline: { amount: "10000", tutor: "Siva", type: "offline", duration: "3 months" },
    },
    "JavaScript/ES6": {
      online: { amount: "10000", tutor: "Siva", type: "online", duration: "3 months" },
      offline: { amount: "10500", tutor: "Siva", type: "offline", duration: "3 months" },
    },
    "Angular/React": {
      online: { amount: "10500", tutor: "Siva", type: "online", duration: "3 months" },
      offline: { amount: "11000", tutor: "Siva", type: "offline", duration: "3 months" },
    },
    "Tally GST": {
      online: { amount: "7000", tutor: "Jenifer", type: "online", duration: "3 months" },
      offline: { amount: "7500", tutor: "Jenifer", type: "offline", duration: "3 months" },
    },
    "SAP FI/CO": {
      online: { amount: "7500", tutor: "Jenifer", type: "online", duration: "3 months" },
      offline: { amount: "8000", tutor: "Jenifer", type: "offline", duration: "3 months" },
    },
    "SAP SO /MM": {
      online: { amount: "6500", tutor: "Jenifer", type: "online", duration: "3 months" },
      offline: { amount: "7000", tutor: "Jenifer", type: "offline", duration: "3 months" },
    },
    "PGDCA": {
      online: { amount: "6500", tutor: "Jenifer", type: "online", duration: "3 months" },
      offline: { amount: "7000", tutor: "Jenifer", type: "offline", duration: "3 months" },
    },
    "Basic Networking": {
      online: { amount: "7000", tutor: "Jenifer", type: "online", duration: "3 months" },
      offline: { amount: "7500", tutor: "Jenifer", type: "offline", duration: "3 months" },
    },
    "UI UX Design": {
      online: { amount: "14000", tutor: "Logesh", type: "online", duration: "12 months" },
      offline: { amount: "14500", tutor: "Logesh", type: "offline", duration: "12 months" },
    },
    "SAP": {
      online: { amount: "15000", tutor: "Logesh", type: "online", duration: "12 months" },
      offline: { amount: "15500", tutor: "Logesh", type: "offline", duration: "12 months" },
    },
    "Data Science": {
      online: { amount: "16000", tutor: "Logesh", type: "online", duration: "12 months" },
      offline: { amount: "16500", tutor: "Logesh", type: "offline", duration: "12 months" },
    },
   
    "AI / ML": {
      online: { amount: "17000", tutor: "Logesh", type: "online", duration: "12 months" },
      offline: { amount: "17500", tutor: "Logesh", type: "offline", duration: "12 months" },
    },
    "DevOps": {
      online: { amount: "17000", tutor: "Logesh", type: "online", duration: "12 months" },
      offline: { amount: "17500", tutor: "Logesh", type: "offline", duration: "12 months" },
    },
    "AWS /Azure": {
      online: { amount: "17000", tutor: "Logesh", type: "online", duration: "12 months" },
      offline: { amount: "17500", tutor: "Logesh", type: "offline", duration: "12 months" },
    },
    "Data Analytics": {
      online: { amount: "17000", tutor: "Logesh", type: "online", duration: "12 months" },
      offline: { amount: "17500", tutor: "Logesh", type: "offline", duration: "12 months" },
    },
    "Cyber Security": {
      online: { amount: "17000", tutor: "Logesh", type: "online", duration: "12 months" },
      offline: { amount: "17500", tutor: "Logesh", type: "offline", duration: "12 months" },
    },
    "Software Testing": {
      online: { amount: "17000", tutor: "Logesh", type: "online", duration: "12 months" },
      offline: { amount: "17500", tutor: "Logesh", type: "offline", duration: "12 months" },
    },
    "Ethical Hacking": {
      online: { amount: "17000", tutor: "Logesh", type: "online", duration: "12 months" },
      offline: { amount: "17500", tutor: "Logesh", type: "offline", duration: "12 months" },
    },
  };
const mainCourses = [
    "Software Development",
    "Server-side Course",
    "Multimedia Course",
    "Web Development",
    "Non-Coding Course",
    "Advanced Course",
  ];
useEffect(() => {
    fetchStudentData();
  }, []);

  const fetchStudentData = async () => {
    try {
      const res = await axios.get("https://studentform-4.onrender.com/api/student-details");
      setStudentCount(res.data.count || 0);
const currentMonth = new Date().getMonth() + 1;
      const currentYear = new Date().getFullYear();
      const statsRes = await axios.get(`https://studentform-4.onrender.com/stats/${currentMonth}/${currentYear}`);
      setMonthlyStats(statsRes.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };
 return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1>📘 ADMISSION PORTAL</h1>
        <p></p>
        <Link to="/register">
          <button style={styles.button}>Register New Student</button>
        </Link>
      </div>
<div style={styles.statsContainer}>
        <div style={styles.statBox}><h3>Total Students</h3><p>{studentCount}</p></div>
        <div style={styles.statBox}><h3>This Month: Registered</h3><p>{monthlyStats.registeredThisMonth}</p></div>
        <div style={styles.statBox}><h3>This Month: Joined</h3><p>{monthlyStats.joinedThisMonth}</p></div>
        <div style={styles.statBox}><h3>This Month: Rejected</h3><p>{monthlyStats.rejectedThisMonth}</p></div>
      </div>
<div style={styles.section}>
        <h2>📂 Course Information</h2>
        <p><strong>Total Courses:</strong> {mainCourses.length}</p>
        <Link to="/course-details">
        <p><strong>Total Sub-Courses:</strong> {Object.keys(subCourseDetails).length}</p>
        </Link>
      </div>
<footer style={styles.footer}>priyag8601@gamil.com {new Date().getFullYear()}</footer>
    </div>
  );
};
const styles = {
  container: {
    fontFamily: "Segoe UI",
    background: "#f4f6f8",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  hero: {
    background: "linear-gradient(to right, #007bff, #0056b3)",
    color: "#fff",
    padding: "2rem",
    textAlign: "center",
  },
  button: {
    marginTop: "1rem",
    backgroundColor: "#ffc107",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontWeight: "bold",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: "2rem",
    backgroundColor: "#fff",
  },
  statBox: {
    backgroundColor: "#e9ecef",
    padding: "1rem",
    borderRadius: "8px",
    width: "200px",
    textAlign: "center",
    margin: "10px",
  },
  section: {
    padding: "2rem",
    backgroundColor: "#fff",
    margin: "1rem auto",
    maxWidth: "900px",
    borderRadius: "8px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
  },
  toggleButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    marginBottom: "1rem",
    padding: "1rem",
    backgroundColor: "#f8f9fa",
    borderRadius: "6px",
  },
  footer: {
    marginTop: "auto",
    textAlign: "center",
    padding: "1rem",
    backgroundColor: "#333",
    color: "#ccc",
  },
};
export default Home;
