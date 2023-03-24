import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { RESTAURANT_MENU_URL } from "../config";

import RestaurantMenuDetailsCard from "./RestaurantMenuDetailsCard";
import RestaurantMenuItem from "./RestaurantMenuItem";
import NavBar from "./NavBar";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);
  const [menuItems, setMenuItems] = useState(null);
  const [menuItemWidget, setMenuItemWidget] = useState(null);

  const getRestaurantData = async () => {
    const data = await fetch(RESTAURANT_MENU_URL + id);
    const jsonData = await data.json();
    console.log(jsonData);
    setRestaurantData(jsonData?.data?.cards[0]?.card?.card?.info);
    // setRestaurantData(jsonData.data);
    // console.log(Object.values(jsonData?.data?.menu?.items));
    setMenuItems(Object.values(jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards));
    // setMenuItemWidget(Object.values(jsonData?.data?.menu?.widgets));
    // console.log(Object.values(jsonData?.data?.menu?.widgets));
  };
  console.log(menuItems);

  useEffect(() => {
    getRestaurantData();
  }, []);

  return restaurantData ? (
    <>
      <div className="resturant-menu-navbar">
        <NavBar />
      </div>
      <RestaurantMenuDetailsCard restaurantData={restaurantData} />
      <RestaurantMenuItem
        menuItems={menuItems}
      // menuItemWidget={menuItemWidget}
      />
    </>
  ) : (
    <Shimmer />
  );
};

export default RestaurantMenu;
