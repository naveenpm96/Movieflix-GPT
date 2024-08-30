import React from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa6";
import { CiCircleInfo } from "react-icons/ci";

const HeroTittle = ({ title, overview }) => {
  function truncateText(text, length) {
    if (text.length > length) {
      return text.slice(0, length) + "...";
    } else {
      return text;
    }
  }

  const overViewText = truncateText(overview, 200);

  return (
    <div className="info-wrapper flex absolute flex-col top-80 left-0 w-4/12 pl-12   ">
      <div className="hero-tittle-wrapper mb-5">
        <h1 className="hero-title text-5xl font-semibold text-white">
          {title}
        </h1>
      </div>
      <div className="hero-overview-wrapper text-white">
        <p className="text-sm font-medium	">{overViewText}</p>
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
            <CiCircleInfo className="more-info w-6 h-6" />
            <span>More Info</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeroTittle;
