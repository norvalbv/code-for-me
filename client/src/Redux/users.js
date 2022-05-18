import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  initialState: { user: [] },
  reducers: {
    addUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { addUser } = user.actions;

export default user.reducer;
