import React, { useState } from "react";
import RegisterForm from "./design";
import LoginForm from "./LoginForm";




const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(""); 

  return (
    <div>
      {!isLoggedIn ? (
        <LoginForm setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />
      ) : userRole === "admin" ? (
        <RegisterForm></RegisterForm>
       
) : (
        <div>You are logged in, but not an admin.</div>   )}
       
    </div>
  );
};

export default App;
