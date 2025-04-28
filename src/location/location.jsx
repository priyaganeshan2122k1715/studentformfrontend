import React from "react";

const Location = () => (
  <div>
    <h2>Our Location</h2>
    <p>
      📍 1/60(A), Odathalampathi,<br />
      Kunnathur, Tiruppur District - 638103, Tamil Nadu
    </p>

    <iframe
      title="Google Map Location"
      width="100%"
      height="700"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.0242275119745!2d77.58254847474259!3d11.28043785057367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba91e65c3bfffa3%3A0x2e0aa103c3deafdf!2sOdathalampatti%2C%20Tamil%20Nadu%20638103!5e0!3m2!1sen!2sin!4v1713617452927!5m2!1sen!2sin"
    ></iframe>
  </div>
);

export default Location;
