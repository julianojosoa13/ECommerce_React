import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      return categoriesArray;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
