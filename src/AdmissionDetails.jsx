import React from "react";

const AdmissionDetails = ({
  formData,
  handleInputChange,
  showAdmissionDetails,
  setShowAdmissionDetails,
  subCourseDetails,
}) => (
  <>
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

              {formData.course === "Software Development" && (
                <>
                  <option value="Java Full stack">Java Full Stack</option>
                  <option value="Python Full stack">Python Full Stack</option>
                  <option value="Java/J2EE">Java/J2EE</option>
                  <option value="Python/Django">Python/Django</option>
                  <option value="Ruby">Ruby</option>
                  <option value="Asp.net">Asp.net</option>
                  <option value="Mern/Mean">Mern/Mean</option>
                  <option value="Android">Android</option>
                  <option value="Flutter/Swift">Flutter/Swift</option>
                </>
              )}

              {formData.course === "Server-side course" && (
                <>
                  <option value="Node.js/MongoDB">Node.js/MongoDB</option>
                  <option value="PHP">PHP</option>
                  <option value="Java/J2EE">Java/J2EE</option>
                  <option value="Python/Django">Python/Django</option>
                  <option value="Asp.net">Asp.net</option>
                  <option value="Ethical Hacking">Ethical Hacking</option>
                  <option value="SAP">SAP</option>
                </>
              )}

              {formData.course === "Multimedia course" && (
                <>
                  <option value="Multimedia">Multimedia</option>
                  <option value="Photoshop">Photoshop</option>
                  <option value="AfterEffects">AfterEffects</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Preminder Pro">Premier Pro</option>
                </>
              )}

              {formData.course === "Web Development" && (
                <>
                  <option value="HTML5/CSS3">HTML5/CSS3</option>
                  <option value="Mern/Mean">Mern/Mean Stack</option>
                  <option value="JavaScript/ES6">JavaScript/ES6</option>
                  <option value="Angular/React">Angular/React</option>
                  <option value="UI UX Design">UI/UX Design</option>
                </>
              )}

              {formData.course === "Non-Coding Course" && (
                <>
                  <option value="Tally GST">Tally GST</option>
                  <option value="SAP FI/CO">SAP FI/CO</option>
                  <option value="SAP SO /MM">SAP SD /MM</option>
                  <option value="Basic Networking">Basic Networking</option>
                  <option value="UI UX Design">UI/UX Design</option>
                </>
              )}

              {formData.course === "Advanced Course" && (
                <>
                  <option value="Data Science">Data Science</option>
                  <option value="AI / ML">AI / ML</option>
                  <option value="DevOps">DevOps</option>
                  <option value="AWS /Azure">AWS/Azure</option>
                  <option value="Data Analytics">Data Analytics</option>
                  <option value="Software Testing">Software Testing</option>
                  <option value="Cyber Security">Cyber Security</option>
                  <option value="Ethical Hacking">Ethical Hacking</option>
                </>
              )}
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
);

export default AdmissionDetails;
