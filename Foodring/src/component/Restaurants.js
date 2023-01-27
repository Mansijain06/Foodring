import { useEffect, useState } from "react";

import { RESTAURANTS_URL } from "../config";
import RestaurantItem from "./RestaurantItem";
import "../../style.css";
import { Link } from "react-router-dom";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [sorts, setSorts] = useState([]);

  const getRestaurants = async () => {
    const data = await fetch(RESTAURANTS_URL);
    const resturantsData = await data.json();
    setSorts(resturantsData?.data?.sorts);
    setRestaurants(resturantsData?.data?.cards[2]?.data?.data.cards);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return restaurants.length > 0 ? (
    <div className="restaurants-container">
      <div className="restaurants">
        <h2>{restaurants.length} restaurants</h2>
        <div className="restaurants-sort">
          {sorts?.map((sort, index) => {
            return <p key={index}>{sort.title}</p>;
          })}
          <p>Filter</p>
        </div>
      </div>
      <div className="restaurant-container">
        {restaurants?.map((item) => {
          return (
            <Link to={"/restaurants/" + item.data.id} key={item.data.id}>
              <RestaurantItem {...item.data} />
            </Link>
          );
        })}
      </div>
    </div>
  ) : (
    <h1>Loading Restaurants...</h1>
  );
};

export default Restaurants;
