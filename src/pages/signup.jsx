import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./pageCss/signup.css"; // NEW CSS

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: "",
    age: "",
    city: "",
    gender: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://meetup-backend-8rsw.onrender.com/users/signup", formData);
      if (response.status === 201 || response.status === 200) {
        console.log("Signup successful:", response.data);
        setFormData({
          name: "",
          email: "",
          pass: "",
          age: "",
          city: "",
          gender: "",
        });
        navigate("/signin");
      } else {
        console.log("Unexpected response:", response);
      }
    } catch (error) {
      console.log("Signup error:", error);
    }
  };

  

  return (
    <div id="signup">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="pass" placeholder="Password" value={formData.pass} onChange={handleChange} required />
          <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <button type="submit">Sign Up</button>
        </form>
        <a href="/signin">Already have an account? Sign In</a>
      </div>
    </div>
  );
};

export default Signup;
