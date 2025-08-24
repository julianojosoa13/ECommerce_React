import { configureStore } from "@reduxjs/toolkit";

import { persistedReducer } from "./root-reducer";

// import { loggerMiddeware } from "./middleware/logger";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

// const sagaMiddleWare = createSagaMiddleware();
const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(middleWares),
});

export const persistor = persistStore(store);
