import React from "react";
import HeroTrailerBanner from "./HeroTrailerBanner";
import HeroTrailerTittle from "./HeroTrailerTittle";
import { useSelector } from "react-redux";

const BrowsePagePrimary = () => {
  const moviesData = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!moviesData) return;
  const filteredMainMovie =
    moviesData && moviesData.length > 0
      ? moviesData[Math.floor(Math.random() * moviesData.length)]
      : null;

  const mainMovie = filteredMainMovie;
  const { title, overview, id } = mainMovie;

  return (
    <>
      <HeroTrailerTittle title={title} overview={overview} />
      <HeroTrailerBanner id={id} />
    </>
  );
};

export default BrowsePagePrimary;
