
import React from "react";
import { FaGift } from "react-icons/fa6";
import { FaGrinHearts } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";
import sampleVideo from "../animations/v6.mp4"; // Update the path to your video file
import Lottie from 'lottie-react';
import animationData from '../animations/ani2.json'; // Update the path to your Lottie animation file

const Banner = () => {
  return (
    <>
      <span id="about"></span>
      <div className="relative">
        {/* Video background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={sampleVideo}
          title="Background Video"
        >
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Content */}
        <div className="relative min-h-[550px] flex justify-center items-center py-10 px-10 sm:py-0">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Lottie Animation section */}
              <div data-aos="zoom-in">
                <div className="max-w-full w-full h-[500px] flex justify-center items-center mx-auto">
                  <Lottie animationData={animationData} loop={true} style={{ width: '100%', height: '100%' }}/>
                </div>
              </div>
              {/* Text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-4xl sm:text-4xl font-bold font-cursive text-white shadow-lg p-2 bg-black bg-opacity-40 rounded-lg"
                >
                  Premium Gifts!
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-3xl text-white font-semibold tracking-wide leading-8 shadow-md p-2 bg-black bg-opacity-40 rounded-lg"
                >
                  Yesterday's the past, tomorrow's the future, but today is a gift. That's why it's called the present.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-3">
                      <FaGift className="text-2xl h-12 w-12 shadow-md p-3 rounded-full bg-red-100" />
                      <span className="text-2xl text-white">Birthday Gifts</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-3"
                    >
                      <FaGrinHearts className="text-2xl h-12 w-12 shadow-md p-3 rounded-full bg-orange-100" />
                      <span className="text-2xl text-white">Anniversary Gifts</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <FaHandHoldingHeart className="text-4xl h-12 w-12 shadow-md p-3 rounded-full bg-yellow-100" />
                      <span className="text-2xl text-white">Wedding Gifts</span>
                    </div>
                  </div>
                  {/* Optional: Add any additional content here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
