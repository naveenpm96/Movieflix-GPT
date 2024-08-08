import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import sliderReducer from "./trendingList";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    sliderList: sliderReducer,
  },
});

export default appStore;
