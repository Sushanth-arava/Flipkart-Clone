import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CateNav from "../../Components/CategoryNavbar/CateNav";
import All from "../../Assets/Data/All.json";
import { FaShoppingCart, FaRupeeSign, FaShieldAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
// import { addCart } from "../../Redux/Cart/CartReducer";
import { addCart } from "../../Redux/Cart/CartActions";
import { addToCart } from "../../Redux/Cart/CartSlice";
import CateNav2 from "../../Components/CategoryNavbar/CateNav2";
const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const pData = All.filter((item) => {
      return item.id.toString() === id;
    });
    setProduct(pData);
  }, [id]);
  // console.log(product);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addCart(product));
  };
  return (
    <div>
      <CateNav2 />
      <div className="prod_detail_page">
        {product.map((item) => {
          return (
            <div>
              <div className="prod_del_cont">
                <div className="prod_del_buy">
                  <div className="prod_del_image_cont">
                    <div className="prod_del_image">
                      <img src={item.Product_image} alt="projector 1" />
                    </div>
                  </div>
                  <div className="prod_del_add_cart">
                    <div className="prod_del_add_cart-content">
                      <ui className="prod_del_buttons">
                        <li className="del_list_addtocart_">
                          <button className="add_to_cart" onClick={addToCart}>
                            <FaShoppingCart style={{ color: "white" }} />
                            Add to cart
                          </button>
                        </li>
                        <li className="del_list_buynow">
                          <button className="buy_now">
                            <img
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMHY3LjdoMi4xVjE0TDcgNS42SDQuMkw3IDAiIGZpbGw9IiNGRkYiLz48L3N2Zz4="
                              alt="k"
                            />
                            BUY NOW
                          </button>
                        </li>
                      </ui>
                    </div>
                  </div>
                </div>
                <div className="prod_details">
                  <div className="prod_del_header">
                    <div className="prod_del_header-content">
                      <div className="prod_del_title">
                        <span>{item.Title}</span>
                      </div>
                      <div className="prod_del_rate-review-assurance">
                        <div className="prod_del_rate-review">
                          <div className="prod_del_rating">
                            {item.Rating}
                            <img
                              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                              alt="star"
                            />
                          </div>
                          <span className="review_num"> {item.Reviews} </span>
                        </div>
                        <div className="assurance">
                          <img
                            height="21px"
                            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="spl_price">Special Price</div>
                      <div className="prod_del_price-discount">
                        <div className="prod_del_Price">₹{item.Price}</div>
                        <div className="prod_del_MRP">₹{item.MRP}</div>
                        <div className="prod_del_Discount">{item.Discount}</div>
                      </div>
                      <p style={{ color: "red", font: "14px" }}>
                        Hurry, Only 6 Left!
                      </p>
                    </div>
                  </div>
                  <div className="bankoffers">
                    <div className="bo_">Avaliable Offers</div>
                    <div className="offers">
                      <div className="offers_list">
                        <div className="offer">
                          <img
                            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                            alt=""
                          />
                          <div className="off">
                            5% Cashback on Flipkart Axis Bank Card
                          </div>
                          <div className="add_text">T&C</div>
                        </div>
                        <div className="offer">
                          <img
                            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                            alt=""
                          />
                          <div className="off">
                            Buy this Product and Get Extra ₹500 Off on Bikes &
                            Scooters
                          </div>
                          <div className="add_text">T&C</div>
                        </div>
                        <div className="offer">
                          <img
                            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                            alt=""
                          />
                          <div className="off">
                            Partner OfferSign up for Flipkart Pay Later and get
                            Flipkart Gift Card worth up to ₹500*
                          </div>
                          <div className="add_text">Know More</div>
                        </div>
                        <div className="offer">
                          <img
                            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                            alt=""
                          />
                          <div className="off">
                            Partner OfferBuy this product and get upto ₹500 off
                          </div>
                          <div className="add_text">Know More</div>
                        </div>
                      </div>
                    </div>
                    <button className="more_offers">View 3 more offers</button>
                  </div>
                  <div className="warranty_info">
                    <div class="warranty_content">
                      <div class="warranty_title">Warranty</div>
                      <div class="warranty_details">
                        <span>
                          1 Year Warranty For any assistance contact us on
                          706-517-9993, 4, 5 or write to us
                          support@flipakrt-world.com
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="delivery_info">
                    <div className="delv_info_content">
                      <div className="delv_info_contaitner">
                        <div className="delv_i_row1">
                          <div className="delv_i_title">Delivery</div>
                          <div className="delv_pincode_container">
                            <div style={{ width: "234px" }}>
                              <div className="delv_pin_content">
                                <div className="delv_pin_area">
                                  <HiLocationMarker />
                                  <form
                                    className="delv_pin_form"
                                    autoComplete="off"
                                  >
                                    <input
                                      className="delv_form_input"
                                      type="text"
                                      placeholder="Enter Delivery Pin"
                                      maxLength={6}
                                    ></input>
                                  </form>
                                  <div className="delv_check">Check</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dc_line2">
                          <div className="del_time-price">
                            <div className="del_time">
                              Delivery by 30 Mar, Thursday
                            </div>
                            <div className="line">|</div>

                            <div className="del_fee">
                              Free <span>₹40</span>
                            </div>
                          </div>
                          <div className="del_timings">
                            if ordered before 3:59 PM
                          </div>
                          <div>View Details</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="highlights-services">
                    <div style={{ width: "50%", display: "block" }}>
                      <div className="highlights_cont">
                        <div className="high_title">Highlights</div>
                        <div className="high_list">
                          <ul className="list_highlights">
                            <li>{item.Features.a}</li>
                            <li>{item.Features.b}</li>
                            <li>{item.Features.c}</li>
                            <li>{item.Features.d}</li>
                            <li>{item.Features.e}</li>
                            <li>{item.Features.a}</li>
                            <li>{item.Features.b}</li>
                            <li>{item.Features.d}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div style={{ width: "50%", display: "block" }}>
                      <div className="services_cont">
                        <div className="services_title">Services</div>
                        <ul className="services_list">
                          <li className="serv1">
                            <div className="serv_icon">
                              <FaShieldAlt style={{ color: "blue" }} />
                            </div>
                            <div className="serv1_content">
                              1 Year Warranty For any assistance contact us on
                              706-517-9993, 4, 5 or write to us
                              support@egate-world.com
                            </div>
                          </li>
                          <li className="serv2">
                            <div className="serv_icon2">
                              <FaRupeeSign style={{ color: "blue" }} />
                            </div>
                            <div className="serv1_content">
                              Cash on Delivery available
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetails;
