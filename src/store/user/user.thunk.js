import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
} from "../../utils/firebase/firebase.utils";

// Google sign-in
export const googleSignIn = createAsyncThunk(
  "user/googleSignIn",
  async (_, { rejectWithValue }) => {
    try {
      const { user } = await signInWithGooglePopup();
      const userSnapshot = await createUserDocumentFromAuth(user);
      return { id: userSnapshot.id, ...userSnapshot.data() };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Email sign-in
export const emailSignIn = createAsyncThunk(
  "user/emailSignIn",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      const userSnapshot = await createUserDocumentFromAuth(user);
      return { id: userSnapshot.id, ...userSnapshot.data() };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Sign up
export const signUp = createAsyncThunk(
  "user/signUp",
  async ({ email, password, displayName }, { rejectWithValue }) => {
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const userSnapshot = await createUserDocumentFromAuth(user, {
        displayName,
      });
      return { id: userSnapshot.id, ...userSnapshot.data() };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Check session
export const checkUserSession = createAsyncThunk(
  "user/checkSession",
  async (_, { rejectWithValue }) => {
    try {
      const userAuth = await getCurrentUser();
      if (!userAuth) return null;
      const userSnapshot = await createUserDocumentFromAuth(userAuth);
      return { id: userSnapshot.id, ...userSnapshot.data() };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Sign out
export const signOut = createAsyncThunk(
  "user/signOut",
  async (_, { rejectWithValue }) => {
    try {
      await signOutUser();
      return null;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
