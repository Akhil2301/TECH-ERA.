import React from "react";
import Home from "./Pages/User/Home";
import Register from "./Pages/User/Register";
import Login from "./Pages/User/Login";
import Admin from "./Pages/Admin/Admin";
import Dashboard from "./Pages/Admin/AdminHome";
import Usersettings from "./Pages/Admin/Usersettings";
import AddUser from "./Pages/Admin/AddUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import EditUser from "./Pages/Admin/EditUser";


function App() {
  // const BaseUrl='http://localhost:5000'
  return (
    <>
      {/* <BaseProvider value={BaseUrl}> */}
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/admin" element={<Admin />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Usersettings />} />
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/edituser" element={<EditUser />} />
          </Routes>
        </BrowserRouter>
      {/* </BaseProvider> */}
    </>
  );
}

export default App;
