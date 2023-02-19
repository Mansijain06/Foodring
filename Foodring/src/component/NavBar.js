import { Link, useLocation } from "react-router-dom";

import "../../style.css";

import { UilPercentage } from "@iconscout/react-unicons";
import { UilInfoCircle } from '@iconscout/react-unicons'
import { UilUser } from "@iconscout/react-unicons";

const NavBar = () => {
  const location = useLocation();
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
          <Link to="">
            <li>
              <UilUser /> <span>User</span>
            </li>
          </Link>
          <Link to="/cart">
            <li>
              <span>Cart</span>
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
