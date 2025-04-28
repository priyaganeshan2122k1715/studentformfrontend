// import React, { useState, useEffect } from 'react';
// import "./notification.css"
// const Notifications = () => {
//   // Sample notifications data
//   const [notifications, setNotifications] = useState([
//     {
//       id: 1,
//       message: 'Application deadline is coming up!',
//       date: '2025-04-30',
//       type: 'deadline', // Can be 'deadline', 'update', 'holiday'
//     },
//     {
//       id: 2,
//       message: 'New course available in the IT department.',
//       date: '2025-05-05',
//       type: 'update',
//     },
//     {
//       id: 3,
//       message: 'School closed for holidays from May 10 to May 12.',
//       date: '2025-05-09',
//       type: 'holiday',
//     },
//   ]);

//   // Optional: Format date to show only 'X days ago' or 'Upcoming in X days'
//   const formatDate = (date) => {
//     const currentDate = new Date();
//     const targetDate = new Date(date);
//     const difference = Math.ceil((targetDate - currentDate) / (1000 * 3600 * 24)); // Difference in days

//     if (difference > 0) {
//       return `In ${difference} days`;
//     } else if (difference < 0) {
//       return `${Math.abs(difference)} days ago`;
//     } else {
//       return 'Today';
//     }
//   };

//   return (
//     <div className="notifications">
//       <h2>Announcements & Notifications</h2>
//       <ul>
//         {notifications.map((notification) => (
//           <li key={notification.id} className={notification.type}>
//             <div>
//               <p className="message">{notification.message}</p>
//               <small className="date">{formatDate(notification.date)}</small>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Notifications;

import React, { useState } from 'react';
import { FaBell, FaCalendarAlt, FaGift } from 'react-icons/fa'; // Importing the icons

const Notifications = () => {
  const [notifications] = useState([
    {
      id: 1,
      message: 'Application deadline is approaching soon!',
      type: 'deadline', // Specific type for deadlines
      date: '2025-05-10',
    },
    {
      id: 2,
      message: 'New course available: Advanced Java Programming.',
      type: 'update', // Specific type for updates
      date: '2025-04-28',
    },
    {
      id: 3,
      message: 'School will be closed for holidays from May 1 to May 3.',
      type: 'holiday', // Specific type for holidays
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

  // Function to get the appropriate icon based on the notification type
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
            {/* Display icon based on notification type */}
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

