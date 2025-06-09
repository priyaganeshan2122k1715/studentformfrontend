import React, { useState } from 'react';
import { FaBell, FaCalendarAlt, FaGift } from 'react-icons/fa'; // Importing the icons
const Notifications = () => {
  const [notifications] = useState([
    {
      id: 1,
      message: 'Application deadline is approaching soon!',
      type: 'deadline', 
      date: '2025-05-10',
    },
    {
      id: 2,
      message: 'New course available: Advanced Java Programming.',
      type: 'update', 
      date: '2025-04-28',
    },
    {
      id: 3,
      message: 'School will be closed for holidays from May 1 to May 3.',
      type: 'holiday', 
      date: '2025-05-01',
    },
  ]);
const formatDate = (date) => {
    const currentDate = new Date();
    const targetDate = new Date(date);
    const difference = Math.ceil((targetDate - currentDate) / (1000 * 3600 * 24)); // Difference in days
if (difference > 0) {
      return `In ${difference} days`;
    } else if (difference < 0) {
      return `${Math.abs(difference)} days ago`;
    } else {
      return 'Today';
    }
  };
  const getIcon = (type) => {
    switch (type) {
      case 'deadline':
        return <FaCalendarAlt />;
      case 'update':
        return <FaBell />;
      case 'holiday':
        return <FaGift />;
      default:
        return <FaBell />;
    }
  };
 return (
    <div className="notifications">
      <h2>Latest Notifications</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id} className={notification.type}>
            <span className="notification-icon">
              {getIcon(notification.type)}
            </span>
            <p>{notification.message}</p>
            <small>{formatDate(notification.date)}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Notifications;

