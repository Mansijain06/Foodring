import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

import "../../style.css";
import { UilPercentage } from "@iconscout/react-unicons";
import { UilInfoCircle } from '@iconscout/react-unicons'
import { UilUser } from "@iconscout/react-unicons";

const NavBar = () => {
  const location = useLocation();

  const cartItems = useSelector(store => store.cart?.items);

  return (
    <>
      <div className="nav-container">
        <Link to="/"> <h1 className="foodring">Foodring</h1></Link>
        <ul className="nav-list">
          <Link to="/offer">
            <li>
              <UilPercentage />
              <span>Offers</span>
            </li>
          </Link>
          <Link to="/about">
            <li>
              <UilInfoCircle /> <span>About</span>
            </li>
          </Link>
          <Link to="/author">
            <li>
              <UilUser /> <span>Author</span>
            </li>
          </Link>
          <Link to="/cart">
            <li>
              <span>Cart {`(${Object.keys(cartItems).length})`}</span>
            </li>
          </Link>
        </ul>
      </div>
      {location.pathname === '/' && <div className="nav-slogan">
        <h1>Discover the best food & drinks</h1>
      </div>}
    </>
  );
};

export default NavBar;
