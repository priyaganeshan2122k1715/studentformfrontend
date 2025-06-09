import React from "react";
import "./courseDetails.css"; 
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
const CourseDetails = () => {
  return (
    <div className="course-details-page">
      <h2>Course Details</h2>
      {Object.entries(subCourseDetails).map(([subCourseName, types]) => (
        <div key={subCourseName} className="course-box">
          <h3>{subCourseName}</h3>
          <table className="course-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Duration</th>
                <th>Tutor</th>
              </tr>
            </thead>
            <tbody>
              {["online", "offline"].map((type) => (
                <tr key={type}>
                  <td>{type}</td>
                  <td>₹{types[type]?.amount}</td>
                  <td>{types[type]?.duration}</td>
                  <td>{types[type]?.tutor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};
export default CourseDetails;
