import React from "react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="p-20 flex justify-around bg-gray-700 text-white ">
      <div className="flex flex-col">
        <span className="text-gray-400">Social</span>
        <div className="flex gap-4 justify-centre items-center text-2xl mt-5 cursor-pointer">
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaXTwitter />
          </span>
          <span>
            <FaFacebookSquare />
          </span>
          <span>
            <FaYoutube />
          </span>
        </div>
      </div>
      <div className="flex flex-col ">
        <span className="text-gray-400">About</span>
        <div className="flex flex-col">
          <a href="" className="hover:underline">
            Contact Us
          </a>
          <a href="" className="hover:underline ">
            About Us
          </a>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-gray-400">Help</span>
        <div className="flex flex-col">
          <a href="" className="hover:underline">
            Payments
          </a>
          <a href="" className="hover:underline">
            Shipping
          </a>
          <a href="" className="hover:underline">
            Cancellation
          </a>
        </div>
      </div>
      <div className="flex flex-col ">
        <span className="text-gray-400">Consumer Policy</span>
        <div className="flex flex-col ">
          <a href="" className="hover:underline">
            Cancellation & Returns
          </a>
          <a href="" className="hover:underline">
            Terms of Use
          </a>
          <a href="" className="hover:underline">
            Security
          </a>
          <a href="" className="hover:underline">
            Privacy
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
