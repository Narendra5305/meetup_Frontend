import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./pageCss/signinSuccess.css"

const SiginSuccessFull = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const userId = params.get("userId");

    if (token && userId) {
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      console.log("Login successful. Token and User ID stored.");
      
      setTimeout(() => navigate("/dashboard"), 1500);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="signin-success-container">
      <div className="loader"></div>
      <h2>Signing you in...</h2>
    </div>
  );
};

export default SiginSuccessFull;
