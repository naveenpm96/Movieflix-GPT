import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addTrendingList } from "../utils/ReduxStore/trendingList";
import { useEffect } from "react";

const useSliderList = () => {
  const dispatch = useDispatch();
  const SliderMoviesList = async () => {
    const fetchSliderList = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week",
      API_OPTIONS
    );
    const data = await fetchSliderList.json();
    dispatch(addTrendingList(data.results));
  };

  useEffect(() => {
    SliderMoviesList();
  }, []);
};
export default useSliderList;
