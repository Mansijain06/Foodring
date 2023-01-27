import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import "../style.css";

import NavBar from "./component/NavBar";
// import Footer from "./component/Footer";
import ErrorComponent from "./component/ErrorComponent";
import SearchRestaurantOrFood from "./component/SearchRestaurantOrFood";
import Body from "./component/Body";
import RestaurantMenu from "./component/RestaurantMenu";

const Applayout = () => {
  return (
    <div className="app-container">
      <NavBar />
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
      {
        path: "/search",
        element: <SearchRestaurantOrFood />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
