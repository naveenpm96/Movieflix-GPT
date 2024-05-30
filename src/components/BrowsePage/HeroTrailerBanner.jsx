import { useSelector } from "react-redux";
import useHeroTrailer from "../../CustomHooks/useHeroTrailer";

const HeroTrailerBanner = ({ id }) => {
  useHeroTrailer(id);
  const trailerVideo = useSelector((store) => store.movies?.moviesTrailer);

  const randomTrailer =
    trailerVideo && trailerVideo.length > 0
      ? trailerVideo[Math.floor(Math.random() * trailerVideo.length)]
      : null;

  console.log(randomTrailer);
  return (
    // bg-gradient-to-l from-black
    <div className="w-screen  absolute top-0   -z-10">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${randomTrailer?.key}?rel=0&controls=0&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default HeroTrailerBanner;
