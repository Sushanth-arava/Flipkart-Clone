import React from "react";
import Categorybar from "../../Assets/Data/Categorybar.json";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import "./Top_nav.css";
const Top_nav = () => {
  return (
    <>
      <div className="top_featured">
        <div className="tf">
          <div className="tf_items">
            {Categorybar.map((item, index) => {
              return (
                <div className="cate_card" key={index}>
                  <Link to={"#"} style={{ textDecoration: "none" }}>
                    <div className="c">
                      <div className="card_image">
                        <img
                          src={item.imageSrc}
                          className="card_img"
                          alt={item.category}
                        />
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="cate_name text-decoration-none">
                        {item.category}
                      </div>

                      <div className="catarrow">
                        {item.hover === "true" ? <FaAngleDown /> : ""}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Top_nav;
