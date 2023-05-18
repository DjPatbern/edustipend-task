import React from "react";
import { Link, useLocation } from "react-router-dom";
import {AiTwotoneHome} from "react-icons/ai"
import { useRegisterContext } from "../ContextManagers/SignupContext";

const NavBar = () => {
  const {auth} = useRegisterContext()
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");
  return (
    <div className="nav">
      <div><Link to="/"><AiTwotoneHome /></Link></div>
      <div>
        <Link to="/contact" id={splitLocation[1] === "contact" ? "active" : ""}>Contact us</Link>
        <Link to="/signup" id={splitLocation[1] === "signup" ? "active" : ""}>
          { auth ? "Logout" : "Signup"}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
