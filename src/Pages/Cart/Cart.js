import React, { useEffect, useState } from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { icons } from "react-icons";
// import { removeCart } from "../../Redux/Cart/CartReducer";
import { removeCart } from "../../Redux/Cart/CartActions";
// import CartItem from "../../Components/CartItem/CartItem";

const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeFromCart = (id) => {
    dispatch(removeCart(id));
  };
  let p = [];
  let d = [];
  let a = 0;
  let b = 0;
  let c = 0;

  let disc = [];
  {
    cartData.map((item) => {
      return (p[a++] = item.MRP), (d[b++] = item.Price);
    });
  }
  const [amount, setAmount] = useState(1);
  const [quan, setQuan] = useState("");
  const [editQuan, setEditQuan] = useState({
    id: "",
    status: false,
  });
  var mrpArr = p.map(Number);
  var discArr = d.map(Number);
  for (var i = 0; i <= cartData.length; i++) {
    disc[i] = p[i] + d[i];
  }
  let tDiscount = 0;
  const totalMrp = mrpArr.reduce((a, b) => (a = a + b), 0);
  const totalDiscount = discArr.reduce((a, b) => (a = a + b), 0);
  const finalDiscount = totalMrp - totalDiscount;
  if (finalDiscount < 0) {
    tDiscount = 0 - finalDiscount;
  } else tDiscount = finalDiscount;

  const finalAmount = totalMrp - finalDiscount;
  console.log(cartData);
  // const totalDisc = 0 - totalDiscount;
  // const subQuan = (q) => {
  //   return (quantity = q - 1);
  // };

  // const handleDecrement = () => {
  //   if (quan > 1) {
  //     setQuan((prev) => prev - 1);
  //   }
  // };
  // const handleIncrement = () => {
  //   if (quan >= 1) {
  //     setQuan((prev) => prev + 1);
  //   }};

  // const handleChange = (q) => {
  //   setQuan((prev) => (prev = q));
  // };

  const handleClick = (text, a) => {
    setAmount(text === "plus" ? a + 1 : a > 1 ? a - 1 : 1);
  };
  let q = [];
  for (let j = 0; j <= cartData.length; j++) {
    q[j] = 1;
  }
  return (
    <div>
      <div className="cartpage col-md-12">
        <div className="cart_container">
          {cartData.length <= 0 ? (
            <div>
              <div className="empty_cart_content">
                <div className="empty_cart_head">
                  <div className="e_c_head_content">
                    <div className="echc">
                      <Link
                        to={"#"}
                        className="cart_flip_link"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="cart_flip">Flipkart</div>
                      </Link>
                      <Link
                        to={"#"}
                        className="cart_grocery_link"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="cart_grocery">Grocery</div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="empty_cart_body">
                  <div className="e_c_body-content">
                    <img
                      src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                      alt="emptyCart"
                      className="empty_cart_image"
                    />

                    <div className="empty_cart_message1">
                      Missing Cart items?
                    </div>

                    <div className="empty_cart_message2">
                      Login to see the items you added previously
                    </div>
                    <button className="cart_login_btn">Login</button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="prod_cartpage">
              <div className="prod_cartleft">
                <div className="prod_cartleft-content">
                  <div className="prod_cartleft-header">
                    <div className="e_c_head_content">
                      <div className="echc">
                        <Link
                          to={"#"}
                          className="cart_flip_link"
                          style={{ textDecoration: "none" }}
                        >
                          <div className="cart_flip">Flipkart</div>
                        </Link>
                        <Link
                          to={"#"}
                          className="cart_grocery_link"
                          style={{ textDecoration: "none" }}
                        >
                          <div className="cart_grocery">Grocery</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="prod_cartleft_address">
                    <div className="prod_address-content">
                      <div className="addr_title">From Saved Addresses</div>
                      <div className="del_pin_enter">
                        <div className="del_pin_content">
                          <button className="delPin_btn">
                            Enter Delivery Pincode
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {cartData.map((item, index) => {
                    return (
                      <div className="prod_cartleft_details">
                        <div className="prod_cartleft_details-content prod1">
                          <div className="d-flex">
                            <Link to={"#"} className="cart_prod_image_link">
                              <div className="cpi">
                                <img src={item.Product_image} alt="p_img" />
                              </div>
                            </Link>
                            <div className="cart_prod_data">
                              <div className="cart_prod_title">
                                {item.Title}
                              </div>
                              <div className="cart_prod_type">{item.type}</div>
                              <div className="cart_prod_seller">
                                {item.Quantity}Seller:: Seller Name
                                {item.id}
                                <img
                                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                                  className="flp_asr"
                                  alt="flp"
                                />
                              </div>
                              <div className="d-flex align-items-center">
                                <div className="cart_prod_mrp">₹{item.MRP}</div>
                                <div className="cart_prod_price">
                                  ₹{item.Price}
                                </div>
                                <div className="cart_prod_discount">
                                  {item.Discount}
                                </div>
                              </div>
                              <div className="cart_prod_inst">
                                Enter pincode to see if the product is in stock
                              </div>
                            </div>
                          </div>
                          <div className="cart_prod_ops">
                            <div className="prod_add-sub">
                              <div className="prod_opr">
                                <button
                                  className="minus"
                                  onClick={() => handleClick("min", q[index])}
                                >
                                  -
                                </button>
                                <div className="quan">
                                  <input
                                    className="quan_input"
                                    type="number"
                                    value={q[index]}
                                    onChange={(e) => setAmount(e.target.value)}
                                  />
                                </div>
                                <button
                                  className="minus"
                                  onClick={() => handleClick("plus", q[index])}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <div className="a">
                              <div className="sfl">Save For Later</div>
                              <div className="sfl">
                                <button
                                  className="sfl_btn"
                                  onClick={() => {
                                    removeFromCart(item.id);
                                  }}
                                >
                                  Remove Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <CartItem data={item} /> */}
                      </div>
                    );
                  })}

                  <div className="prod_cartleft_placeorder">
                    <div className="placeorder-content">
                      <div className="pobb">
                        <Link to={"/checkout"}>
                          <button className="_pob">
                            <span> Place order</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="prod_cartright_prices">
                <div className="prod_cart_prices-container">
                  <div className="prod_cart_prices-content">
                    <div className="prod_price_title">
                      <span>Price Details</span>
                    </div>
                    <div className="prod_price_cont">
                      <div className="pp_cont_item prodPrice">
                        <div className="pp_price_t">
                          Price ( {cartData.length} Items)
                        </div>
                        <div className="pp_price">₹{totalMrp}</div>
                      </div>
                      <div className="pp_cont_item prodMrp">
                        <div className="pp_discount_t">Discount</div>
                        <div className="pp_discount">-₹{tDiscount}</div>
                      </div>
                      <div className="pp_cont_item prodDiscount">
                        <div className="pp_del">Delivery Charges</div>
                        <div className="pp_del_txt">Free</div>
                      </div>

                      <div className="prod_total">
                        <div className="prod_total-cont">
                          <div className="tm">Total Amount</div>
                          <div className="total-amount">₹{finalAmount}</div>
                        </div>
                      </div>
                      <div className="savings">
                        You will save ₹{tDiscount} on this order
                      </div>
                    </div>
                  </div>
                </div>
                <div className="safety">
                  <div className="flip-safe">
                    <div className="flip-safe-cont">
                      <div className="fs">
                        <BsShieldFillCheck className="shield" />
                        <div className="safe_message">
                          Safe and Secure Payments.Easy returns.100% Authentic
                          products.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <div>{console.log(cartData)}Cart Data</div>
      <div>
        {cartData.map((item, index) => (
          <div>
            <button
              onClick={() => {
                removeFromCart(item.id);
              }}
            >
              Click{item.id}
            </button>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Cart;
