import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import CateNav from "./Components/CategoryNavbar/CateNav";
import Header from "./Components/Header/Header";
import Bestof from "../src/Pages/Bestof/Bestof";
import FinalPage from "./Pages/FinalPage";
import Footer from "./Components/Footer/Footer";
import ProductsList from "./Pages/ProductsList/ProductsList";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import LoginModel from "./Components/LoginModel/LoginModel";

import CheckoutForm from "./Pages/Checkout/CheckoutForm";
import CateNav2 from "./Components/CategoryNavbar/CateNav2";

const AllRoutes = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bestof/" element={<Bestof />} />
        <Route path="/productsList/:id" element={<ProductsList />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/final" element={<FinalPage />} />
        <Route path="/lg" element={<LoginModel />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default AllRoutes;
