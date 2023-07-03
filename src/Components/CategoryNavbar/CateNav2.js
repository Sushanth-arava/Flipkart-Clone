import React from "react";
import elecT from "./elecT";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "rsuite";
import { FaAngleDown } from "react-icons/fa";
import "./CateNav.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
const CateNav2 = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cateNo, setCateNo] = useState(0);

  const handleMouseOver = (n) => {
    setIsHovering(true);
    setCateNo(n);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <div className="Category_navbar">
        <div className="nav_cont">
          <div className="hstack  d-flex flex-row justify-content-between my-3 ml-2 mr-2">
            <div
              className="nav_item _E e_hover"
              onMouseOver={() => handleMouseOver(1)}
              onMouseOut={handleMouseOut}
            >
              Electronics
              <div className="icon_more">
                <FaAngleDown />
              </div>
            </div>
            <div
              className="nav_item "
              onMouseOver={() => handleMouseOver(2)}
              onMouseOut={handleMouseOut}
            >
              Tv & Appliances
              <div className="icon_more">
                <FaAngleDown />
              </div>
            </div>
            <div
              className="nav_item"
              onMouseOver={() => handleMouseOver(3)}
              onMouseOut={handleMouseOut}
            >
              Men
              <div className="icon_more">
                <FaAngleDown />
              </div>
            </div>
            <div
              className="nav_item"
              onMouseOver={() => handleMouseOver(4)}
              onMouseOut={handleMouseOut}
            >
              Women
              <div className="icon_more">
                <FaAngleDown />
              </div>
            </div>
            <div
              className="nav_item"
              onMouseOver={() => handleMouseOver(5)}
              onMouseOut={handleMouseOut}
            >
              Baby & Kids
              <div className="icon_more">
                <FaAngleDown />
              </div>
            </div>
            <div
              className="nav_item"
              onMouseOver={() => handleMouseOver(6)}
              onMouseOut={handleMouseOut}
            >
              Home & Furniture
              <div className="icon_more">
                <FaAngleDown />
              </div>
            </div>
            <div
              className="nav_item"
              onMouseOver={() => handleMouseOver(7)}
              onMouseOut={handleMouseOut}
            >
              Sports,Books & More
              <div className="icon_more">
                <FaAngleDown />
              </div>
            </div>
            <Link
              to={"#"}
              className="nav_item"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              Flights
            </Link>
            <Link
              to={"/cHover"}
              className="nav_item"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              Offer Zone
            </Link>
          </div>
        </div>
        {/* {isHovering && cateNo === 1 ? ( */}
        <div className="hover_menu_cont d-block">
          <div className="elec_hover">
            <div className="colum">
              <Link className="_link SubCat head">Mobiles </Link>
              <Link className="_link">Mi</Link>
              <Link className="_link">Realme</Link>
              <Link className="_link">Samsung</Link>
              <Link className="_link">Infinix</Link>
              <Link className="_link">Oppo</Link>
              <Link className="_link">Apple</Link>
              <Link className="_link">Vivo</Link>
              <Link className="_link">Honor</Link>
              <Link className="_link">Asus</Link>
              <Link className="_link">Poco X2</Link>
              <Link className="_link">Realme Narzo 10</Link>
              <Link className="_link">Infinix Hot 9</Link>
              <Link className="_link">IQOO 3</Link>
              <Link className="_link">Iphone SE</Link>
              <Link className="_link">Motrola razr</Link>
              <Link className="_link">Realme Narzo 10A</Link>
              <Link className="_link">Motrola g8 Power lite</Link>
            </div>
            <div className="colum">
              <Link className="_link SubCat head">Mobile Accessories </Link>
              <Link className="_link">Mobile Cases</Link>
              <Link className="_link">Headphones & Headsets</Link>
              <Link className="_link">Power Banks</Link>
              <Link className="_link">Screenguards</Link>
              <Link className="_link">Memory Cards</Link>
              <Link className="_link">Smart Headphones</Link>
              <Link className="_link">Mobile Cables</Link>
              <Link className="_link">Mobile Chargers</Link>
              <Link className="_link">Mobile Holders</Link>
              <Link className="_link SubCat head">Smart Wearable Tech</Link>
              <Link className="_link">Smart Watches</Link>
              <Link className="_link">Smart Glasses(VR)</Link>
              <Link className="_link">Smart Bands</Link>
              <Link className="_link Subcat head">Health Care Appliances</Link>
              <Link className="_link">Bp Monitors</Link>
              <Link className="_link">Weighing Scale</Link>
            </div>

            <div className="colum">
              <Link className="_link SubCat head">Laptops </Link>
              <Link className="_link ">Gaming Laptops</Link>
              <Link className="_link SubCat head">Desktop PCs</Link>
              <Link className="_link SubCat head">Gaming Accessories</Link>
              <Link className="_link SubCat head">Computer Accessories</Link>
              <Link className="_link">External Hardisks</Link>
              <Link className="_link">Pendrives</Link>
              <Link className="_link">Laptops Skins & Decals</Link>
              <Link className="_link">Laptop Bags</Link>
              <Link className="_link">Mouse</Link>
              <Link className="_link SubCat head">Computer Peripherals</Link>
              <Link className="_link">Printers & Ink Catriges</Link>
              <Link className="_link">Monitors</Link>

              <Link className="_link Subcat head">Tablets</Link>
              <Link className="_link">Apple iPads</Link>
            </div>
            <div className="colum">
              <Link className="_link d">Televisions </Link>
              <Link className="_link SubCat head">Speakers</Link>
              <Link className="_link">Home Audio Speakers</Link>
              <Link className="_link">Home Theaters</Link>
              <Link className="_link">Soundbars</Link>
              <Link className="_link">Bluetooth Speakers</Link>
              <Link className="_link">DTH Setup Box</Link>
              <Link className="_link SubCat head">Mobile Cables</Link>
              <Link className="_link">Google Nest</Link>
              <Link className="_link SubCat head">Camera</Link>

              <Link className="_link">DSLR & Mirrorless</Link>
              <Link className="_link">Compact & Bridge Cameras</Link>
              <Link className="_link">Sports & Action</Link>
              <Link className="_link Subcat head">Camera Accessories</Link>
              <Link className="_link">Lens</Link>
              <Link className="_link">Tripods</Link>
              <Link className="_link Subcat head">Network Components</Link>
              <Link className="_link">Routers</Link>
            </div>
            <div className="colum">
              <Link className="_link SubCat head">Mobile Accessories </Link>
              <Link className="_link">Mobile Cases</Link>
              <Link className="_link">Headphones & Headsets</Link>
              <Link className="_link">Power Banks</Link>
              <Link className="_link">Screenguards</Link>
              <Link className="_link">Memory Cards</Link>
              <Link className="_link">Smart Headphones</Link>
              <Link className="_link">Mobile Cables</Link>
              <Link className="_link">Mobile Chargers</Link>
              <Link className="_link">Mobile Holders</Link>
              <Link className="_link SubCat head">Smart Wearable Tech</Link>
              <Link className="_link">Smart Watches</Link>
              <Link className="_link">Smart Glasses(VR)</Link>
              <Link className="_link">Smart Bands</Link>
              <Link className="_link Subcat head">Health Care Appliances</Link>
              <Link className="_link">Bp Monitors</Link>
              <Link className="_link">Weighing Scale</Link>
            </div>
          </div>
        </div>
        : ( "" )
      </div>
    </div>
  );
};

export default CateNav2;
