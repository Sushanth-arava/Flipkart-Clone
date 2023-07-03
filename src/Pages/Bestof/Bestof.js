import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CateNav from "../../Components/CategoryNavbar/CateNav";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import CateNav2 from "../../Components/CategoryNavbar/CateNav2";
import Bestof_item from "../../Components/Bestof_item/Bestof_item";

import "./Bestof.css";

const Bestof = ({ CategoryProducts, AddCategory }) => {
  const { state } = useLocation();

  useEffect(() => {
    AddCategory(state);
  }, []);
  console.log(CategoryProducts);
  return (
    <div>
      <CateNav2 />
      <div className="bestof_container">
        <div className="bb col-12-12">
          <div className="bo col-md-auto">
            <div className="bo_header justify-content-center col-md-auto text-center">
              <div className="bo_head_title ">{CategoryProducts[0]?.Title}</div>
              <div className="bo_head_count">23 items</div>
            </div>
            <div className="bo_products_cont">
              <div className="bo_prod hstack d-flex gap-3 flex-wrap">
                {CategoryProducts.map((item, index) => {
                  return (
                    <div>
                      <Bestof_item data={item} key={index} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
// export default Bestof;
const mapStateToProps = (state) => {
  return {
    CategoryProducts: state.cate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    AddCategory: (value) => {
      dispatch({ type: value });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bestof);
