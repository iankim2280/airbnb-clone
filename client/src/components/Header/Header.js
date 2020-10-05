import React from "react";
import Link from "@material-ui/core/Link";
import logo from "../../img/logo.png";
// import Axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/userAction";
import { Search } from "@material-ui/icons";

const Header = ({ isAuthenticated }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout()).then((res) => {
      if (res.status === "ok") {
        localStorage.setItem("TOKEN", undefined);
        history.push("/");
      }
    });
  };
  return (
    <header className="contentsHeader fixedBefore">
      <div className="logo">
        <Link href="/">
          <img className="logoImage" src={logo} alt="Title and Logo" />
        </Link>
      </div>
      <div className="middle">
        <ul className="middleUl pd-10">
          <li>
            <div>LOCATION</div>
          </li>
          <li className="borderPadding">
            <div>CHECK-IN / CHECKOUT</div>
          </li>
          <li className="borderPadding">
            <div>GUESTS</div>
          </li>
          <li className="borderPadding">
            <Search />
          </li>
        </ul>
      </div>

      <div className="menu mg-t-20">
        {isAuthenticated ? (
          <>
            <button className="button is-rounded">
              <Link href="/account" variant="body2">
                MY Account
              </Link>
            </button>
            <button className="button is-rounded" onClick={handleLogOut}>
              Log out
            </button>
          </>
        ) : (
          <>
            <button className="button is-rounded">
              <Link href="/account" variant="body2">
                MY Account
              </Link>
            </button>
            <button className="button is-rounded">
              <Link href="/login" variant="body2">
                Log in
              </Link>
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
