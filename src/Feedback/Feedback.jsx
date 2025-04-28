

import React, { useState } from 'react';
import axios from 'axios';


const Feedback = () => {
  const [studentId, setStudentId] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://backend-znrk.onrender.com/api/feedback', {
        studentId,
        feedbackText,
      });

      setMessage(res.data.message);
      setFeedbackText('');
      setStudentId('');
    } catch (err) {
      setMessage('❌ Error submitting feedback');
    }
  };

  return (
    <div className="feedback-container">
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          required
        />
        <textarea
          placeholder="Your feedback..."
          value={feedbackText}
          onChange={(e) => setFeedbackText(e.target.value)}
          required
        />
        <button type="submit">Send Feedback</button>
      </form>
      {message && <p className="msg">{message}</p>}
    </div>
  );
};

export default Feedback;
