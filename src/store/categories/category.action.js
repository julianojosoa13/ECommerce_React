import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPE } from "./category.types";

export const fetchCatergoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATERGORIES_START);

export const fetchCatergoriesSuccess = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATERGORIES_SUCCESS, categoriesMap);

export const FETCH_CATERGORIES_FAILED = (error) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATERGORIES_FAILED, error);
