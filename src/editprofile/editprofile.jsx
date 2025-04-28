import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './edit.css';

const EditProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios.get(`https://backend-znrk.onrender.com/api/student/${id}`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch(() => {
        setErrorMessage('❌ Error loading user data');
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://backend-znrk.onrender.com/api/student/${id}`, formData)
      .then(() => {
        alert('✅ User updated successfully!');
        navigate('/manage-users');
      })
      .catch(() => {
        setErrorMessage('❌ Failed to update user');
      });
  };

  if (!formData) return <p>Loading...</p>;

  return (
    <div className="edit-profile">
      <h2>✏️ Edit User</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleUpdate}>
        <div>
          <label>Name:</label>
          <input name="name" value={formData.name || ''} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input name="email" value={formData.email || ''} onChange={handleChange} />
        </div>
        <div>
          <label>Phone:</label>
          <input name="phone" value={formData.phone || ''} onChange={handleChange} />
        </div>
        <div>
          <label>Role:</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
