import React from "react";
import { TypeAnimation } from "react-type-animation";

const GptTypeAnimation = () => {
  return (
    <>
      <div className="gpt-greet text-center pb-16">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Welcome to Movieflix, where our AI-powered search engine helps you find your favorite MOVIE",
            1000, // wait 1s before replacing "MOVIE" with "DRAMA"
            "Welcome to Movieflix, where our AI-powered search engine helps you find your favorite DRAMA",
            1000,
            "Welcome to Movieflix, where our AI-powered search engine helps you find your favorite TV SHOWS",
            1000,
          ]}
          wrapper="h4"
          speed={10}
          style={{
            fontSize: "2em",
            display: "inline-block",
            color: "white",
          }}
          repeat={Infinity}
        />
      </div>
    </>
  );
};

export default GptTypeAnimation;
