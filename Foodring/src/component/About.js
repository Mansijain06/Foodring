import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

import FoodRingImg from "../assets/img/FoodringScreen.png";
import DeliveryImg from "../assets/img/delivery_online.png"

const About = () => {
  return (
    <div className="about-container">
      <div className="resturant-menu-navbar">
        <NavBar />
      </div>
      <div className="about-sec">
        <div className="about-main">
          <img src={FoodRingImg} alt="food ring" className="about-us-img" />
          <div className="about-main-text">
            <h1>Foodring - Discover the best food & drinks</h1>
            <p>
              Foodring is an online and mobile food ordering system which we
              have developed for restaurant owners and food lovers. Through
              Foodring we are helping customers to discover the best restaurants
              in city. If you are restaurant owner, you can easily register your
              restaurant and upload restaurant menu to start receiving online
              orders through this fast growing portal without any cost.
            </p>
          </div>
        </div>
        <div className="about-main">
          <div className="about-main-text">
            <h1>Vision</h1>
            <p>
              For food lovers who want to order food from local restaurants
              online, the Food Ordering System will be an Internet-based
              application that will accept individual or group meal orders,
              process payments, and trigger delivery of the prepared meals to a
              designated location. For Restaurant owner who wants to take and grow
              their business online, with low budget can start their online
              restaurant business and get orders from many more customers.
            </p>
          </div>
          <img src={DeliveryImg} alt="food ring" className="about-us-img" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
