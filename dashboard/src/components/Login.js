import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

console.log("URL: ", process.env.REACT_APP_API_URL);


const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
  `${process.env.REACT_APP_API_URL}/login`, // ← Add `/login` here
  { ...inputValue },
  { withCredentials: true }
);



      const { success, message } = data;
      if (success) {
        toast.success(message, { position: "bottom-left" });
        window.location.href = "/";
      } else {
        toast.error(message, { position: "bottom-left" });
      }
    } catch (error) {
      console.log(error);
    }

    setInputValue({
      email: "",
      password: "",
    });
  };

  return (
    <div className="auth_page">
      <div className="form_container">
        <h2>Login Account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
            />
          </div>
          <button type="submit">Submit</button>
          <span>
            Already have an account? <Link to={"/signup"}>Signup</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
