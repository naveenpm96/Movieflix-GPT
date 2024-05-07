import React from "react";

const Banner = () => {
  return (
    <>
      <div
        className="login-banner bg-center relative h-screen w-screen "
        style={{
          backgroundImage:
            'url("https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"),linear-gradient(to right, rgba(255,255,255,0.5), rgba(0,0,0,0.5))',
        }}
      >
        <div className="bg-gradient-to-t from-black via-transparent to-black w-full absolute bottom-0 top-0"></div>
        <div className="banner-tittle relative top-1/3  text-center">
          <h1 className="banner-text-tittle text-white absolute text-5xl font-bold text-center  w-full">
            Unlimited movies, TV shows and more
          </h1>
          <h3 className="membership-text text-white text-2xl  pt-20">
            Watch anywhere. Cancel anytime.
          </h3>
        </div>
        <div className="membership-form relative w-full top-1/3 text-center pt-5">
          <form>
            <h3 className="email-form-tittle text-white leading-normal text-xl font-normal ">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="email-form-field flex justify-center items-center pt-4 gap-5 ">
              <input
                className="w-96 py-3 px-5 rounded bg-transparent border text-white"
                type="text"
                placeholder="Email address"
                maxLength={50}
                name="signupEmail"
              />
              <button
                className="text-white box-border px-6 py-3 bg-customRed rounded hover:bg-red-800"
                type="submit"
              >
                Get started
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Banner;
