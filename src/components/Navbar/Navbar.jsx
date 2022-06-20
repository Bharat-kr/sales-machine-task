import "./Navbar.scss";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import profile from "../../assets/user.png";
import exchange from "../../assets/exchange.svg";
import logout from "../../assets/logout.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
        Sales machine
      </div>
      <div className="searchbar">
        <div>
          <input type="text" placeholder="Search" />
          <img src={search} alt="" />
        </div>
      </div>
      <div className="others">
        <img src={profile} alt={profile} />
        <img src={exchange} alt="" />
        <img src={logout} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
