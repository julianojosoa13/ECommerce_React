import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";

// import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

import { persistStore, persistReducer } from "redux-persist";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { loggerMiddeware } from "./middleware/logger";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user", "categories"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV === "development" && loggerMiddeware,
  thunk,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV === "development" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
