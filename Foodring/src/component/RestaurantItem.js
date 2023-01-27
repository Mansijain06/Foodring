import { RESTAURANTS_IMG_URL } from "../config";
import "../../style.css";
import { UilPricetagAlt } from "@iconscout/react-unicons";

const RestaurantItem = ({
  name,
  cuisines,
  avgRating,
  slaString,
  costForTwoString,
  cloudinaryImageId,
  aggregatedDiscountInfo,
}) => {
  return (
    <div className="restaurant-item-container">
      <img src={RESTAURANTS_IMG_URL + cloudinaryImageId} alt={name} />
      <h4 className="restaurant-item-name">{name}</h4>
      <p className="restaurant-cuisines">{cuisines.join(", ")}</p>
      <div className="restaurant-item-details">
        <span
          className="restaurant-rating"
          style={{ backgroundColor: +avgRating >= 4 ? "#48c479" : "#db7c38" }}
        >
          ★ &nbsp;<span>{avgRating}</span>
        </span>
        <span>{slaString}</span>
        <span>{costForTwoString}</span>
      </div>
      {aggregatedDiscountInfo?.shortDescriptionList[0]?.meta && (
        <div className="restaurant-item-discount">
          <UilPricetagAlt height="16px" /> &nbsp;
          {aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}
        </div>
      )}
    </div>
  );
};

export default RestaurantItem;
