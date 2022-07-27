import React, { useState } from "react";
import Head from "./Head";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router';
import "./Header.css";
function Header() {
  const navigate=useNavigate()
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [click, setClick] = useState(false);
  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB"}
            onClick={() => {
              setClick(false);
            }}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">About Us</Link>
            </li>
            <li>
              <Link to="/courses">Department</Link>
            </li>
            <li>
              <Link to="/courses">Exams</Link>
            </li>
            <li>
              <Link to="/courses">Gallery</Link>
            </li>

            <li>
              <Link to="/signup">FAQ</Link>
            </li>

            {userInfo?
              <li>
                <Link to="/" onClick={()=>{
                  localStorage.removeItem('userInfo')
                }}>Logout</Link>
              </li>:<li>
                <Link to="/SignIn">Login</Link>
              </li>
            }
          </ul>
          <div className="start">
            <div className="button">GET ADMISSION FORM</div>
          </div>
          <button
            className="toggle"
            onClick={() => {
              setClick(!click);
              navigate('/')
            }}
          >
            {click ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;
