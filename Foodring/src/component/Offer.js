import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import RestaurantItem from "./RestaurantItem";
import Shimmer from "./Shimmer";
import "../../style.css";

import offerLogo from "../assets/img/offerlogo.webp";
import { RESTAURANT_OFFER_URL } from "../config";

const Offer = () => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        getOfferRestaurants();
    }, []);

    const getOfferRestaurants = async () => {
        const data = await fetch(RESTAURANT_OFFER_URL);
        const json = await data.json();
        setRestaurants(json?.data?.cards);
        console.log(restaurants)
    };
    return (
        <div>
            <div className="resturant-menu-navbar">
                <NavBar />
            </div>
            <div className="offer-head">
                <div className="offer-head-text">
                    <h1 className="offer-head-text-header">Offers for you</h1>
                    <p>Explore top deals and offers exclusively for you!</p>
                </div>
                <img src={offerLogo} alt="offers" className="offer-img" />
            </div>
            {restaurants.length ? (
                <div className="offer-container">
                    {restaurants?.map((item) => {
                        return (
                            item.cardType === "restaurant" && (
                                <Link to={"/restaurants/" + item?.data?.data?.id} key={item?.data?.data?.id}>
                                    <RestaurantItem {...item?.data?.data} />
                                </Link>
                            )
                        );
                    })}
                </div>
            ) : (
                <Shimmer />
            )}
        </div>
    );
};

export default Offer;
