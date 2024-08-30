import React from "react";
import LoginHeader from "../LoginHeader";
import useNowPlayingMovies from "../../CustomHooks/useNowPlayingMovies";
import BrowsePagePrimary from "./BrowsePrimary/BrowsePagePrimary";
import BrowsePageSecondary from "./BrowseSecondary/BrowsePageSecondary";
import Modal from "../Modal";
import { useSelector } from "react-redux";

const Browse = () => {
  const modalstatus = useSelector((store) => store.popupModal.modalStatus);
  useNowPlayingMovies();

  return (
    <>
      <LoginHeader />
      <BrowsePagePrimary />
      <BrowsePageSecondary />
      {modalstatus && <Modal />}
    </>
  );
};

export default Browse;
