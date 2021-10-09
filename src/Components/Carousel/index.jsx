import { Carousel } from "antd";
import React from "react";
import car1 from "../../assets/img/slide-car1.jpg";
import car2 from "../../assets/img/slide-car2.jpg";
import car3 from "../../assets/img/slide-car3.jpg";
import style from "./style.css";
import { SearchOutlined } from "@ant-design/icons";

const HomeCarousel = () => {
  return (
    <>
      <Carousel className="h-2/4 " autoplay effect="fade">
        <div>
          <img
            className="w-full relative "
            style={{ height: 600 }}
            src={car1}
            alt="car"
          />
        </div>
        {/* <div>
          <img
            className="w-full "
            style={{ height: 600 }}
            src={car2}
            alt="car"
          />
        </div>
        <div>
          <img
            className="w-full "
            style={{ height: 600 }}
            src={car3}
            alt="car"
          />
        </div> */}
      </Carousel>
      <div className="grid grid-cols-2  text-white absolute top-1/4 left-20 -translate-x-1/2 translate-y-1/2">
        <h2 className="text-white text-5xl">
          Find the perfect <i>freelance</i> services for your business
        </h2>
        <div className="col-start-1 relative mb-4">
          <SearchOutlined
            className="text-xl text-black absolute left-3 top-4 z-20 "
            style={{ color: "#9ca3af" }}
          />

          <input
            className="pl-11 h-12 w-9/12 rounded-tl rounded-bl outline-none"
            placeholder="Try &#34;buiding mobile app&#34; "
            type="text"
          />
          <button className="bg-green-500 text-white h-12 px-6 rounded-tr rounded-br">
            Search
          </button>
        </div>
        <div className=" col-start-1">
          <ul className="flex">
            <span className="font-semibold">Popular: </span>
            <li className=" mx-4 px-2 font-semibold border-2 rounded-xl hover:bg-white hover:text-black cursor-pointer ">Website Design</li>
            <li className=" mx-4 px-2 font-semibold border-2 rounded-xl hover:bg-white hover:text-black cursor-pointer ">WordPress</li>
            <li className=" mx-4 px-2 font-semibold border-2 rounded-xl hover:bg-white hover:text-black cursor-pointer ">Logo Design</li>
            <li className=" mx-4 px-2 font-semibold border-2 rounded-xl hover:bg-white hover:text-black cursor-pointer ">Dropshipping</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomeCarousel;
