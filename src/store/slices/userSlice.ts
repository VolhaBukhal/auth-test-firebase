import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInitialState } from "interfaces";

const initialState: IUserInitialState = {
  email: "",
  token: "",
  id: "",
};
const userSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<IUserInitialState>) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeCredentials: (state) => {
      state.email = "";
      state.token = "";
      state.id = "";
    },
  },
});

export const { setCredentials, removeCredentials } = userSlice.actions;
export default userSlice.reducer;
