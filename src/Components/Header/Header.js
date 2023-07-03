import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart, FaMag, FaAngleDown } from "react-icons/fa";
import CateNav from "../CategoryNavbar/CateNav";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./header.css";
const Header = () => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <>
      {/* <div className="flipkart-header border-bottom bg-primary">
        <div className="logo_cont">
          <div className="logo">
            <Link to={"/"}>
              <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" />
            </Link>
          </div>
          <div className="explore">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <p className="text-white">
                Explore <span className="plus-icon ">Plus</span>
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" />
              </p>
            </Link>
          </div>
        </div>
        <div className="search">
          <form className="search_form">
            <div className=" sss  col-12-12 ">
              <div className="search_input">
                <input
                  className="ip"
                  type="text"
                  title="Search for products,brands and more"
                  placeholder="Search for products,brands and more"
                />
              </div>
              <button className="search_button" type="submit">
                <IoSearch />
              </button>
            </div>
          </form>
        </div>

        <div className="login_cont bg-light">
          <Link to={"#"} className="lgn" style={{ textDecoration: "none" }}>
            Login
          </Link>
        </div>
        <div className="bas">
          <Link to={"/newHead"} style={{ textDecoration: "none" }}>
            <span className="text-white"> Become a Seller</span>
          </Link>
        </div>
        <div className="more">
          More
          <div className="icon_more">
            <FaAngleDown />
            
          </div>
        </div>
        <div className="navbar-cart">
          <div className="cart-icon">
            <FaShoppingCart />
          </div>
          <Link
            to={"/cart"}
            className="cart"
            style={{ textDecoration: "none" }}
          >
            Cart
            <div className="cartLength">{cartItems.length}</div>
          </Link>
        </div>
      </div> */}
      <div className="navbar navbar-expand-lg bg-primary justify-content-center col-xs-12 position-sticky">
        <div className="logo_cont">
          <div className="logo">
            <Link to={"/"}>
              <img
                alt=""
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              />
            </Link>
          </div>
          <div className="explore">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <p className="text-white">
                Explore <span className="plus-icon ">Plus</span>
                <img
                  alt=""
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
                />
              </p>
            </Link>
          </div>
        </div>
        <div className="search bg-light rounded-1 ml-2">
          <form className="search_form col-sm-12  col-xs-12">
            <div className=" sss  col-12-12 ">
              <div className="search_input ">
                <input
                  className="ip"
                  type="text"
                  title="Search for products,brands and more"
                  placeholder="Search for products,brands and more"
                />
              </div>
              <button className="search_button" type="submit">
                <IoSearch />
              </button>
            </div>
          </form>
        </div>

        <div className="navbar-nav" id="nav_menu">
          <ul
            style={{
              listStyle: "none ",
              alignItems: "center",
            }}
            className="navbar-nav d-flex flex-row
           mt-2 col-sm-12 col-xs-12 ml-3"
          >
            <li className="list_item item1">
              <div className="login2 ">
                <div className="_btn2">
                  <Link
                    to={"#"}
                    className="lb"
                    style={{ textDecoration: "none" }}
                  >
                    Login
                  </Link>
                </div>
              </div>
            </li>
            <li className="list_item">
              <Link to={"/cn"} className="bas2">
                <span>Become a Seller</span>
              </Link>
            </li>
            <li className="list_item">
              <div className="more_btn">
                <div className="_btn2">
                  <div className="m2">More</div>
                </div>
                <div className="icon_more">
                  <FaAngleDown style={{ color: "white" }} />
                </div>
              </div>
            </li>
            <li className="list_item ltc ">
              <div className="_btn2 mt-1">
                <div className="cart_btn2">
                  <Link to={"/cart"} className="cartLink2">
                    <FaShoppingCart
                      style={{ color: "white", marginRight: "2px" }}
                    />
                    <div className="cartLength2">{cartItems.length}</div>
                    <span>Cart</span>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
