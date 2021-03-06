import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#Home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#AbouMe"
          onClick={() => props.handlePageChange("AboutMe")}
          className={props.currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#PortfolioPage"
          onClick={() => props.handlePageChange("PortfolioPage")}
          className={props.currentPage === "PortfolioPage" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Contact"
          onClick={() => props.handlePageChange("Contact")}
          className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
