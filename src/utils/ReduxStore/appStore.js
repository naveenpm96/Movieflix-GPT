import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import sliderReducer from "./trendingList";
import PopupModal from "./popupModal";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    sliderList: sliderReducer,
    popupModal: PopupModal,
  },
});

export default appStore;
