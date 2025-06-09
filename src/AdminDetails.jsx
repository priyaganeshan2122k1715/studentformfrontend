import React from "react";
const AdminDetails = ({ formData, handleInputChange }) => (
  <>
    <h3>Student Details</h3>
    {["name", "age", "qualification", "phone", "address", "city", "country", "pincode"].map((field) => (
      <div key={field}>
        <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
        <input
          type={field === "age" || field === "phone" || field === "pincode" ? "number" : "text"}
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
  </>
);
export default AdminDetails;