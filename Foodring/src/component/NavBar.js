import { Link } from "react-router-dom";
import FoodRing from "../assets/img/Foodring.png";

import "../../style.css";

import { UilSearch } from "@iconscout/react-unicons";
import { UilPercentage } from "@iconscout/react-unicons";
import { UilQuestionCircle } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="nav-loc">
        <img src={FoodRing} alt="Foodring logo" />
      </div>
      <ul className="nav-list">
        <Link to="/search">
          <li>
            <UilSearch />
            <span>Search</span>
          </li>
        </Link>
        <Link to="">
          <li>
            <UilPercentage />
            <span>Offers</span>
          </li>
        </Link>
        <Link to="">
          <li>
            <UilQuestionCircle /> <span>Help</span>
          </li>
        </Link>
        <Link to="">
          <li>
            <UilUser /> <span>User</span>
          </li>
        </Link>
        <Link to="">
          <li>
            <span>Cart</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
