import React from "react";
import { Link } from "react-router-dom";
const Bestof_item = (props) => {
  const { data } = props;

  var lol = Object.values(data);
  console.log(lol);
  return (
    <div>
      <div className="bo_product_item ">
        <Link
          to={`/productsList/${data.ProdCatId}`}
          className="bo_product_link"
          style={{ textDecoration: "none" }}
        >
          <div className="bo_product_image_cont" style={{ height: "200px" }}>
            <div
              className="bo_product_image"
              style={{ height: "200px", width: "200px" }}
            >
              <img src={data.ImgSrc} alt="prod_img" className="bo_p_image" />
            </div>
          </div>
          <div className="bo_product_name">{data.CategoryName}</div>
          <div className="bo_product_deal">{data.deal}</div>
          <div className="bo_product_brand">{data.Brands}</div>
        </Link>
      </div>
    </div>
  );
};

export default Bestof_item;
