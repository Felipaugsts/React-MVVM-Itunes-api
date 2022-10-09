import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const userSlice = createSlice({
  name: "Library",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { startLoading, stopLoading } = userSlice.actions;
export const loading = (state) => state.Library.loading;

export default userSlice.reducer;
