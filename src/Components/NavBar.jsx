import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";
import { useRegisterContext } from "../ContextManagers/SignupContext";

// NAVBAR MARKUP
const NavBar = () => {
  // username and handleLogout state imported from the SignUp context provider
  const { auth, handleLogout } = useRegisterContext();

  //Logic to detect the active route location
  const location = useLocation();

  //Logic to get the path name from the location logic above
  //this logic will be used to determine active routes for css styling
  const { pathname } = location;

  const splitLocation = pathname.split("/");
  return (
    // MARKUP
    <div className="nav">
      <div>
        <Link to="/">
          <AiTwotoneHome className="home-icon" />
        </Link>
      </div>
      <div>
        <Link to="/contact" id={splitLocation[1] === "contact" ? "active" : ""}>
          Contact us
        </Link>
        <Link
          to="/signup"
          id={splitLocation[1] === "signup" ? "active" : ""}
          onClick={auth && handleLogout}
        >
          {auth ? "Logout" : "Signup"}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
