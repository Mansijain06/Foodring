import NavBar from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import { RESTAURANTS_IMG_URL } from "../config";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const items = Object.entries(cartItems);

  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="resturant-menu-navbar">
        <NavBar />
      </div>
      <div className="checkout-main">
        <div className="checkout">
          {items.map((item) => (
            <div className="checkout-container" key={item[1].id}>
              <div className="">
                {item[1]?.cloudinaryImageId && (
                  <img
                    src={RESTAURANTS_IMG_URL + item[1]?.cloudinaryImageId}
                    className="checkout-img"
                  />
                )}
              </div>
              <div className="checkout-sec">
                <span className="checkout-head">{item[1].name}</span>
                <span className="checkout-amt">₹&nbsp;{item[1]?.price / 100}</span>
                <p className="checkout-des">{item[1]?.description}</p>
                <div>
                  <button className="checkout-btn">
                    <span onClick={() => dispatch(removeItem(item[1]))}>-</span>
                    <span>{item[1]?.count}</span>
                    <span onClick={() => dispatch(addItem(item[1]))}>+</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="checkout-info">
          <h4>Review your order to avoid cancellations</h4>
          <p>If you cancel within 60 seconds of placing your order, a 100% refund will be issued. No refund for cancellations made after 60 seconds.</p>
          <p>Avoid cancellation as it leads to food wastage.</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
