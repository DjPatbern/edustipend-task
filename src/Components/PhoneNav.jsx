import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { RiPlayListFill } from "react-icons/ri";
import { BiTrendingUp } from "react-icons/bi";

// PHONE NAV MARKUP
const PhoneNav = () => {
  //Navigation development for small screen phones
  return (
    // MARKUP
    <div className="phone-footer">
      <Link to="/">
        <AiOutlineHome className="phonenav-link" />
      </Link>
      <Link to="/playlist">
        <RiPlayListFill className="phonenav-link" />
      </Link>
      <Link to="/trending">
        <BiTrendingUp className="phonenav-link" />
      </Link>
    </div>
  );
};

export default PhoneNav;
