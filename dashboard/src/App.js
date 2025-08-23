// // // In: src/App.js

// // import React from "react";
// // import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// // import Home from "./components/Home";
// // import Login from "./components/Login";
// // import Signup from "./components/Signup";
// // import ProtectedRoute from "./components/ProtectedRoute";

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         {/* --- Public Routes --- */}
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/signup" element={<Signup />} />

// //         {/* --- Protected Routes --- */}
// //         <Route element={<ProtectedRoute />}>
// //           <Route path="/" element={<Home />} />
// //         </Route>
        
// //         {/* --- Fallback Route --- */}
// //         <Route path="*" element={<Navigate to="/login" />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;

// // In: src/App.js

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import SuccessPage from "./components/SuccessPage";
// // We no longer import ProtectedRoute

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* All routes are now public */}
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import './App.css';

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // The BrowserRouter MUST be the top-level component in this file.
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* ProtectedRoute is now safely inside the BrowserRouter */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;