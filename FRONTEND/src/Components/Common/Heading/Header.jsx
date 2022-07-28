import React, { useState ,useEffect} from "react";
import Head from "./Head";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

import "./Header.css";
function Header() {
  const navigate = useNavigate();
  const userInfo=localStorage.getItem('userInfo',JSON.stringify)

  
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

            {userInfo ? (
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    Swal.fire({
                      title: "Do you Want to Logout?",
                      showDenyButton: true,
                      confirmButtonText: "No",
                      denyButtonText: "Yes",
                      customClass: {
                        actions: "my-actions",
                        confirmButton: "order-3",
                        denyButton: "order-2",
                      },
                    }).then((result) => {
                      if (result.isConfirmed) {
                      } else if (result.isDenied) {
                        // Swal.fire('', '', 'info')
                        localStorage.removeItem("userInfo");
                        navigate("/signin");
                      }
                    });
                  }}
                >
                  Logout
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/SignIn">Login</Link>
              </li>
            )}
          </ul>
          <div className="start">
            <div className="button">GET ADMISSION FORM</div>
          </div>
          <button
            className="toggle"
            onClick={() => {
              setClick(!click);
              navigate("/");
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
