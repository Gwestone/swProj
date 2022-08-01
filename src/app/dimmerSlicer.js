import { createSlice } from "@reduxjs/toolkit";

const dimmerSlicer = createSlice({
  name: "dimmer",
  initialState: {
    dimmer: false,
  },
  reducers: {
    dimmerOn(state) {
      state.dimmer = true;
    },
    dimmerOff(state) {
      state.dimmer = false;
    },
  },
});

export const { dimmerOn, dimmerOff } = dimmerSlicer.actions;

export default dimmerSlicer.reducer;
