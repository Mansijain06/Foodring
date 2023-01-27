import { useEffect } from "react";
import { RESTAURANT_PRE_SEARCH_URL } from "../config";

const SearchRestaurantOrFood = () => {
  const getPreSearchCards = async () => {
    const data = await fetch(RESTAURANT_PRE_SEARCH_URL);
    const jsonData = await data.json();
    console.log(jsonData);
  };

  useEffect(() => {
    // getPreSearchCards();
  }, []);
  return (
    <div>
      <input placeholder="Search for restaurants and food" />
      <h2>Popular Cuisines</h2>
    </div>
  );
};

export default SearchRestaurantOrFood;
