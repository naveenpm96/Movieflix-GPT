import { createSlice } from "@reduxjs/toolkit";

const TrendingList = createSlice({
  name: "trendingList",
  initialState: {
    trendingList: null,
    popularList: null,
  },
  reducers: {
    addTrendingList: (state, action) => {
      state.trendingList = action.payload;
    },
    addPopularList: (state, action) => {
      state.popularList = action.payload;
    },
  },
});

export const { addTrendingList, addPopularList } = TrendingList.actions;
export default TrendingList.reducer;
