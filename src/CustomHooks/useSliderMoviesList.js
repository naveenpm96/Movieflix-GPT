import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import {
  addTrendingList,
  addPopularList,
  addTopRatedList,
} from "../utils/ReduxStore/trendingList";
import { useEffect } from "react";
/* eslint-disable react-hooks/exhaustive-deps */
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

export const useTopRatedList = () => {
  const dispatch = useDispatch();
  const topRatedPopularList = async () => {
    const fetchSliderList = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const data = await fetchSliderList.json();
    console.log(data);
    dispatch(addTopRatedList(data.results));
  };

  useEffect(() => {
    topRatedPopularList();
  }, []);
};
