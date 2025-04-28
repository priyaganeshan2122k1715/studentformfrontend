

import React, { useState, useEffect } from "react";
import axios from "axios";

const MyApplications = () => {
  const [applications, setApplications] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get("https://backend-znrk.onrender.com/api/myApplications")
      .then((response) => {
        setApplications(response.data);
      })
      .catch((err) => {
        setErrorMessage("Error fetching applications.");
        console.error("Error fetching applications:", err);
      });
  }, []);

  const handleCancelApplication = (applicationId) => {
    axios
      .delete(`https://backend-znrk.onrender.com/api/cancelApplication/${applicationId}`)
      .then(() => {
        setApplications((prevApps) =>
          prevApps.filter((app) => app.id !== applicationId)
        );
        alert("Application cancelled successfully!");
      })
      .catch((err) => {
        setErrorMessage("Error cancelling application.");
        console.error("Error cancelling application:", err);
      });
  };

  return (
    <div>
      <h2>My Applications</h2>

      {applications.length > 0 ? (
        <ul>
          {applications.map((app) => (
            <li key={app.id}>
              <strong>{app.course}</strong> - {app.status}
              {app.status === "Pending" && (
                <button onClick={() => handleCancelApplication(app.id)}>
                  Cancel Application
                </button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No applications found.</p>
      )}

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default MyApplications;
