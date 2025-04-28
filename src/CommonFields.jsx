import React from "react";

const CommonFields = ({ formData, handleInputChange }) => (
  <>
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
  </>
);

export default CommonFields;