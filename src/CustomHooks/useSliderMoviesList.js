import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import {
  addTrendingList,
  addPopularList,
} from "../utils/ReduxStore/trendingList";
import { useEffect } from "react";

export const useSliderTrendingList = () => {
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

export const useSliderPopularList = () => {
  const dispatch = useDispatch();
  const SliderMoviesPopularList = async () => {
    const fetchSliderList = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );
    const data = await fetchSliderList.json();
    dispatch(addPopularList(data.results));
  };

  useEffect(() => {
    SliderMoviesPopularList();
  }, []);
};
