
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import sampleVideo from "../animations/v6.mp4"; // Update the path to your video file

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <div className="relative text-white">
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
      {/* Overlay for better content visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Footer content */}
      <div className="relative bg-black/40 min-h-[400px]  ">
        <div className="container grid md:grid-cols-3 pb-20 pt-5 ">
          {/* Company details */}
          <div className="py-8 px-4 ">
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive bg-black bg-opacity-40 rounded-lg"
            >
              Surprise Hub
            </a>
            <p className="pt-4">
              Unwrap the joy of giving with Surprise Hub - where every gift tells a story.
            </p>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Address
              </h1>
              <div>
                <p className="mb-3">Coimbatore, Tamil Nadu</p>
                <p>+91 1234567890</p>

                {/* Social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#" aria-label="Instagram">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="#" aria-label="Facebook">
                    <FaFacebook className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
