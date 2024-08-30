import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/ReduxStore/userSlice";
import {
  emailvalidator,
  passwordvalidator,
  FullnameValidator,
  serverValidatorMessage,
} from "../utils/SignInUpFormvalidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Example from "./TestComponents";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signInNow, setSignInNow] = useState(true);
  const [emailvalidationErrorMessage, setEmailValidationErrorMessage] =
    useState("");
  const [passwordvalidationErrorMessage, setPasswordValidationErrorMessage] =
    useState("");
  const [fullNamevalidationErrorMessage, setFullNameValidationErrorMessage] =
    useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const [servervalidationErrorMessage, setServerValidationErrorMessage] =
    useState("");

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
    setServerValidationErrorMessage("");
  };

  const tooglePassword = () => {
    setPasswordShow(!passwordShow);
  };

  const handleRegisterForm = () => {
    console.log("handleRegisterForm");

    const emailvalidatorResponse = emailvalidator(email.current.value);
    const passwordvalidatorResponse = passwordvalidator(password.current.value);
    let fullNamevalidatorResponse;

    if (fullName.current !== null) {
      fullNamevalidatorResponse = FullnameValidator(fullName.current.value);
    }
    setEmailValidationErrorMessage(emailvalidatorResponse);
    setPasswordValidationErrorMessage(passwordvalidatorResponse);
    setFullNameValidationErrorMessage(fullNamevalidatorResponse);

    // SignIn/SignUp Logic
    if (
      emailvalidationErrorMessage === null &&
      fullNamevalidationErrorMessage === null &&
      passwordvalidationErrorMessage === null
    ) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({ displayname: displayName, photoURL: photoURL })
              );
              // navigate("/browse");
              setSignInNow(!signInNow);
            })
            .catch((error) => {
              setServerValidationErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          const serverMessage = serverValidatorMessage(errorMessage);
          setServerValidationErrorMessage(serverMessage);
        });
    }
  };

  const handleSubmitForm = () => {
    console.log("handleSubmitForm");

    const emailvalidatorResponse = emailvalidator(email.current.value);
    const passwordvalidatorResponse = passwordvalidator(password.current.value);
    // let fullNamevalidatorResponse;

    // if (fullName.current !== null) {
    //   fullNamevalidatorResponse = FullnameValidator(fullName.current.value);
    // }
    setEmailValidationErrorMessage(emailvalidatorResponse);
    setPasswordValidationErrorMessage(passwordvalidatorResponse);
    //setFullNameValidationErrorMessage(fullNamevalidatorResponse);

    // SignIn/SignUp Logic
    if (
      emailvalidationErrorMessage === null &&
      passwordvalidationErrorMessage === null &&
      signInNow
    ) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          console.log(user, "signed in successfully");
          toast.success("Successfully signed in!", {
            position: "top-center",
          });
        })
        .catch((error) => {
          const errorMessage = error.message;
          const serverMessage = serverValidatorMessage(errorMessage);
          setServerValidationErrorMessage(serverMessage);
          toast.error(serverMessage || "An error occurred!", {
            position: "top-center",
          });
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
        <div className="signin-form-wrapper z-10 bg-opacity-50 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="signin-from py-10 px-10 bg-[#000000db]"
          >
            <h1 className="signin-form-tittle text-white leading-normal text-4xl font-bold text-left pb-5 pr-5">
              {!signInNow ? "Sign Up" : "Sign In"}
            </h1>
            {servervalidationErrorMessage && (
              <div className="servervalidationErrorMessage">
                <p className="text-red-700 text-left font-semibold ">
                  {servervalidationErrorMessage}
                </p>
              </div>
            )}
            <div className="signin-form-field gap-5">
              {!signInNow && (
                <div className="signin-fullname-cont  py-4">
                  <input
                    ref={fullName}
                    className="w-96 py-3 px-5 rounded bg-transparent border text-white"
                    type="text"
                    placeholder="Full Name"
                    maxLength={20}
                    name="fullName"
                  />
                  <p className="emailError text-red-700 text-left  font-semibold ">
                    {fullNamevalidationErrorMessage}
                  </p>
                </div>
              )}
              <div className="signin-email-cont py-4">
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
                {signInNow === true ? (
                  <>
                    <button
                      onClick={handleSubmitForm}
                      className="text-white box-border px-6 py-3 bg-customRed rounded hover:bg-red-800 w-full"
                      type="submit"
                    >
                      Get started
                    </button>
                    <ToastContainer />
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleRegisterForm}
                      className="text-white box-border px-6 py-3 bg-customRed rounded hover:bg-red-800 w-full"
                      type="submit"
                    >
                      Get started Regsiter
                    </button>
                    <ToastContainer />
                  </>
                )}
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
                  {signInNow ? "New to Movieflix?" : "Already a member?"}
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
            <Example />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
