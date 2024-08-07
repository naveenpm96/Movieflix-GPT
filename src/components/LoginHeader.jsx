import React from "react";
import img from "../Assets/language-svgrepo-com.svg";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";

const LoginHeader = () => {
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful");
        navigate("/sign-in");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logoimg =
    "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg";
  return (
    <>
      <div className="header-nav  bg-gradient-to-b from-black w-full z-10">
        <div className="header-logo flex justify-between items-center px-48 py-3.5">
          <Link to={"/browse"}>
            <img className="w-32 h-20 " src={logoimg} alt="header-logo" />
          </Link>

          <div className="lt-wrapper flex justify-between items-center w-56">
            <div
              className="select-ln-container flex items-center justify-center border rounded-md  py-0.5 pl-2.5 pr-2"
              style={{ border: "1px solid rgba(255, 255, 255, 0.3)" }}
            >
              <div className="lang-logo max-w-4 max-h-4 ">
                <img src={img} alt="ln-logo" />
              </div>
              <select
                name="selectln"
                id="select-ln"
                className=" text-white px-1.5 py-0.5"
                style={{ background: "transparent" }}
              >
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
              </select>
            </div>
            <div className="signout-link" onClick={handleSignout}>
              <Link to={"/sign-in"}>
                <span className="text-white px-5 py-1.5 rounded-md bg-customRed hover:bg-red-900">
                  Sign out
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default LoginHeader;
