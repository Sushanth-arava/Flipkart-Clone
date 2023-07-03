import React from "react";
import "./BannerCorousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Corousel from "../../Assets/Data/HomeCorousel.json";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const Next = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdArrowForwardIos
        style={{ color: "black", fontSize: 25, fontWeight: 900 }}
      />
    </div>
  );
};
const Prev = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdOutlineArrowBackIosNew
        style={{ color: "black", fontSize: 25, fontWeight: 900 }}
      />
    </div>
  );
};

const BannerCorousel = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };

  return (
    <div className="col-sm">
      <div className="BannerCarousel">
        <Slider nextArrow={<Next />} prevArrow={<Prev />} {...settings}>
          {Corousel.map((item) => (
            <div key={item.id}>
              <img src={item.Imgsrc} alt="" className="BannerCarousel-Image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BannerCorousel;
