import React from "react";
import { Link } from "react-router-dom";

import "./ShortProductCard.css";
const ShortProductCard = (data) => {
  return (
    // <div className="spc">
    //   <div className="spc_items">
    <div className="spc_item_container">
      <div className="spc_item_content">
        <Link to={"#"} className="spc_image_link">
          <div className="spc_image_containter">
            <div
              className="spc_image"
              style={{ height: "200px", width: "200px" }}
            >
              <img src={data.ImgSrc} alt="productImage" />
            </div>
          </div>
        </Link>
        <Link
          to={"#"}
          className="spc_title_link"
          style={{ textDecoration: "none" }}
        >
          {data.Title}
        </Link>
        <div className="spc_product_varient">Black,ink Bottle</div>
        <div className="spc_align">
          <div className="rate-review2">
            <span className="product_rating">
              <div className="rating">
                4.3
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                  alt="star"
                />
              </div>
            </span>
            <span className="review_num"> (8719) </span>
          </div>
          <div className="flip_assr">
            <img
              height="21px"
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
              alt="filpart_assured"
            />
          </div>
        </div>
        <Link
          to={"#"}
          className="prod_buy_link"
          style={{ textDecoration: "none" }}
        >
          <div className=".spc_align">
            <div>
              <div className="spc_curr_price">₹699</div>
              <div className="spc_mrp">₹6899</div>
            </div>
            <div className="spc_discount">50% Off</div>
          </div>
          <div className="free_del">Free Delivery</div>
        </Link>
        <div className="spc_ds">Daily saver</div>
      </div>
    </div>
  );
};

export default ShortProductCard;
