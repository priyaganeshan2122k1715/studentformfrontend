import React, { useState } from 'react';
import './downloads.css';
function DownloadCertificate() {
  const [filename, setFilename] = useState('');
  const [message, setMessage] = useState('');
const handleDownload = async () => {
    try {
      const response = await fetch(`https://studentform-4.onrender.com/api/download-certificate/${filename}`);
      if (!response.ok) {
        const errorBody = await response.json();
        throw new Error(errorBody.message || 'Certificate not found');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
setMessage('✅ Certificate downloaded successfully!');
    } catch (err) {
      setMessage('❌ ' + err.message);
    }
  };
return (
    <div className="download-container">
      <h2>🎓 Download Your Certificate</h2>
      <input
        type="text"
        placeholder="Enter certificate filename (e.g., certificate001.pdf)"
        value={filename}
        onChange={(e) => setFilename(e.target.value)}
      />
      <button onClick={handleDownload}>Download</button>
      {message && <p>{message}</p>}
    </div>
  );
}
export default DownloadCertificate;
