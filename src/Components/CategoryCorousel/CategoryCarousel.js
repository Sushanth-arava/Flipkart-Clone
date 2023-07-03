import "./CategoryCarousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryBanner from "../Layout/CategoryCorousel/CategoryBanner";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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

const CategoryCarousel = ({ BgImg, Title, Data, category }) => {
  const Settings = {
    dots: false,
    speed: 700,
    slidesToShow: 5,

    infinite: false,
  };

  const navigate = useNavigate();
  const dispatch = useDispatch;

  const tocate = (c) => {
    navigate("/bestof/", { state: c });
  };

  return (
    <div className="CategoryCarousel position-sticky">
      <div
        className="CategoryCarousel-left"
        style={{ background: `url(${BgImg}) no-repeat 0px bottom` }}
      >
        <p className="CategoryCarousel-title">{Title}</p>
        <button
          className="CategoryCarousel-btn"
          onClick={() => {
            tocate(category);
          }}
        >
          View All
        </button>
      </div>

      <div className="CategoryCarousel-right">
        <Slider nextArrow={<Next />} prevArrow={<Prev />} {...Settings}>
          {Data.map((item, index) => (
            <Link
              key={index}
              to={`/productsList/${item.ProdCatId}`}
              style={{ textDecoration: "none" }}
            >
              <CategoryBanner
                ImgSrc={item.ImgSrc}
                Title={item.CategoryName}
                Brand={item.Brands}
                Deal={item.deal}
              />
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CategoryCarousel;
