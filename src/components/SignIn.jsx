import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { emailvalidator } from "../utils/SignInUpFormvalidation";
import { passwordvalidator } from "../utils/SignInUpFormvalidation";
import { FullnameValidator } from "../utils/SignInUpFormvalidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const SignIn = () => {
  const [signInNow, setSignInNow] = useState(true);
  console.log(signInNow, "signInNow");
  const [emailvalidationErrorMessage, setEmailValidationErrorMessage] =
    useState("");
  const [passwordvalidationErrorMessage, setPasswordValidationErrorMessage] =
    useState("");
  const [fullNamevalidationErrorMessage, setFullNameValidationErrorMessage] =
    useState("");
  const [passwordShow, setPasswordShow] = useState(false);

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleSignInNow = () => {
    setSignInNow(!signInNow);
    password.current.value = "";
    email.current.value = "";

    setEmailValidationErrorMessage("");
    setPasswordValidationErrorMessage("");
    setFullNameValidationErrorMessage("");
  };

  const tooglePassword = () => {
    setPasswordShow(!passwordShow);
  };

  const handleSubmitForm = () => {
    const emailvalidatorResponse = emailvalidator(email.current.value);
    const passwordvalidatorResponse = passwordvalidator(password.current.value);
    let fullNamevalidatorResponse;

    if (fullName.current !== null) {
      fullNamevalidatorResponse = FullnameValidator(fullName.current.value);
    }
    setEmailValidationErrorMessage(emailvalidatorResponse);
    setPasswordValidationErrorMessage(passwordvalidatorResponse);
    setFullNameValidationErrorMessage(fullNamevalidatorResponse);

    // if (
    //   (setEmailValidationErrorMessage,
    //   setPasswordValidationErrorMessage,
    //   setFullNameValidationErrorMessage)
    // )
    //   return;
    // // SignIn/SignUp Logic

    if (!signInNow) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user, "signed in successfully");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage, "failed");
          alert(errorMessage + ", " + errorCode + " ", "failed");
        });
    }
  };
  return (
    <>
      <Header />
      <div
        className="signin-form relative w-full text-center h-screen"
        style={{
          backgroundImage:
            'url("https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"),linear-gradient(to right, rgba(255,255,255,0.5), rgba(0,0,0,0.5))',
        }}
      >
        <div className="signin-form-wrapper bg-opacity-50 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="signin-from py-10 px-10 bg-[#000000db]"
          >
            <h1 className="signin-form-tittle text-white leading-normal text-4xl font-bold text-left pb-5 pr-5">
              {!signInNow ? "Sign Up" : "Sign In"}
            </h1>
            <div className="signin-form-field gap-5">
              {!signInNow && (
                <div className="signin-fullname-cont  py-4">
                  <input
                    ref={fullName}
                    className="w-96 py-3 px-5 rounded bg-transparent border text-white"
                    type="Full Name"
                    placeholder="Full Name"
                    maxLength={20}
                    name="fullName"
                  />
                  <p className="emailError text-red-700 text-left  font-semibold ">
                    {fullNamevalidationErrorMessage}
                  </p>
                </div>
              )}
              <div className="signin-email-cont  py-4">
                <input
                  ref={email}
                  required=""
                  className="w-96 py-3 px-5 rounded bg-transparent border text-white"
                  type="email"
                  placeholder="Email address"
                  maxLength={50}
                  name="email"
                />
                <p className="emailError text-red-700 text-left  font-semibold ">
                  {emailvalidationErrorMessage}
                </p>
              </div>
              <div className="signin-password  py-4">
                <div className=" relative justify-center">
                  <input
                    ref={password}
                    className="w-96 py-3 px-5 rounded bg-transparent border text-white"
                    type={passwordShow ? "text" : "password"}
                    placeholder="password"
                    maxLength={50}
                    name="password"
                  />
                  <span
                    className="absolute text-white top-3 right-7 text-2xl cursor-pointer"
                    onClick={tooglePassword}
                  >
                    {passwordShow ? <IoMdEye /> : <IoMdEyeOff />}
                  </span>
                </div>
                <p className="emailError text-red-700 text-left  font-semibold ">
                  {passwordvalidationErrorMessage}
                </p>
              </div>
              <div className="signin-btn w-full py-4">
                <button
                  onClick={handleSubmitForm}
                  className="text-white box-border px-6 py-3 bg-customRed rounded hover:bg-red-800 w-full"
                  type="submit"
                >
                  Get started
                </button>
              </div>
              <div className="password-reset-link">
                <Link className="text-white" to={"/"}>
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div className="remember-me text-left mt-5 flex items-center">
              <input
                className="h-4 w-4"
                type="checkbox"
                name="rememberme"
                id="rememberme"
              />
              <label
                className="remember-me-label text-white text-base pl-5"
                htmlFor="rememberme"
              >
                Remember me
              </label>
            </div>
            <div className="login-signup-now my-5  text-left">
              {
                <p className="text-[#ffff]/[0.7]">
                  {signInNow ? "New to Netflix?" : "Already a member?"}
                  <span>
                    <Link
                      onClick={handleSignInNow}
                      className="text-white font-medium"
                      to={""}
                    >
                      {!signInNow ? " Sign in." : " Sign up now."}
                    </Link>
                  </span>
                </p>
              }
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
