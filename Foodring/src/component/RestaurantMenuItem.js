import { useState } from "react";
import { RESTAURANTS_IMG_URL } from "../config";

const RestaurantMenuItem = ({ menuItems, menuItemWidget }) => {
  console.log(menuItems);
  const [isItemAdded, setIsItemAdded] = useState(0);
  return (
    <div className="restaurant-menu-container">
      <div className="restaurant-menu-widget">
        {menuItemWidget.map((widget, index) => {
          return <p key={widget.type + index}>{widget.name}</p>;
        })}
      </div>
      <div>
        {menuItems.map((menu) => {
          return (
            <div className="restaurant-menu-item" key={menu?.id}>
              <div className="menu-details">
                {menu?.isVeg ? "🥬" : "🥓"}
                <h4>{menu?.name}</h4>
                <p>₹&nbsp;{menu?.price / 100}</p>
                <p className="menu-des">{menu?.description}</p>
              </div>
              <div className="menu-add-item">
                {menu?.cloudinaryImageId ? (
                  <img
                    src={RESTAURANTS_IMG_URL + menu?.cloudinaryImageId}
                    alt="menu img"
                    className="menu-img"
                  />
                ) : (
                  ""
                )}
                {!isItemAdded && (
                  <button
                    className="menu-add-btn"
                    onClick={() => {
                      setIsItemAdded(1);
                    }}
                  >
                    ADD
                  </button>
                )}
                {isItemAdded && (
                  <button className="menu-add-btn2">
                    <span
                      onClick={(prevValue) => {
                        setIsItemAdded(prevValue - 1);
                      }}
                    >
                      -
                    </span>
                    <span>1</span>
                    <span
                      onClick={(prevValue) => {
                        setIsItemAdded(prevValue + 1);
                      }}
                    >
                      +
                    </span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenuItem;
