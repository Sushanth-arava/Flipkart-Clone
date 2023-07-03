// import React, { useEffect, useState } from "react";
// import { removeCart } from "../../Redux/Cart/CartActions";
// import { Link } from "react-router-dom";
// import "../../Pages/Cart/Cart.css";
// import { useSelector, useDispatch } from "react-redux";
// const CartItem = (data) => {
//   /*************** */
//   const cartData = useSelector((state) => state.cart);
//   const dispatch = useDispatch();
//   const removeFromCart = (id) => {
//     dispatch(removeCart(id));
//   };
//   let p = [];
//   let d = [];
//   let a = 0;
//   let b = 0;
//   let c = 0;

//   let disc = [];
//   {
//     cartData.map((item) => {
//       return (p[a++] = item.MRP), (d[b++] = item.Price);
//     });
//   }
//   const [amount, setAmount] = useState(1);
//   const [quan, setQuan] = useState("");
//   const [editQuan, setEditQuan] = useState({
//     id: "",
//     status: false,
//   });
//   var mrpArr = p.map(Number);
//   var discArr = d.map(Number);
//   for (var i = 0; i <= cartData.length; i++) {
//     disc[i] = p[i] + d[i];
//   }
//   let tDiscount = 0;
//   const totalMrp = mrpArr.reduce((a, b) => (a = a + b), 0);
//   const totalDiscount = discArr.reduce((a, b) => (a = a + b), 0);
//   const finalDiscount = totalMrp - totalDiscount;
//   if (finalDiscount < 0) {
//     tDiscount = 0 - finalDiscount;
//   } else tDiscount = finalDiscount;

//   const finalAmount = totalMrp - finalDiscount;
//   const handleClick = (text) => {
//     setAmount(text === "plus" ? amount + 1 : amount > 1 ? amount - 1 : 1);
//   };
//   /********************** */
//   return (
//     <div>
//       <div className="prod_cartleft_details-content prod1">
//         <div className="d-flex">
//           <Link to={"#"} className="cart_prod_image_link">
//             <div className="cpi">
//               <img src={data.Product_image} alt="p_img" />
//             </div>
//           </Link>
//           <div className="cart_prod_data">
//             <div className="cart_prod_title">{data.Title}</div>
//             <div className="cart_prod_type">{data.type}</div>
//             <div className="cart_prod_seller">
//               {data.Quantity}Seller:: Seller Name
//               {data.id}
//               <img
//                 src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
//                 className="flp_asr"
//                 alt="flp"
//               />
//             </div>
//             <div className="d-flex align-items-center">
//               <div className="cart_prod_mrp">₹{data.MRP}</div>
//               <div className="cart_prod_price">₹{data.Price}</div>
//               <div className="cart_prod_discount">{data.Discount}</div>
//             </div>
//             <div className="cart_prod_inst">
//               Enter pincode to see if the product is in stock
//             </div>
//           </div>
//         </div>
//         <div className="cart_prod_ops">
//           <div className="prod_add-sub">
//             <div className="prod_opr">
//               <button className="minus" onClick={() => handleClick("minus")}>
//                 -
//               </button>
//               <div className="quan">
//                 <input
//                   className="quan_input"
//                   type="number"
//                   value={amount}
//                   onChange={(e) => setAmount(e.target.value)}
//                 />
//               </div>
//               <button className="minus" onClick={() => handleClick("plus")}>
//                 +
//               </button>
//             </div>
//           </div>
//           <div className="a">
//             <div className="sfl">Save For Later</div>
//             <div className="sfl">
//               <button
//                 className="sfl_btn"
//                 onClick={() => {
//                   removeFromCart(data.id);
//                 }}
//               >
//                 Remove Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItem;
