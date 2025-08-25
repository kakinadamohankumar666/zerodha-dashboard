// // Home.js
// import React, { useEffect, useRef, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";

// import TopBar from "./TopBar";
// import Dashboard from "./Dashboard";
// import GeneralContext from "./GeneralContext";

// const Home = () => {
//   const navigate = useNavigate();
//   const [cookies, removeCookie] = useCookies([]);
//   const [loading, setLoading] = useState(true); // ✅ added loading state
//   const hasVerified = useRef(false); // ✅ prevent double execution
//   const { setUsername, username} = useContext(GeneralContext); // ✅ use global context
//   const API = process.env.REACT_APP_API_URL;

//   useEffect(() => {
//     if (hasVerified.current) return;
//     hasVerified.current = true; // ✅ only run once

//     const verifyCookie = async () => {
//       if (!cookies.token) {
//         navigate("/login");
//         return;
//       }
//       try {
//         const { data } = await axios.post(
//         `${API}/`,
//         {},
//         { withCredentials: true }
//          );

//         const { status, user } = data;
//         if (status) {
//           setUsername(user);
//           toast(`Hello ${user}`, {
//             position: "top-right",
//           });
//         } else {
//           removeCookie("token");
//           navigate("/login");
//         }
//       } catch (err) {
//         console.error("Verification failed:", err);
//         removeCookie("token");
//         navigate("/login");
//       } finally {
//         setLoading(false); // ✅ prevent UI until check finishes
//       }
//     };

//     verifyCookie();
//   }, [cookies, navigate, removeCookie, setUsername]);

//   const Logout = () => {
//     removeCookie("token");
//     navigate("/signup");
//   };

//   if (loading) return <div>Loading...</div>; // ✅ show loading splash

//   return (
//     <>
//       <TopBar />
//       <Dashboard />
//       <ToastContainer />
//     </>
//   );
// };

// export default Home;

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";

// const Home = () => {
//   const navigate = useNavigate();
//   const [cookies, removeCookie] = useCookies([]);
//   const [username, setUsername] = useState("");
//   useEffect(() => {
//     const verifyCookie = async () => {
//       if (!cookies.token) {
//         navigate("/login");
//       }
//       const { data } = await axios.post(
//         "http://localhost:3002",
//         {},
//         { withCredentials: true }
//       );
//       const { status, user } = data;
//       setUsername(user);
//       return status
//         ? toast(`Hello ${user}`, {
//             position: "top-right",
//           })
//         : (removeCookie("token"), navigate("/login"));
//     };
//     verifyCookie();
//   }, [cookies, navigate, removeCookie]);
//   const Logout = () => {
//     removeCookie("token");
//     navigate("/signup");
//   };
//   return (
//     <>
//       <div className="home_page">
//         <h4>
//           {" "}
//           Welcome <span>{username}</span>
//         </h4>
//         <button onClick={Logout}>LOGOUT</button>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default Home;

import React from "react";
import { ToastContainer } from "react-toastify";

// Imports from your first file
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";

const Home = () => {

  // The content inside the return is from your first file.
  return (
    <>
      <TopBar /> {/* IMPORTANT: See note below */}
      <Dashboard />
      <ToastContainer />
    </>
  );
};

export default Home;
