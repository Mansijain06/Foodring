import { useState } from "react";
import { UilAngleDown } from "@iconscout/react-unicons";
import { UilAngleUp } from "@iconscout/react-unicons";

const Footer = () => {
  const [selectedType, setSelectedType] = useState("");
  const exploreData = [
    {
      title: "Popular cuisines near me",
      list: [
        "Bakery food near me",
        "Beverages food near me",
        "Biryani food near me",
        "Burger food near me",
        "Chinese food near me",
        "Chinese food near me",
        "Desserts food near me",
        "Ice Cream food near me",
        "Mithai food near me",
        "Momos food near me",
        "Mughlai food near me",
        "North Indian food near me",
        "Pizza food near me",
        "Sandwich food near me",
        "Shake food near me",
        "Sichuan food near me",
        "South Indian food near me",
        "Street food near me",
        "Tea food near me",
      ],
      type: "cuisines",
    },
    {
      title: "Popular restaurant types near me",
      list: [
        "Bakeries near me",
        "Bars near me",
        "Beverage Shops near me",
        "Bhojanalya near me",
        "Cafés near me",
        "Casual Dining near me",
        "Clubs near me",
        "Cocktail Bars near me",
        "Dessert Parlors near me",
        "Dhabas near me",
        "Fine Dining near me",
        "Food Courts near me",
        "Food Trucks near me",
        "Kiosks near me",
        "Lounges near me",
        "Paan Shop near me",
        "Pubs near me",
        "Quick Bites near me",
        "Sweet Shops near me",
      ],
      type: "restaurant",
    },
    {
      title: "Top Restaurant Chains",
      list: ["Domino's", "KFC", "McDonald's", "Pizza Hut", "WOW! Momo"],
      type: "restaurantchain",
    },
  ];
  return (
    <>
      <div className="footer-container">
        <h1 className="footer-header">Explore options near me</h1>
        <div className="footer-accordian-container">
          {exploreData.map((data, index) => {
            return (
              <div className="footer-accordian" key={index}>
                <div
                  className="footer-listitem-header"
                  onClick={() =>
                    selectedType === data.type
                      ? setSelectedType("")
                      : setSelectedType(data.type)
                  }
                >
                  <h2 className="footer-listitem-title">{data.title}</h2>
                  {selectedType === data.type ? <UilAngleUp /> : <UilAngleDown />}
                </div>

                {selectedType === data.type && (
                  <div className="footer-listitem-container">
                    {data.list.map((listItem, index) => (
                      <span className="footer-listitem" key={index}>{listItem}</span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <p className="created-by-text">Created by @<a href="https://www.linkedin.com/in/mansi-jain06?original_referer=" target="_blank">MansiJain</a></p>
      </div>

    </>
  );
};

export default Footer;
