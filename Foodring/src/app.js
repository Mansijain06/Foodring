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
    path: '/offer',
    element: <Offer />
  },
  {
    path: "/about",
    element: <About />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
