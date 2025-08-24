import { createSlice } from "@reduxjs/toolkit";
import {
  checkUserSession,
  emailSignIn,
  googleSignIn,
  signOut,
  signUp,
} from "./user.thunk";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Google sign in
    builder.addCase(googleSignIn.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(googleSignIn.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    });
    builder.addCase(googleSignIn.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });

    // Email sign in
    builder.addCase(emailSignIn.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(emailSignIn.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    });
    builder.addCase(emailSignIn.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });

    // Sign up
    builder.addCase(signUp.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });

    // Check session
    builder.addCase(checkUserSession.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    });

    // Sign out
    builder.addCase(signOut.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signOut.fulfilled, (state) => {
      state.currentUser = null;
      state.isLoading = false;
    });
    builder.addCase(signOut.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export const { setCurrentUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
