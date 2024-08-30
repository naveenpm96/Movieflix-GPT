import { useEffect, useState } from "react";
import { API_OPTIONS } from "../../utils/Constants";
import LoginHeader from "../LoginHeader";
import { SLIDER_IMG_URL } from "../../utils/Constants";
import Modal from "../Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  addModalStatus,
  addModalData,
  addModalContentData,
} from "../../utils/ReduxStore/popupModal";

const DebounceSearch = () => {
  const dispatch = useDispatch();
  const [searchVal, setSearchVal] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  // const [hoveredItems, setHoveredItems] = useState(null);
  const [searchedTrailer, setSearchedTrailer] = useState(false);

  //debouncing search
  const fetchCollections = async (type, search) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/${type}?query=${search}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const dataResp = await data.json();
    console.log(dataResp.results, "fetchCollections");
    setSuggestions(dataResp.results);
  };
  useEffect(() => {
    const dealy = setTimeout(() => {
      if (searchVal) {
        fetchCollections("movie", searchVal);
      }
    }, 300);

    return () => {
      clearTimeout(dealy);
    };
  }, [searchVal]);

  //onclick event to open minimodal
  const mouseClickHandler = (val) => {
    // setHoveredItems(val);
    dispatch(addModalStatus(true));
    fetchCollectionsTrailer(val.id);
  };

  //fetch trailer
  const fetchCollectionsTrailer = async (id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      API_OPTIONS
    );
    const dataResp = await data.json();
    console.log(dataResp, "fetchCollectionsTrailer");
    const filteredTrailer = dataResp.results?.filter(
      (trailer) => trailer.type === "Trailer"
    );
    // setSearchedTrailer(false);
    dispatch(addModalData(filteredTrailer));
  };

  const modalstatus = useSelector((store) => store.popupModal.modalStatus);
  console.log(modalstatus, "modalstatus");

  return (
    <div
      className={`bg-[#141414] ${
        suggestions.length < 10 ? "h-screen" : "h-full"
      }`}
    >
      <LoginHeader />
      <hr />
      <div className="search-outer flex justify-center items-center mt-20 mb-16 gap-2">
        <div className="searchbar-wrapper flex flex-col ">
          <div className="search-cont">
            <input
              className="searchInp border w-[545px] py-2 px-5 rounded bg-transparent  text-white"
              type="text"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              onBlur={() => setShowSuggestions(false)}
              onFocus={() => setShowSuggestions(true)}
            />
          </div>
        </div>
        <button
          className="search-cont-bnt text-white inline-block px-5 py-2  rounded-md bg-customRed hover:bg-red-900"
          type="input"
        >
          Search
        </button>
      </div>
      <div className="relative suggestion-box flex justify-start flex-wrap box-border items-center gap-6 p-6 text-white ">
        {suggestions.map((val) => {
          return (
            val?.poster_path && (
              <>
                <div
                  className="search-res group relative"
                  key={val.id}
                  onClick={() => mouseClickHandler(val)}
                  // onMouseLeave={() => setHoveredItems(null)}
                >
                  <img
                    className="w-56 h-72 rounded transform group-hover:none mb-4 cursor-pointer "
                    src={SLIDER_IMG_URL + val.poster_path}
                    alt="search-results-img"
                  />
                </div>
              </>
            )
          );
        })}
      </div>
      {modalstatus && (
        <div className="search-modal top-1/3 left-1/3 bg-gray-400 w-96 h-96  fixed">
          <Modal />
        </div>
      )}
    </div>
  );
};

export default DebounceSearch;
