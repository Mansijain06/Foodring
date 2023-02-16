import { useState } from "react";

const SearchRestaurantOrFood = ({ getFilterRestaurants }) => {
  const [searchText, setSearchtext] = useState("");

  const filterRestaurants = (e) => {
    if (e.keyCode === 13) {
      getFilterRestaurants(searchText);
    }
  };

  return (
    <div className="search-container">
      <input
        placeholder="🔎 &nbsp;Search for restaurant, cusinie or a dish"
        className="search-input"
        onChange={(e) => setSearchtext(e.target.value)}
        onKeyDown={filterRestaurants}
      />
    </div>
  );
};

export default SearchRestaurantOrFood;
