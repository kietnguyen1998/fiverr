import React, { useState } from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
const Proposition = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="container flex justify-center">
      <div className="w-1/2 pr-40">
        <h2 className="text-3xl" style={{ color: "#404145" }}>
          A whole world of freelance talent at your fingertips
        </h2>
        <ul>
          <li>
            <h5 className="text-lg">
              <CheckCircleOutlined
                className="-mt-3  pr-5 w-6 h-6 leading-none"
                style={{ color: "rgb(122, 125, 133)" }}
              />
              The best for every budget
            </h5>
            <p className="text-lg" style={{ color: "#62646a" }}>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </li>
          <li>
            <h5 className="text-lg">
              <CheckCircleOutlined
                className="-mt-2  pr-5 w-6 h-6 leading-none"
                style={{ color: "rgb(122, 125, 133)" }}
              />
              Quality work done quickly
            </h5>
            <p className="text-lg" style={{ color: "#62646a" }}>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
          </li>
          <li>
            <h5 className="text-lg">
              <CheckCircleOutlined
                className="-mt-2 pr-5 w-6 h-6 leading-none"
                style={{ color: "rgb(122, 125, 133)" }}
              />
              Protected payments, every time
            </h5>
            <p className="text-lg" style={{ color: "#62646a" }}>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
          </li>
          <li>
            <h5 className="text-lg">
              <CheckCircleOutlined
                className="-mt-2  pr-5 w-6 h-6 leading-none"
                style={{ color: "rgb(122, 125, 133)" }}
              />
              24/7 support
            </h5>
            <p className="text-lg" style={{ color: "#62646a" }}>
              Questions? Our round-the-clock support team is available to help
              anytime, anywhere.
            </p>
          </li>
        </ul>
      </div>
      <div className="w-1/2">
        <img className="w-full" src="https://picsum.photos/500" alt="" />
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <Player
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        </Modal>
      </div>
    </div>
  );
};

export default Proposition;
