import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_URL, RESTAURANTS_IMG_URL } from "../config";
import RestaurantMenuDetailsCard from "./RestaurantMenuDetailsCard";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);
  const [menuItems, setMenuItems] = useState(null);
  const [menuItemWidget, setMenuItemWidget] = useState(null);

  const getRestaurantData = async () => {
    const data = await fetch(RESTAURANT_MENU_URL + id);
    const jsonData = await data.json();
    console.log(jsonData);
    setRestaurantData(jsonData.data);
    console.log(Object.values(jsonData?.data?.menu?.items));
    setMenuItems(Object.values(jsonData?.data?.menu?.items));
    setMenuItemWidget(Object.values(jsonData?.data?.menu?.widgets));
    console.log(Object.values(jsonData?.data?.menu?.widgets));
  };

  useEffect(() => {
    getRestaurantData();
  }, []);

  return restaurantData ? (
    <>
      <RestaurantMenuDetailsCard restaurantData={restaurantData} />
      <div className="restaurant-menu-container">
        <div className="restaurant-menu-widget">
          {menuItemWidget.map((widget, index) => {
            return <p key={widget.type + index}>{widget.name}</p>;
          })}
        </div>
        <div>
          {menuItems.map((menu) => {
            return (
              <div className="restaurant-menu-item">
                <div>
                  {menu?.isVeg ? "🥬" : "🥓"}
                  <h4>{menu?.name}</h4>
                  <p>₹{menu?.price / 100}</p>
                  <p>{menu?.description}</p>
                </div>
                <img src={RESTAURANTS_IMG_URL + menu?.cloudinaryImageId} />
              </div>
            );
          })}
        </div>
      </div>
      {/* <RestaurantMenuItems/> */}
    </>
  ) : (
    <h1>Loading</h1>
  );
};

export default RestaurantMenu;
