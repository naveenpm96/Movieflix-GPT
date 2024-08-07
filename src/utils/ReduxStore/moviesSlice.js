import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    moviesTrailer: null,
    gptSearch: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMoviesTrailer: (state, action) => {
      state.moviesTrailer = action.payload;
    },
    addGptSearchResults: (state, action) => {
      state.gptSearch = action.payload;
    },
    removeGptSearchResults: (state) => {
      return (state.gptSearch = null);
    },
  },
});

export const {
  addNowPlayingMovies,
  addMoviesTrailer,
  addGptSearchResults,
  removeGptSearchResults,
} = MoviesSlice.actions;
export default MoviesSlice.reducer;
