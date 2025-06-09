import React, { useState } from "react";
import "./LoginForm.css";
const LoginForm = ({ setIsLoggedIn, setUserRole }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
const handleLogin = async (e) => {
    e.preventDefault();
if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }
if (email === "admin@example.com" && password === "admin123") {
      setIsLoggedIn(true);
      setUserRole("admin");
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid credentials. Please try again.");
    }
  };
return (
    <div className="box" >
      <div  className="login">
      <div className="loginbbox"> 
      <h2><i class="fa-solid fa-right-to-bracket"/>Admin Login   <i class="fa-solid fa-heart"></i></h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
{errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
<div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};
export default LoginForm;


