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
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }),
    ...middleWares,
  ],
});

// sagaMiddleWare.run(rootSaga);

// import {
//   compose,
//   legacy_createStore as createStore,
//   applyMiddleware,
// } from "redux";

// // import logger from "redux-logger";

// import { rootReducer } from "./root-reducer";

// import { persistStore, persistReducer } from "redux-persist";

// // Asynchronous state management
// // import { thunk } from "redux-thunk";

// import createSagaMiddleware from "redux-saga";
// import { rootSaga } from "./root-saga";

// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["cart"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composeEnhancer =
//   (process.env.NODE_ENV === "development" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );

// export const persistor = persistStore(store);
