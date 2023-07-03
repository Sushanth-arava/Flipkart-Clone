import React from "react";
import "./CategoryBanner.css";
import { Link } from "react-router-dom";
const CategoryBanner = ({ ImgSrc, Title, Brand, Deal }) => {
  return (
    <div>
      <div className="catBanner" style={{ width: "232px" }}>
        <Link
          to={"#"}
          className="catBan_link"
          style={{ textDecoration: "none" }}
        >
          <div style={{ height: "200px" }}>
            <div
              className="catBan_image"
              style={{ height: "200px", width: "200px" }}
            >
              <img src={ImgSrc} alt="" className="catBan-img" />
            </div>
          </div>
          <div className="catBan_Title">{Title}</div>

          <div className="catBan_brands">{Deal}</div>
          <div className="catBan_deal">{Brand}</div>
        </Link>
      </div>
    </div>

    /* <div className="CategoryBanner">
      { <img src={ImgSrc} alt="" className="CategoryBanner-img" />
      <p className="CategoryBanner-title">
        {Title.length < 25 ? Title : Title.slice(0, 25) + "..."}
      </p>
      <p className="CategoryBanner-Deal">{Deal}</p>
      <p className="CategoryBanner-Brands">{Brand}</p> }*/
  );
};

export default CategoryBanner;
