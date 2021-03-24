import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import PortfolioPage from "./pages/PortfolioPage";
import Contact from "./pages/Contact";

class Portfolio extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "AboutMe") {
      return <AboutMe />;
    } else if (this.state.currentPage === "PortfolioPage") {
      return <PortfolioPage />;
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;
