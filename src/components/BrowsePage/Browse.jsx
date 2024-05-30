import React from "react";
import LoginHeader from "../LoginHeader";
import useNowPlayingMovies from "../../CustomHooks/useNowPlayingMovies";
import BrowsePagePrimary from "./BrowsePagePrimary";
import BrowsePageSecondary from "./BrowsePageSecondary";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <>
      <LoginHeader />
      <BrowsePagePrimary />
      <BrowsePageSecondary />
    </>
  );
};

export default Browse;
