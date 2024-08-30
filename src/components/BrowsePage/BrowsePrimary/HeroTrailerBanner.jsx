import { useState } from "react";
import { useSelector } from "react-redux";
import useHeroTrailer from "../../../CustomHooks/useHeroTrailer";
import { PiSpeakerSimpleXLight } from "react-icons/pi";
import { RxSpeakerLoud } from "react-icons/rx";

const HeroTrailerBanner = ({ id }) => {
  const [speakerOn, setSpeakerOn] = useState(true);
  useHeroTrailer(id);
  const trailerVideo = useSelector((store) => store.movies?.moviesTrailer);

  const randomTrailer =
    trailerVideo && trailerVideo.length > 0
      ? trailerVideo[Math.floor(Math.random() * trailerVideo.length)]
      : null;

  const handleSpeaker = () => {
    setSpeakerOn(() => !speakerOn);
  };

  return (
    // bg-gradient-to-l from-black
    <div className="w-full  absolute top-0   -z-10">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${
          randomTrailer?.key
        }?rel=0&controls=0&autoplay=1&mute=${speakerOn ? 0 : 1}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <button
        onClick={handleSpeaker}
        className="speaker-btn z-10 top-2/3  right-10 absolute"
      >
        <div className="speaker-icon border rounded-3xl border-white  p-2">
          {speakerOn ? (
            <RxSpeakerLoud size={20} color="white" />
          ) : (
            <PiSpeakerSimpleXLight size={20} color="white" />
          )}
        </div>
      </button>
    </div>
  );
};

export default HeroTrailerBanner;
