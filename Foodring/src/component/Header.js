import NavBar from "./NavBar";
import BackgroundImg from "../assets/img/backgroundImg.png";

const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BackgroundImg})`, objectFit: "cover" }}
      className="header-container"
    >
      <NavBar />
    </div>
  );
};

export default Header;
