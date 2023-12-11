import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const logo = "./logo.png";

  const links = [
    { text: "Home", href: "/" },
    { text: "Ads", href: "/ads/" },
    { text: "Trader", href: "/trader/" },
  ];

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} width={100} height={30} alt={logo} />
          </a>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              {links.map((link, index) => {
                const liElement = (
                  <li className="nav-item" key={index}>
                    <Link className="nav-link" to={link.href}>
                      {link.text}
                    </Link>
                  </li>
                );
                return liElement;
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
