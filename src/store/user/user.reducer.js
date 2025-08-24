import { createSlice } from "@reduxjs/toolkit";
import { USER_ACTION_TYPES } from "./user.types";

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
    emailSignInStart: (state, action) => {
      state.isLoading = true;
    },
    googleSignInStart: (state, action) => {
      state.isLoading = true;
    },
    signOutStart: (state, action) => {
      state.isLoading = true;
    },
    signInSuccess: (state, action) => {
      (state.currentUser = action.payload), (state.isLoading = false);
    },
    signOutSuccess: (state, action) => {
      (state.currentUser = null), (state.isLoading = false);
    },
    signInFailed: (state, action) => {
      (state.error = action.payload), (state.isLoading = false);
    },
    signOutFailed: (state, action) => {
      (state.error = action.payload), (state.isLoading = false);
    },
    signUpFailed: (state, action) => {
      (state.error = action.payload), (state.isLoading = false);
    },
  },
});

export const {
  setCurrentUser,
  emailSignInStart,
  googleSignInStart,
  signInSuccess,
  signOutSuccess,
  signInFailed,
  signUpFailed,
  signOutFailed,
} = userSlice.actions;

export const userReducer = userSlice.reducer;

// export const userReducerOld = (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.EMAIL_SIGN_IN_START:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case USER_ACTION_TYPES.SIGN_OUT_START:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
//       return {
//         ...state,
//         currentUser: payload,
//         isLoading: false,
//       };
//     case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
//       return {
//         ...state,
//         currentUser: null,
//         isLoading: false,
//       };
//     case USER_ACTION_TYPES.SIGN_IN_FAILED:
//       return {
//         ...state,
//         error: payload,
//         isLoading: false,
//       };
//     case USER_ACTION_TYPES.SIGN_UP_FAILED:
//       return {
//         ...state,
//         error: payload,
//         isLoading: false,
//       };
//     case USER_ACTION_TYPES.SIGN_OUT_FAILED:
//       return {
//         ...state,
//         error: payload,
//         isLoading: false,
//       };
//     default:
//       return state;
//   }
// };
