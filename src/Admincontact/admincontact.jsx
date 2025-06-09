import React from "react";
import "./admincontact.css";
const AdminContact = () => (
  <div className="admin-contact">
    <h2 id="admin-contact-title">📞 Admin Contact Details</h2>
<section aria-labelledby="admin-contact-title" style={{ marginTop: "30px" }}>
      <p><strong>👤 Name:</strong> G. Priya</p>
      <p><strong>📧 Email:</strong> pryag8601@gmail.com</p>
      <p><strong>📞 Phone:</strong> +91 8925435729</p>
      <p><strong>📍 Address:</strong> 1/60(A), Odathalampathi, Kunnathur, Tiruppur District, Tamil Nadu - 638103</p>
      <p><strong>🕘 Office Hours:</strong> Monday to Saturday, 10:00 AM to 6:00 PM</p>
      <p><strong>🌐 Website:</strong>
        <a
          href="https://yourcenter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          yourcenter.com
        </a>
      </p>
    </section>
  </div>
);
export default AdminContact;
