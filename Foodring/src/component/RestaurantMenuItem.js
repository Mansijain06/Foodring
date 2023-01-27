import { RESTAURANTS_IMG_URL } from "../config";

const RestaurantMenuItem = ({ menuItems, menuItemWidget }) => {
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
              {menu?.cloudinaryImageId ? (
                <img
                  src={RESTAURANTS_IMG_URL + menu?.cloudinaryImageId}
                  alt="menu img"
                  className="menu-img"
                />
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenuItem;
