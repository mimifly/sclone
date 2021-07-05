import React from "react";

function HeaderLinks({ value }) {
  return (
    <nav>
      <ul className="headerLinkList">
        {value.map((link) => (
          <li key={link}>
            <a className="headerLink" href="#">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderLinks;
