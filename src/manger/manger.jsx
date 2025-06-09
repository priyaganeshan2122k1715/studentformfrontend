import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './manger.css'; 
import { useNavigate } from 'react-router-dom';
const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
useEffect(() => {
    fetchUsers();
  }, []);
const fetchUsers = () => {
    axios.get('https://studentform-4.onrender.com/api/student-details')
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => console.error("❌ Error fetching users:", err));
  };
const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios.delete(`https://studentform-4.onrender.com/api/student/${id}`)
        .then(() => {
          alert("🗑️ Deleted successfully");
          fetchUsers();
        })
        .catch((err) => console.error("❌ Error deleting user:", err));
    }
  };
 const filteredUsers = users.filter((user) =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );
return (
    <div className="manage-users">
      <h2>👥 Manage Registered Users</h2>
 <input
        type="text"
        placeholder="Search by name or email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-box"
      />
<table className="user-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name || '-'}</td>
                <td>{user.email}</td>
                <td>{user.phone || '-'}</td>
                <td>{user.role}</td>
                <td>
                <button className="edit-btn" onClick={() => navigate(`/edit/${user._id}`)}>
    Edit
  </button>
                  <button className="delete-btn" onClick={() => handleDelete(user._id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
