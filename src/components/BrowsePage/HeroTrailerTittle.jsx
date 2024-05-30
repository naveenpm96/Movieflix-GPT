import React from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa6";
import { CiCircleInfo } from "react-icons/ci";

const HeroTittle = ({ title, overview }) => {
  return (
    <div className="info-wrapper flex absolute flex-col top-80 left-0 w-4/12 pl-12   ">
      <div className="hero-tittle-wrapper mb-5">
        <h1 className="hero-title text-5xl font-semibold text-white">
          {title}
        </h1>
      </div>
      <div className="hero-overview-wrapper text-white">
        <p className="text-sm font-medium	">{overview}</p>
      </div>
      <div className="info-button-links flex gap-3 text-white py-5 ">
        <Link to={"/"}>
          <div className="play-btn px-9 py-2 text-black font-bold rounded bg-white flex justify-center items-center gap-2">
            <FaPlay />
            <span>Play</span>
          </div>
        </Link>
        <Link>
          <div className="info-btn play-btn px-7 py-2 text-white flex justify-center items-center gap-2 font-bold rounded bg-gray-500">
            <CiCircleInfo className="w- " />
            <span to={"/"}>More Info</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeroTittle;
