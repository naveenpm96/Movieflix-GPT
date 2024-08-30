import React from "react";
import { SLIDER_IMG_URL } from "../../../utils/Constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addModalStatus,
  addModalData,
  addModalContentData,
} from "../../../utils/ReduxStore/popupModal";
import { API_OPTIONS } from "../../../utils/Constants";

const MoviesCard = ({ data, title }) => {
  const dispatch = useDispatch();
  // const modalStatus = useSelector((store) => console.log(store));
  // console.log(modalStatus);
  const fetchModalTailerVideo = async (id) => {
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

  const fetchModalTailerDetails = async (id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      API_OPTIONS
    );
    const dataResp = await data.json();

    console.log(dataResp, "filteredTrailerDetails");

    dispatch(addModalContentData(dataResp));
  };

  const handleModalState = (id) => {
    fetchModalTailerVideo(id);
    fetchModalTailerDetails(id);
    dispatch(addModalStatus(true));
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
  };

  // const handlePopupClick = async (ele) => {
  //   const fetchClickedData = await fetch(
  //     `https://api.themoviedb.org/3/movie/${ele.id}/videos`,
  //     API_OPTIONS
  //   );
  //   const dataResp = await fetchClickedData.json();

  //   let dataRespResult = [];
  //   dataResp.results.forEach((element, i) => {
  //     if (element.type === "Trailer") {
  //       dataRespResult.push(element.key);
  //     }
  //   });

  //   const randomTrailer =
  //     dataRespResult.length > 0 &&
  //     dataRespResult[Math.floor(Math.random() * dataRespResult.length)];
  //   console.log(randomTrailer, "randomTrailer");
  // };

  return (
    <div className="slider-dta w-full ">
      <Slider {...settings}>
        {data &&
          data.map((ele, i) => {
            return (
              <Link to={""} key={i}>
                <img
                  className="rounded"
                  src={SLIDER_IMG_URL + ele.poster_path}
                  alt="slider"
                  onClick={() => handleModalState(ele.id)}
                />
              </Link>
            );
          })}
      </Slider>
    </div>
  );
};

export default MoviesCard;
