import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(true);

  //   const Menus = { title: props.nav};
  //   function renderElement(){
  //     if( Menus.title=== 'settings')
  //        return <Setting />;

  //  }

  return (
    <div className="">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 p-5 pt-6 h-screen inline-block bg-dark-purple relative`}
      >
        <img
          onClick={() => setOpen(!open)}
          src={require("../Assets/control.jpg")}
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-dark-purple' ${
            !open && "rotate-180"
          } `}
          alt="arrow"
        />
        <Link to="/dashboard">
          <div className="flex gap-x-4 items-center">
            <img
              src={require("../Assets/logo.png")}
              className={`w-16 cursor-pointer duration-500`}
              alt="logo"
            />
            <h1
              className={`text-white orgin-left font-medium text-xl duration-300 ${
                !open && "scale-0"
              }`}
            >
              TECH ERA.
            </h1>
          </div>
        </Link>
        <ul className="pt-6 ">
          {/* {Menus.map((menu, index) => { */}
          {/* return ( */}
          <Link to="/settings" className="text-gray-300 flex gap-x-4 items-center">
            <img
              src={require(`../Assets/Setting.png`)}
              className={`w-10 cursor-pointer duration-500`}
              alt="logo"
            />
            <h1
              className={`text-white pl-6 orgin-left font-medium text-xl duration-300 ${
                !open && "scale-0"
              }`}
            >
              Settings
            </h1>
          </Link>

          <Link
            to="/admin"
            className="text-gray-300 flex gap-x-4 items-center"
          >
            <img
              src={require(`../Assets/Setting.png`)}
              className={`w-10 cursor-pointer duration-500`}
              alt="logo" onClick={()=>{
                localStorage.removeItem('userInfo')
              }}
            />
            <h1
              className={`text-white pl-6 orgin-left font-medium text-xl duration-300 ${
                !open && "scale-0"
              }`}
              onClick={() => {
                localStorage.removeItem("userInfo");
              }}
            >
              Logout
            </h1>
          </Link>
          {/* ); */}
          {/* })} */}
        </ul>
      </div>
      {/* <div className="text-2x1 font-semibold flex-1 h-screen">
        <Head />
        {renderElement() }
      </div> */}
    </div>
  );
}

export default Header;
