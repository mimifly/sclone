import React from "react";

function NavItem({ name, link }) {
  return (
    <li>
      <a className="navItem" href={link}>
        {name}
      </a>
    </li>
  );
}

export default NavItem;
