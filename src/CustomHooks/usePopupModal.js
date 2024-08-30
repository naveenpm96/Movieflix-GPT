import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addModalData } from "../utils/ReduxStore/popupModal";
/* eslint-disable react-hooks/exhaustive-deps */
const usePopupModal = (id) => {
  const dispatch = useDispatch();
  const fetchTailerVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      API_OPTIONS
    );
    const dataResp = await data.json();
    const filteredTrailer = dataResp.results?.filter(
      (trailer) => trailer.type === "Trailer"
    );

    dispatch(addModalData(filteredTrailer));
  };

  useEffect(() => {
    fetchTailerVideo();
  }, []);
};

export default usePopupModal;
