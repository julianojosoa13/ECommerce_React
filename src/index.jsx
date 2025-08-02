import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication.component";
import CheckoutPage from "./routes/checkout/checkout.component";
import { store, persistor } from "./store/store";
import App from "./App";
import "./index.scss";
import Category from "./routes/category/category.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "shop",
        element: <Shop />,
        children: [
          // Add nested shop routes if needed
          { path: ":category", element: <Category /> },
        ],
      },
      { path: "auth", element: <Authentication /> },
      { path: "checkout", element: <CheckoutPage /> },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
