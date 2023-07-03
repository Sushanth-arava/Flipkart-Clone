import React from "react";
import Header from "../../Components/Header/Header";
import electronics from "../../Assets/Data/CategoryCorouselData/electronics.json";
import BFT from "../../Assets/Data/CategoryCorouselData/BFT.json";
import Top_nav from "../../Components/Top_Nav/Top_nav";
import BannerCorousel from "../../Components/BannerCorousel/BannerCorousel";
import CateNav from "../../Components/CategoryNavbar/CateNav";
import CategoryCarousel from "../../Components/CategoryCorousel/CategoryCarousel";
import "./Home.css";
import Footer from "../../Components/Footer/Footer";
function Home() {
  return (
    <div>
      <div className="Home">
        <Top_nav />
        <BannerCorousel />
        <div className="col-sm-12">
          <div className="Home-ProductCarousel">
            <div className="c position-relative">
              <CategoryCarousel
                BgImg={
                  "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
                }
                Title={"Best of Electronics"}
                Data={electronics}
                category="Electronics"
              />
            </div>
            <div className="c position-relative">
              <CategoryCarousel
                BgImg={
                  "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
                }
                Title={"Beauty, Food, Toys & more"}
                Data={BFT}
                category="bft"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
