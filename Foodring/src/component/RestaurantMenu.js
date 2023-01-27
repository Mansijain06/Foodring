import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_URL } from "../config";
import RestaurantMenuDetailsCard from "./RestaurantMenuDetailsCard";
import RestaurantMenuItem from "./RestaurantMenuItem";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);
  const [menuItems, setMenuItems] = useState(null);
  const [menuItemWidget, setMenuItemWidget] = useState(null);

  const getRestaurantData = async () => {
    const data = await fetch(RESTAURANT_MENU_URL + id);
    const jsonData = await data.json();
    // console.log(jsonData);
    setRestaurantData(jsonData.data);
    // console.log(Object.values(jsonData?.data?.menu?.items));
    setMenuItems(Object.values(jsonData?.data?.menu?.items));
    setMenuItemWidget(Object.values(jsonData?.data?.menu?.widgets));
    // console.log(Object.values(jsonData?.data?.menu?.widgets));
  };

  useEffect(() => {
    getRestaurantData();
  }, []);

  return restaurantData ? (
    <>
      <RestaurantMenuDetailsCard restaurantData={restaurantData} />
      <RestaurantMenuItem
        menuItems={menuItems}
        menuItemWidget={menuItemWidget}
      />
    </>
  ) : (
    <h1>Loading</h1>
  );
};

export default RestaurantMenu;
