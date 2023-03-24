import { RESTAURANTS_IMG_URL } from "../config";
import { UilTagAlt } from "@iconscout/react-unicons";

const RestaurantMenuDetailsCard = ({ restaurantData }) => {
  return (
    <div className="restaurantmenu-container">
      <div className="restaurantmenu-details-container">
        <img
          src={RESTAURANTS_IMG_URL + restaurantData?.cloudinaryImageId}
          alt="restaurantimg"
        />
        <div className="restaurantmenu-details">
          <h1 className="restaurantmenu-details-header">
            {restaurantData?.name}
          </h1>
          <p>{restaurantData?.cuisines?.join(", ")}</p>
          <p>{restaurantData?.area}</p>
          <div className="restaurantmenu-details-review">
            <div>
              <p>★&nbsp;{restaurantData?.avgRatingString}</p>
              <label>{restaurantData?.totalRatingsString}</label>
            </div>
            <div>
              <p>{restaurantData?.sla?.deliveryTime} mins</p>
              <label>Delivery Time</label>
            </div>
            <div>
              <p>₹&nbsp;{restaurantData?.costForTwo}</p>
              <label>Cost for two</label>
            </div>
          </div>
        </div>
      </div>
      <div className="restaurantmenu-offer">
        <div>
          <h3>OFFER</h3>
          {restaurantData?.aggregatedDiscountInfo?.descriptionList.map(
            (discount, index) => (
              <p key={index}>
                <UilTagAlt height="16px" /> &nbsp;
                {discount?.meta}
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuDetailsCard;
