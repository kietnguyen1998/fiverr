import React from "react";
import HomeCarousel from "../../Components/Carousel";
import MarketPlace from "../../Components/MarketPlace";
import Service from "../../Components/ProfessionalService";
import Proposition from "../../Components/SellingProposition";

const Home = (props) => {
  return (
    <>
      <HomeCarousel />

      <div style={{ background: "#fafafa" }}>
        <ul className="flex flex-auto justify-center align-middle p-4">
          <span
            className="pt-4 text-base font-semibold"
            style={{ color: "#b5b6ba" }}
          >
            Trusted by :
          </span>

          <li className="px-10 text-2xl">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png"
              alt="facebook"
            />
          </li>
          <li className="px-10 text-2xl">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png"
              alt="google"
            />
          </li>
          <li className="px-10 text-2xl">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png"
              alt="netflix"
            />
          </li>
          <li className="px-10 text-2xl">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png"
              alt="p&g"
            />
          </li>
          <li className="px-10 text-2xl">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png"
              alt="paypal"
            />
          </li>
        </ul>
      </div>
      <Service />
      <div className="py-24" style={{ backgroundColor: "#f1fdf7" }}>
        <Proposition />
      </div>
      <MarketPlace/>
    </>
  );
};

export default Home;
