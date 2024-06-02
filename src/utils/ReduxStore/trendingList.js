import { createSlice } from "@reduxjs/toolkit";

const TrendingList = createSlice({
  name: "trendingList",
  initialState: {
    trendingList: null,
  },
  reducers: {
    addTrendingList: (state, action) => {
      state.trendingList = action.payload;
    },
  },
});

export const { addTrendingList } = TrendingList.actions;
export default TrendingList.reducer;
