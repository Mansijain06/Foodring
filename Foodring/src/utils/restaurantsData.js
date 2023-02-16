import { useState, useEffect } from "react";
import { RESTAURANTS_URL } from "../config";

const restaurantsData = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [sorts, setSorts] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState([]);

  const getFilterRestaurants = (searchText) => {
    const data = allRestaurant?.filter((res) =>
      res.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(data);
    setRestaurants(data);
  };

  const getRestaurants = async () => {
    const data = await fetch(RESTAURANTS_URL);
    const resturantsData = await data.json();
    setSorts(resturantsData?.data?.sorts);
    setRestaurants(resturantsData?.data?.cards[2]?.data?.data.cards);
    setAllRestaurant(resturantsData?.data?.cards[2]?.data?.data.cards);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return { restaurants, sorts, getFilterRestaurants };
};

export default restaurantsData;
