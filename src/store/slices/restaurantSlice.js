import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSlNo: 1,
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    changeSlNo: (state, action) => {
      state.selectedSlNo = action.payload;
    },
  },
});

export const { changeSlNo } = restaurantSlice.actions;

export const selectSlNo = (state) => state.restaurantReducer.selectedSlNo;

export default restaurantSlice.reducer;
