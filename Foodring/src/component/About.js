import React from "react";
import NavBar from "./NavBar";

import FoodRingImg from "../assets/img/FoodringScreen.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="resturant-menu-navbar">
        <NavBar />
      </div>
      <div className="about-main">
        <img src={FoodRingImg} alt="food ring" className="about-us-img" />
        <div className="about-main-text">
          <h1>Foodring - Discover the best food & drinks</h1>
          <p>
            Foodring is an online and mobile food ordering system which we have
            developed for restaurant owners and food lovers. Through Foodring we
            are helping customers to discover the best restaurants in city. If
            you are restaurant owner, you can easily register your restaurant
            and upload restaurant menu to start receiving online orders through
            this fast growing portal without any cost.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
