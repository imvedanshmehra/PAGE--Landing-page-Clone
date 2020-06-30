import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../pages/About";
import Products from "../pages/Products";
import CaseStudies from "../pages/CaseStudies";
import UsedEquipments from "../pages/UsedEquipments";
import SpareParts from "../pages/SpareParts";
import Sitemap from "../pages/Sitemap";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

const Navigation = () => {
  return (
    <Router>
      <div className="navbar-container">
        <nav>
          <ul className="navbar">
            <li>
              <Link to="/" className="nav">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="nav">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" className="nav">
                Products
              </Link>
            </li>
            <li>
              <Link to="/case-studies" className="nav">
                Case Studies
              </Link>
            </li>
            <li>
              <Link to="/used-equipment" className="nav">
                Used Equipment
              </Link>
            </li>
            <li>
              <Link to="/spare-parts" className="nav">
                Spare Parts
              </Link>
            </li>
            <li>
              <Link to="/sitemap" className="nav">
                Sitemap
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about-us">
            <About />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/case-studies">
            <CaseStudies />
          </Route>
          <Route path="/used-equipment">
            <UsedEquipments />
          </Route>
          <Route path="/spare-parts">
            <SpareParts />
          </Route>
          <Route path="/sitemap">
            <Sitemap />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default Navigation;
