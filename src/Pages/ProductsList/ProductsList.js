import React, { useEffect } from "react";
import CateNav from "../../Components/CategoryNavbar/CateNav";
import "./ProductsList.css";
import ProdData from "../../Assets/Data/AllProductsData.json";
import Filter from "../../Components/Layout/FilterLayout/Filter";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import ShortProductCard from "../../Components/Layout/ProductCard/ShortProductCard";
import CateNav2 from "../../Components/CategoryNavbar/CateNav2";
import All from "../../Assets/Data/All.json";
const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const prods = All.filter((item) => {
      return item.ProdCatId.toString() === id;
    });
    setProducts(prods);
  }, []);

  const card = products[0]?.CardFormat;
  return (
    <div>
      <CateNav2 />
      <div className="products_cont">
        <div className="cont_item">
          <div className="filter_section">
            <Filter />
          </div>
          <div className="products_section">
            <div className="prod_header  d-flex flex-column">
              <div className="Title">
                <h1>Monitors</h1>
                <p className="products_range">
                  Showing 1-24 products of 60 products
                </p>
              </div>

              <div className="price_sorting">
                <nav>
                  <div className="sort">Sort by</div>
                  <div className="sort_list">
                    <Link
                      to="#"
                      className="sort_item"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Popularity
                    </Link>
                    <Link
                      to="#"
                      className="sort_item"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Price -- Low to High
                    </Link>
                    <Link
                      to="#"
                      className="sort_item"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Price -- High to Low
                    </Link>
                    <Link
                      to="#"
                      className="sort_item"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Newest First
                    </Link>
                  </div>
                </nav>
              </div>
            </div>

            {card === "Long" ? (
              <div>
                {products.map((item, index) => {
                  return (
                    <div className="lpc" key={index}>
                      <div className="lpc_item">
                        <div classname="lpc_item_containter">
                          <div className="lpc_item_content">
                            <Link
                              to={`/productDetails/${item.id}`}
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
                                    <img
                                      src={item.Product_image}
                                      alt="productImage"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="lpc_product_details row">
                                <div className="col col-7-12">
                                  <div className="lpc_product_title">
                                    {item.Title}
                                  </div>
                                  <div className="rate-review">
                                    <span className="product_rating">
                                      <div className="rating">
                                        {item.Rating}
                                        <img
                                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                                          alt="star"
                                        />
                                      </div>
                                    </span>
                                    <span className="review_num">
                                      {" "}
                                      {item.Reviews}{" "}
                                    </span>
                                  </div>
                                  <div className="lpc_product_features">
                                    <ul className="features_list">
                                      <li>{item.Features.a}</li>
                                      <li>{item.Features.b}</li>
                                      <li>{item.Features.c}</li>
                                      <li>{item.Features.d}</li>
                                      <li>{item.Features.e}</li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col col-5-12 lpc_prices">
                                  <div className="price_point">
                                    <div>
                                      <div className=" price-desc">
                                        <div className="current_price">
                                          ₹{item.Price}
                                        </div>
                                        <div className="og_price">
                                          ₹{item.MRP}
                                        </div>
                                        <div className="discount">
                                          {item.Discount}
                                        </div>
                                      </div>
                                      <div className="fd_check">
                                        Free Delivery
                                      </div>
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
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>
                <div className="spc">
                  <div className="spc_items">
                    {products.map((item, index) => {
                      return (
                        <div className="spc_item_container" key={index}>
                          <div className="spc_item_content">
                            <Link
                              to={`/productDetails/${item.id}`}
                              className="spc_image_link"
                            >
                              <div className="spc_image_containter">
                                <div
                                  className="spc_image"
                                  style={{ height: "200px", width: "200px" }}
                                >
                                  <img
                                    src={item.Product_image}
                                    alt="productImage"
                                  />
                                </div>
                              </div>
                            </Link>
                            <Link
                              to={`/productDetails/${item.id}`}
                              className="spc_title_link"
                              style={{ textDecoration: "none" }}
                            >
                              {item.Title}
                            </Link>
                            <div className="spc_product_varient">
                              {item.Type}
                            </div>
                            <div className="spc_align">
                              <div className="rate-review2">
                                <span className="product_rating">
                                  <div className="rating">
                                    {item.Rating}
                                    <img
                                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                                      alt="star"
                                    />
                                  </div>
                                </span>
                                <span className="review_num">
                                  {" "}
                                  {item.Reviews}{" "}
                                </span>
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
                              to={`/productDetails/${item.id}`}
                              className="prod_buy_link"
                              style={{ textDecoration: "none" }}
                            >
                              <div className=".spc_align">
                                <div>
                                  <div className="spc_curr_price">
                                    {item.Price}
                                  </div>
                                  <div className="spc_mrp">{item.MRP}</div>
                                </div>
                                <div className="spc_discount">
                                  {item.Discount}
                                </div>
                              </div>
                              <div className="free_del">Free Delivery</div>
                            </Link>
                            <div className="spc_ds">Daily saver</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
