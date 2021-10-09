import React from "react";

const MarketPlace = () => {
  return (
    <div className="container  ">
      <h2 className="text-3xl my-20" >Explore the marketplace</h2>
      <div>
        <ul className="grid grid-cols-5 text-center">
          <li className="col-span-1">
            <a href="#" className="py-20">
              <img
                className=" w-1/4 ml-24"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt="Graphics & Design"
              />
              <p className="h-4">Graphics & Design</p>
            </a>
          </li>

          <li>
            <a href="#">
              <img
                className="w-1/4 ml-24"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt="Digital Marketing"
              />
              <p>Digital Marketing</p>
            </a>
          </li>

          <li>
            <a href="#">
              <img
                className="w-1/4 ml-24"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt="Writing & Translation"
              />
              <p> Writing & Translation</p>
            </a>
          </li>

          <li>
            <a href="#">
              <img
                className="w-1/4 ml-24"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt="Video & Animation"
              />
              <p>Video & Animation</p>
            </a>
          </li>

          <li>
            <a href="#">
              <img
                className="w-1/4 ml-24"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt="Music & Audio"
              />
              <p>Music & Audio</p>
            </a>
          </li>

          <li>
            <a href="#">
              <img
                className="w-1/4 ml-24"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt="Programming & Tech"
              />
              <p>Programming & Tech</p>
            </a>
          </li>

          <li>
            <a href="#">
              <img
                className="w-1/4 ml-24"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt="Business"
              />
              <p>Business</p>
            </a>
          </li>

          <li>
            <a href="#">
              <img
                className="w-1/4 ml-24"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt="Lifestyle"
              />
              <p>Lifestyle</p>
            </a>
          </li>

          <li>
            <a href="#">
              <img
                className="w-1/4 ml-24"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt="Data"
              />
              <p className="m-0 pt-4">Data</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MarketPlace;
