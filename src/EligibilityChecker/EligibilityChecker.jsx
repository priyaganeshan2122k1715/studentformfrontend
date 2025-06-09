import React, { useState } from "react";
const EligibilityChecker = () => {
  const [formData, setFormData] = useState({
    age: "",
    course: "",
    eligibilityStatus: "",
  });
const [errorMessage, setErrorMessage] = useState("");
  const eligibilityCriteria = {
    "Software Development": 18,
    "Web Development": 16,
    "Non-Coding Course": 18,
  "Server-side course":16,
    "Multimedia course":17,
"Advanced Course":18,
  };
  const checkEligibility = () => {
    const { age, course } = formData;
    const minAge = eligibilityCriteria[course];
 if (!course || !minAge) {
      setFormData((prevData) => ({
        ...prevData,
        eligibilityStatus: "Please select a valid course",
      }));
      return;
    }
if (age >= minAge) {
      setFormData((prevData) => ({
        ...prevData,
        eligibilityStatus: "Eligible",
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        eligibilityStatus: "Not Eligible",
      }));
    }
  };
const handleSubmit = (e) => {
    e.preventDefault();
if (!formData.course || formData.eligibilityStatus === "Not Eligible") {
      setErrorMessage("You must be eligible for the course to submit the form.");
      return;
    }
 alert("Form submitted successfully!");
  };
return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Eligibility Checker</h2>
<div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
        </div>
<div>
          <label>Course:</label>
          <select
            name="course"
            value={formData.course}
            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
          >
            <option value="">Select Course</option>
            <option value="Software Development">Software Development</option>
            <option value="Server-side course">Server-side Course</option>
            <option value="Multimedia course">Multimedia Course</option>
            <option value="Web Development">Web Development</option>
            <option value="Non-Coding Course">Non-Coding Course</option>
            <option value="Advanced Course">Advanced Course</option>
          </select>
        </div>
<button type="button" onClick={checkEligibility}>Check Eligibility</button>
        <button type="submit">Submit</button>
{formData.eligibilityStatus && (
          <p>{formData.eligibilityStatus}</p>
        )}
{errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </form>
    </div>
 );
};
export default EligibilityChecker;


  
