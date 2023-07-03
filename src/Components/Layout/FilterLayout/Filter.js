import React from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleDown } from "react-icons/fa";
import "./Filter.css";
const Filter = () => {
  return (
    <div>
      <div className="filter_cont">
        <div className="fil_header">
          <div className="fil_title">
            <div className="t">
              <span>Filter</span>
            </div>
            <div className="clr">
              <span>Clear All</span>
            </div>
          </div>
          <div className="brand">
            <div className="br">
              <div className="b">
                <div style={{ display: "inline-block" }}>X Brand</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ fontSize: "12px" }}>
          <section className="one">
            <div className="one_heading">
              <span> Categories</span>
            </div>
            <div>
              <ul>
                <li className="lii">
                  <div className="p">
                    <FaAngleLeft />
                  </div>
                  <Link
                    className="cat-link"
                    to={"#"}
                    style={{ textDecoration: "none" }}
                  >
                    Category 1
                  </Link>
                </li>
                <li className="lii">
                  <div className="p">
                    <FaAngleLeft />
                  </div>
                  <Link
                    className="cat-link"
                    to={"#"}
                    style={{ textDecoration: "none" }}
                  >
                    Category 2
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <section className="two">
          <label className="lbl">
            <input type="checkbox" className="lbl_cb" />
            <div className="lcb" />
            <div className="assur">
              <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" />
            </div>
          </label>
          <div className="qm">
            <span className="ques">?</span>
          </div>
        </section>
        <section className="other">
          <div className="cont">
            <div className="name">Brand</div>
            <div className="ot-more">
              <FaAngleDown />
            </div>
          </div>
        </section>
        <section className="other">
          <div className="cont">
            <div className="name">Customer Ratings</div>
            <div className="ot-more">
              <FaAngleDown />
            </div>
          </div>
        </section>
        <section className="other">
          <div className="cont">
            <div className="name">Discount</div>
            <div className="ot-more">
              <FaAngleDown />
            </div>
          </div>
        </section>
        <section className="other">
          <div className="cont">
            <div className="name">Connectivty</div>
            <div className="ot-more">
              <FaAngleDown />
            </div>
          </div>
        </section>
        <section className="other">
          <div className="cont">
            <div className="name">Avaliability</div>
            <div className="ot-more">
              <FaAngleDown />
            </div>
          </div>
        </section>
        <section className="other">
          <div className="cont">
            <div className="name">GST Invoice Avaliable</div>
            <div className="ot-more">
              <FaAngleDown />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Filter;
