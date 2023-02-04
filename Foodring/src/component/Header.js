import NavBar from "./NavBar";
import SearchRestaurantOrFood from "./SearchRestaurantOrFood";
import BackgroundImg from "../assets/img/backgroundImg.png";

const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BackgroundImg})`, objectFit: "cover" }}
      className="header-container"
    >
      <NavBar />
      <SearchRestaurantOrFood />
    </div>
  );
};

export default Header;
