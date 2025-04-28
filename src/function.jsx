import React, { useState, useEffect } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
    registerDate: new Date().toLocaleDateString(),
    name: "",
    age: "",
    qualification: "",
    phone: "",
    address: "",
    country: "",
    city: "",
    pincode: "",
    course: "",
    courseType: "online",
    remark: "",
    currentStudentNumber: "",
    completedTheCourse: "",
    admissionDate: "",
    courseAmount: "",
    courseTutor: "",
    courseDuration: "",
    selectedSubCourse: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [showAdmissionDetails, setShowAdmissionDetails] = useState(false);
  const [studentCount, setStudentCount] = useState(null);
  const [studentDetails, setStudentDetails] = useState([]);
  const [monthlyStats, setMonthlyStats] = useState({
    registeredThisMonth: 0,
    rejectedThisMonth: 0,
    joinedThisMonth: 0,
    totalStudentsThisYear: 0,
  });
  const [showStudentDetails, setShowStudentDetails] = useState(false);
  const [showStudentList, setShowStudentList] = useState(false); // 🔥 NEW STATE

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


  useEffect(() => {
    if (formData.admissionDate) {
      const admissionMonth = new Date(formData.admissionDate).getMonth() + 1;
      const admissionYear = new Date(formData.admissionDate).getFullYear();
      fetchStudentStats(admissionMonth, admissionYear);
      setShowStudentDetails(true);
    }
  }, [formData.admissionDate]);

  useEffect(() => {
    if (formData.selectedSubCourse) {
      const selectedDetails = subCourseDetails[formData.selectedSubCourse];
      if (selectedDetails) {
        setFormData((prevData) => ({
          ...prevData,
          courseAmount: selectedDetails[formData.courseType].amount,
          courseTutor: selectedDetails[formData.courseType].tutor,
          courseDuration: selectedDetails[formData.courseType].duration,
        }));
      }
    }
  }, [formData.selectedSubCourse, formData.courseType]);

  useEffect(() => {
    fetchStudentCountAndDetails();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.role === "admin" && showAdmissionDetails) {
      if (!formData.course || !formData.courseType || !formData.admissionDate) {
        setErrorMessage("Please fill in all required admission fields.");
        return;
      }
      if (!formData.courseAmount || !formData.courseTutor) {
        setErrorMessage("Please select course type to get course amount and tutor.");
        return;
      }
    }

    if (formData.role === "user" && (!formData.username || !formData.email || !formData.password)) {
      setErrorMessage("Please fill in all required fields for the user.");
      return;
    }

    if (
      formData.role === "admin" &&
      (!formData.name || !formData.age || !formData.qualification || !formData.phone || !formData.address)
    ) {
      setErrorMessage("Please fill in all required fields for the admin.");
      return;
    }

    const admissionMonth = new Date(formData.admissionDate).getMonth() + 1;
    const admissionYear = new Date(formData.admissionDate).getFullYear();

    const dataToSubmit = {
      ...formData,
      admissionMonth,
      admissionYear,
    };

    axios
      .post("http://localhost:2000/register", { formData: dataToSubmit })
      .then(() => {
        alert("Form submitted successfully!");
        fetchStudentCountAndDetails();
      })
      .catch((err) => {
        console.log("Error submitting form:", err);
        setErrorMessage("Error submitting form. Please try again.");
      });
  };

  const fetchStudentStats = (admissionMonth, admissionYear) => {
    axios
      .get(`http://localhost:2000/stats/${admissionMonth}/${admissionYear}`)
      .then((res) => {
        const data = res.data;
        setMonthlyStats({
          registeredThisMonth: data.registeredThisMonth,
          rejectedThisMonth: data.rejectedThisMonth,
          joinedThisMonth: data.joinedThisMonth,
          totalStudentsThisYear: data.totalStudentsThisYear,
        });
        setStudentCount(data.totalStudentsThisYear);
      })
      .catch((err) => {
        console.error("Error fetching stats:", err);
      });
  };

  const fetchStudentCountAndDetails = () => {
    axios
      .get("http://localhost:2000/api/student-details")
      .then((res) => {
        setStudentCount(res.data.count || 0);
        setStudentDetails(res.data.data || []);
      })
      .catch((err) => {
        console.log("Error fetching details:", err);
        setErrorMessage("Error fetching student details.");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Registration Form</h2>

        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Role:</label>
          <select name="role" value={formData.role} onChange={handleInputChange}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {formData.role === "admin" && (
          <>
            <h3>Student Details</h3>
            {["name", "age", "qualification", "phone", "address", "city", "country", "pincode"].map((field) => (
              <div key={field}>
                <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                <input
                  type={["age", "phone", "pincode"].includes(field) ? "number" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  required
                />
              </div>
            ))}
            <div>
              <label>Remark:</label>
              <input type="text" name="remark" value={formData.remark} onChange={handleInputChange} />
            </div>

            <div>
              <label>
                <input
                  type="checkbox"
                  checked={showAdmissionDetails}
                  onChange={() => setShowAdmissionDetails(!showAdmissionDetails)}
                />
                Admission Details
              </label>
            </div>

            {showAdmissionDetails && (
              <>
                <div>
                  <label>Course:</label>
                  <select name="course" value={formData.course} onChange={handleInputChange} required>
                    <option value="">Select Course</option>
                    <option value="Software Development">Software Development</option>
                    <option value="Server-side course">Server-side Course</option>
                    <option value="Multimedia course">Multimedia Course</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Non-Coding Course">Non-Coding Course</option>
                    <option value="Advanced Course">Advanced Course</option>
                  </select>
                </div>

                {formData.course && (
                  <div>
                    <label>Sub-Course:</label>
                    <select
                      name="selectedSubCourse"
                      value={formData.selectedSubCourse}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Sub-Course</option>
                      {/* Conditionally render options */}
                      {/* Add sub-course logic as per your original code */}
                    </select>
                  </div>
                )}

                <div>
                  <label>Course Type:</label>
                  <select name="courseType" value={formData.courseType} onChange={handleInputChange}>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                  </select>
                </div>

                <div>
                  <label>Course Amount:</label>
                  <input type="text" value={formData.courseAmount} readOnly />
                </div>
                <div>
                  <label>Course Tutor:</label>
                  <input type="text" value={formData.courseTutor} readOnly />
                </div>
                <div>
                  <label>Course Duration:</label>
                  <input type="text" value={formData.courseDuration} readOnly />
                </div>

                <div>
                  <label>Admission Date:</label>
                  <input
                    type="date"
                    name="admissionDate"
                    value={formData.admissionDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label>Current Student Number:</label>
                  <input
                    type="text"
                    name="currentStudentNumber"
                    value={formData.currentStudentNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>Completed The Course:</label>
                  <input
                    type="text"
                    name="completedTheCourse"
                    value={formData.completedTheCourse}
                    onChange={handleInputChange}
                  />
                </div>
              </>
            )}
          </>
        )}

        <button type="submit">Submit</button>
      </form>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {studentCount !== null && (
        <div>
          <h3>Total Students This Year: {monthlyStats.totalStudentsThisYear}</h3>
          <p>Registered This Month: {monthlyStats.registeredThisMonth}</p>
          <p>Rejected This Month: {monthlyStats.rejectedThisMonth}</p>
          <p>Joined This Month: {monthlyStats.joinedThisMonth}</p>
        </div>
      )}

     
      <button onClick={() => setShowStudentList((prev) => !prev)}>
        {showStudentList ? "Hide Student Details" : "Show Student Details"}
      </button>

      
      {showStudentList && (
        <>
          {Array.isArray(studentDetails) && studentDetails.length > 0 ? (
            <ul>
              {studentDetails.map((student, i) => (
                <li key={i}>
                  <strong>{student.name}</strong> - {student.email} - {student.phone}
                </li>
              ))}
            </ul>
          ) : (
            <p>No student data available.</p>
          )}
        </>
      )}
    </div>
  );
};

export default RegisterForm;
