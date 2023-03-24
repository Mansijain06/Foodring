import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RESTAURANTS_IMG_URL } from "../config";
import { addItem, removeItem } from "../utils/cartSlice";
import "../../style.css"

const RestaurantMenuItem = ({ menuItems, menuItemWidget }) => {
  // console.log(menuItems);
  // console.log(menuItems.length);
  // const [isItemAdded, setIsItemAdded] = useState(0);

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const addItemHandler = (menu) => {
    dispatch(addItem(menu));
  };
  const removeItemHandler = (menu) => {
    console.log(menu);
    dispatch(removeItem(menu));
  };
  const itemcard = menuItems?.filter(data => data?.card?.card?.itemCards).map((menuItem) => menuItem?.card?.card?.itemCards);

  return (
    <div className="restaurant-menu-container">
      <div className="restaurant-menu-widget">
        {/* {menuItemWidget.map((widget, index) => {
          return <p key={widget.type + index}>{widget.name}</p>;
        })} */}
      </div>
      <div>
        {itemcard.flatMap(item => {
          return [...item];
        })
          .map(menuDetail => {
            return menuDetail?.card?.info;
          })
          .map((menu, i) => {
            return (
              <div className="restaurant-menu-item" key={menu?.id + i}>
                <div className="menu-details">
                  {menu?.isVeg ? "🥬" : "🥓"}
                  <h4>{menu?.name}</h4>
                  <p>₹&nbsp;{menu?.price / 100}</p>
                  <p className="menu-des">{menu?.description}</p>
                </div>
                <div className="menu-add-item">
                  {menu?.imageId ? (
                    <img
                      src={RESTAURANTS_IMG_URL + menu?.imageId}
                      alt="menu img"
                      className="menu-img"
                    />
                  ) : (
                    ""
                  )}
                  <button className="menu-add-btn2">
                    <div onClick={() => cartItems[menu?.id]?.["count"] && removeItemHandler(menu)}>
                      <span>-</span>
                    </div>
                    <div><span>{cartItems[menu?.id]?.["count"] || 0}</span></div>
                    <div onClick={() => addItemHandler(menu)}><span>+</span></div>
                  </button>
                </div>
              </div>
            );
          })}
      </div >
    </div >
  );
};

export default RestaurantMenuItem;
