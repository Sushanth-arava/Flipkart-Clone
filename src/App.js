import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import { Provider } from "react-redux";
import Top_nav from "./Components/Top_Nav/Top_nav";
import Home from "./Pages/Home/Home";
import { store } from "./Redux/Store";
import AllRoutes from "./AllRoutes";

const App = () => {
  return (
    <div>
      {/* <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bestof/electronics" element={<Bestof_electronics />} />
      </Routes> */}
      <AllRoutes />
    </div>
  );
};
export default App;
