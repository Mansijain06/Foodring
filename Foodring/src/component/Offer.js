import { useEffect, useState } from "react";

import NavBar from "./NavBar";
import RestaurantItem from "./RestaurantItem";
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
        console.log(json);
        // console.log(json?.data?.cards);
        setRestaurants(json?.data?.cards);
    };
    return (
        <div>
            <div className="resturant-menu-navbar">
                <NavBar />
            </div>
            <div className="offer-head">
                <div className="offer-head-text">
                    <h1>Offers for you</h1>
                    <p>Explore top deals and offers exclusively for you!</p>
                </div>
                <img src={offerLogo} alt="offers" />
            </div>
            <div className="offer-container">
                {
                    restaurants?.map(item => {
                        return (item.cardType === "restaurant" && <RestaurantItem {...item?.data?.data} key={item?.id} />)
                    })
                }
            </div>
        </div>
    );
};

export default Offer;
