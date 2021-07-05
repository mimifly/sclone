import React from "react";
import HeaderLinks from "./components/HeaderLinks";
import LogIn from "./components/LogIn";
import Cart from "./components/Cart";
import NavItem from "./components/NavItem";
import SearchBar from "./components/SearchBar";
import logo from "./img/sainsburys-logo.svg";

function Header() {
  return (
    <div className="headerMain">
      <div className="headerRow">
        {/* Pass in Header Links as array */}
        <HeaderLinks
          value={[
            "Explore more at Sainsburys.co.uk",
            "Help Centre",
            "Store Locator",
          ]}
        />

        <div className="logInCart">
          <LogIn />
          <Cart />
        </div>
      </div>

      <div className="headerRow">
        <a className="mainLogo" href="#">
          <img src={logo} alt="Main logo" />
        </a>
        <a class="searchListOfItems" href="#">
          Search a list of items
        </a>
      </div>

      <div className="headerRow headerRowNav">
        <ul className="navMain">
          <li>
            <a className="navItem navGroceries" href="#">
              <span className="navGroceriesText">Groceries</span>{" "}
              <span className="navArrow"></span>
            </a>
          </li>

          <NavItem name="Favourites" link="#" />

          <li>
            <a className="navItem navOffers" href="#">
              Offers
            </a>
          </li>

          <NavItem name="Discover" link="#" />
          <NavItem name="Recipes" link="#" />
          <NavItem name="Delivery Pass" link="#" />
          <NavItem name="Summer" link="#" />
        </ul>
        <SearchBar placeholder="Search products" />
      </div>
    </div>
  );
}

export default Header;
