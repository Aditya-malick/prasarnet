import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ setHeaderName }) => {
  const location = useLocation();
  const navigation = useNavigate();
  const isactiveRoute = (path) => {
    const returnValue = location.pathname.startsWith(path) ? true : false;
    return returnValue;
  };

  const handleClick = (type) => {
    if (type == "user") {
      setHeaderName("USER PROFILE");
      navigation("/profile");
    } else if (type == "des") {
      setHeaderName("DASHBOARD");
      navigation("/dashboard");
    } else if (type == "todoList") {
      setHeaderName("TODO LIST");
      navigation("/Todolist");
    } else if (type == "todoFrom") {
      setHeaderName("TODO LIST FORM");
      navigation("/Todoform");
    }
  };

  return (
    <div>
      <div className="dash">
        <h4 className="nav">MENU SECTION :</h4>
      </div>
      <div className="ll">
        <ul>
          <li onClick={() => handleClick("user")}>USER PROFILE</li>
          {/* <li onClick={()=> setHeaderName("USER PROFILE")}><a href="/profile">USER PROFILE</a></li> */}
          <br />
          {/* <li onClick={() => setHeaderName("DASHBOARD")}>
            <a href="/dashboard">DASHBOARD</a>
          </li> */}
          <li onClick={() => handleClick("des")}>DASHBOARD</li>
          <br />
          {/* <li onClick={() => setHeaderName("TODO LIST")}>
            <a href="/Todolist">TODO LIST</a>
          </li> */}
          <li onClick={() => handleClick("todoList")}>TODO LIST</li>
          <br />
          {/* <li onClick={() => setHeaderName("TODO FORM")}>
            <a href="/Todoform">TODO LIST FORM</a>
          </li> */}
          <li onClick={() => handleClick("todoFrom")}>TODO LIST FORM</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
