import React from "react";
import "./CateNav.css";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
const CateNav = () => {
  return (
    <div>
      <div className="Category_navbar">
        <div className="nav_cont">
          <div className="nav_items">
            <span className="nav_item">
              Electronics
              <div className="icon_more">
                <FaAngleDown />
              </div>
            </span>
            <span className="nav_item">
              Tv & Appliances
              <div className="icon_more">
                <FaAngleDown />
              </div>
            </span>
            <span className="nav_item">
              Men
              <div className="icon_more">
                <FaAngleDown />
              </div>
            </span>
            <span className="nav_item">
              Women
              <div className="icon_more">
                <FaAngleDown />
              </div>
            </span>
            <span className="nav_item">
              Baby & Kids
              <div className="icon_more">
                <FaAngleDown />
              </div>
            </span>
            <span className="nav_item">
              Home & Furniture
              <div className="icon_more">
                <FaAngleDown />
              </div>
            </span>
            <span className="nav_item">Sports,Books & More</span>
            <Link
              to={"#"}
              className="nav_item"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              Flights
            </Link>
            <Link
              to={"#"}
              className="nav_item"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              Offer Zone
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CateNav;
