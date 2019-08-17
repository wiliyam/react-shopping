import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        {currentUser ? (
          <div className="option" onClick={()=>{auth.signOut()}}  >SIGN OUT</div>
        ) : (
          <Link className="option" to="/signin">
            LOGIN
          </Link>
        )}

        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
