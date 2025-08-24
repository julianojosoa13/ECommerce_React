import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./root-reducer";

// import { loggerMiddeware } from "./middleware/logger";
import logger from "redux-logger";

// const sagaMiddleWare = createSagaMiddleware();
const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(middleWares),
});
