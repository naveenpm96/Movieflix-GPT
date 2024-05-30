import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/ReduxStore/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const fetchNowPlayingApi = () => {
    fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS)
      .then((response) => response.json())
      .then((response) => dispatch(addNowPlayingMovies(response.results)))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchNowPlayingApi();
  });
};
export default useNowPlayingMovies;
