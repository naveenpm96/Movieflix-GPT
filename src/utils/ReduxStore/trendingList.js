import { createSlice } from "@reduxjs/toolkit";

const TrendingList = createSlice({
  name: "trendingList",
  initialState: {
    trendingList: null,
    popularList: null,
    topRatedList: null,
  },
  reducers: {
    addTrendingList: (state, action) => {
      state.trendingList = action.payload;
    },
    addPopularList: (state, action) => {
      state.popularList = action.payload;
    },
    addTopRatedList: (state, action) => {
      state.topRatedList = action.payload;
    },
  },
});

export const { addTrendingList, addPopularList, addTopRatedList } =
  TrendingList.actions;
export default TrendingList.reducer;
