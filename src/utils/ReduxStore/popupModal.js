import { createSlice } from "@reduxjs/toolkit";

const PopupModal = createSlice({
  name: "popupModal",
  initialState: {
    modalData: null,
    modalStatus: false,
    modalContentData: null,
  },
  reducers: {
    addModalData: (state, action) => {
      state.modalData = action.payload;
    },
    // removeModalData: (state, action) => {
    //   state.modalData = null;
    // },
    addModalStatus: (state, action) => {
      state.modalStatus = action.payload;
    },
    addModalContentData: (state, action) => {
      state.modalContentData = action.payload;
    },
  },
});

export const { addModalData, addModalStatus, addModalContentData } =
  PopupModal.actions;
export default PopupModal.reducer;
