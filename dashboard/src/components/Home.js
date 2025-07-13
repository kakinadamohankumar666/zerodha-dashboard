// Home.js
import React, { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import GeneralContext from "./GeneralContext";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [loading, setLoading] = useState(true); // ✅ added loading state
  const hasVerified = useRef(false); // ✅ prevent double execution
  const { setUsername, username} = useContext(GeneralContext); // ✅ use global context
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (hasVerified.current) return;
    hasVerified.current = true; // ✅ only run once

    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
        return;
      }
      try {
        const { data } = await axios.post(
        `${API}/`,
        {},
        { withCredentials: true }
         );

        const { status, user } = data;
        if (status) {
          setUsername(user);
          toast(`Hello ${user}`, {
            position: "top-right",
          });
        } else {
          removeCookie("token");
          navigate("/login");
        }
      } catch (err) {
        console.error("Verification failed:", err);
        removeCookie("token");
        navigate("/login");
      } finally {
        setLoading(false); // ✅ prevent UI until check finishes
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie, setUsername]);

  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };

  if (loading) return <div>Loading...</div>; // ✅ show loading splash

  return (
    <>
      <TopBar />
      <Dashboard />
      <ToastContainer />
    </>
  );
};

export default Home;

