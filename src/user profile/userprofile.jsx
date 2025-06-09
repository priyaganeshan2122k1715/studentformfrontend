import React, { useEffect, useState } from "react";
import axios from "axios";
const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
useEffect(() => {
    axios.get(`https://studentform-4.onrender.com/profile/${userId}`)
      .then(res => setUser(res.data))
      .catch(err => console.log("Profile fetch error:", err));
  }, [userId]);
if (!user) return <p>Loading profile...</p>;
return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <h2>👤 {user.role === "admin" ? "Admin Profile" : "Student Profile"}</h2>
<section>
        <h3>Basic Info</h3>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address}</p>
      </section>
 {user.role === "admin" ? (
        <section>
          <h3>📊 Admin Panel</h3>
          <p>Total Students: {user.totalStudents}</p>
          <p>Registered This Month: {user.monthlyStats?.registeredThisMonth}</p>
          <p><a href="/register">Register New Student</a></p>
          <p><a href="/students">View All Students</a></p>
        </section>
      ) : (
        <section>
          <h3>🎓 Course Info</h3>
          <p><strong>Course:</strong> {user.course}</p>
          <p><strong>Sub-Course:</strong> {user.selectedSubCourse}</p>
          <p><strong>Course Type:</strong> {user.courseType}</p>
          <p><strong>Course Tutor:</strong> {user.courseTutor}</p>
          <p><strong>Duration:</strong> {user.courseDuration}</p>
          <p><strong>Admission Date:</strong> {user.admissionDate}</p>
          <p><strong>Course Amount:</strong> ₹{user.courseAmount}</p>
          <p><strong>Status:</strong> {user.completedTheCourse ? "Completed" : "Ongoing"}</p>
        </section>
      )}
<div style={{ marginTop: "2rem" }}>
        <button>Logout</button>
      </div>
    </div>
  );
};
export default UserProfile;
