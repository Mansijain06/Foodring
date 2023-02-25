import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import "../style.css";
import ErrorComponent from "./component/ErrorComponent";
import Body from "./component/Body";
import RestaurantMenu from "./component/RestaurantMenu";
import Cart from "./component/Cart";
import Offer from "./component/Offer";
import About from "./component/About";
import { Provider } from "react-redux";
import store from "./utils/store";
import Author from "./component/Author";

const Applayout = () => {
  return (
    <div className="app-container">
      <Outlet />
    </div>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
  {
    path: "/restaurants/:id",
    element: <RestaurantMenu />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/offer",
    element: <Offer />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/author",
    element: <Author />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
