import React from "react";
import { Link } from "react-router-dom";
import "./LongProductCard.css";

const LongProductCard = (props) => {
  return (
    // <div className="lpc">
    //   <div className="lpc_item">
    <div classname="lpc_item_containter">
      <div className="lpc_item_content">
        <Link
          to="#"
          className="lpc_item_link"
          style={{ textDecoration: "none" }}
        >
          <div className="lpc_product_image">
            <div className="lpc_image">
              <div
                style={{
                  height: "200px",
                  width: "200px",
                }}
              >
                <img src={props.Product_image} alt="productImage" />
              </div>
            </div>
          </div>
          <div className="lpc_product_details row">
            <div className="col col-7-12">
              <div className="lpc_product_title">
                SAMSUNG 32 inch 4K Ultra HD LED Backlit VA Panel with 1 Billion
                Colors, PBP, Slim Bezels Flat Monitor ...
              </div>
              <div className="rate-review">
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
              <div className="lpc_product_features">
                <ul className="features_list">
                  <li>Panel Type: IPS Panel</li>
                  <li>Screen Resolution Type: HD</li>
                  <li>Brightness: 250 nits</li>
                  <li>Inbuilt Speaker</li>
                  <li>HDMI Ports - 1</li>
                  <li>1 year</li>
                </ul>
              </div>
            </div>
            <div className="col col-5-12 lpc_prices">
              <div className="price_point">
                <div>
                  <div className=" price-desc">
                    <div className="current_price">₹27,499</div>
                    <div className="og_price">₹ 55,300</div>
                    <div className="discount">50% Off</div>
                  </div>
                  <div className="fd_check">Free Delivery</div>
                </div>
                <div className="flip_assr">
                  <img
                    height="21px"
                    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                    alt="filpart_assured"
                  />
                </div>
              </div>
              <div className="bo">Bank Offer</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LongProductCard;
