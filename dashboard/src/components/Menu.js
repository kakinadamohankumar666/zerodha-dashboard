import React, {useState, useContext} from "react";
import {Link , useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import GeneralContext from "./GeneralContext";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [cookies, removeCookie] = useCookies([]);
  const navigate = useNavigate();
  const { username } = useContext(GeneralContext);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () =>{
    setIsProfileDropdownOpen((prev) => !prev);
  };

  const handleLogout = () =>{
    removeCookie("token");
    navigate("/signup");
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/"
            onClick = {() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/orders"
            onClick = {() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/holdings"
            onClick = {() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/positions"
            onClick = {() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/funds"
            onClick = {() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/apps"
            onClick = {() => handleMenuClick(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile-wrapper">
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username"><span>{username || "USER"}</span></p>
        </div>
        {isProfileDropdownOpen && (
            <div className="dropdown-menu"> {/* ✅ Dropdown content */}
              <button onClick={handleLogout}>Logout</button> {/* ✅ Logout button */}
            </div>
          )}
      </div>
    </div>
    </div>
  );
};

export default Menu;