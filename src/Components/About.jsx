import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { GrShieldSecurity } from "react-icons/gr";
import { CiDeliveryTruck } from "react-icons/ci";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="pt-20 px-4">
        <h1 className="text-center text-3xl font-semibold">
          About Our Company
        </h1>
        <h2 className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mt-5 text-gray-400">
          We're on a mission to provide high-quality products with exceptional
          customer service. Learn more about our journey, our team, and what
          makes us different.
        </h2>

        <div className="text-center mt-16 pt-6">
          <span className="text-3xl font-bold">Our Values</span>
        </div>

        <div className="flex flex-wrap gap-6 justify-center items-start mt-8">
          <div className="border-2 border-white rounded-2xl bg-gray-200">
            <div className="w-[300px] h-[300px] mt-2 flex flex-col p-5">
              <div className="w-12 p-2 text-center rounded-3xl bg-gray-300">
                <FaRegHeart className="text-3xl" />
              </div>
              <span className="mt-5 text-lg font-semibold">Customer First</span>
              <span className="mt-5 text-gray-400">
                We put our customers at the center of everything we do, ensuring
                their needs are met with care and attention.
              </span>
            </div>
          </div>

          <div className="border-2 border-white rounded-2xl bg-gray-200">
            <div className="w-[300px] h-[300px] mt-2 flex flex-col p-5">
              <div className="w-12 p-2 text-center rounded-3xl bg-gray-300">
                <GrShieldSecurity className="text-3xl" />
              </div>
              <span className="mt-5 text-lg font-semibold">
                Quality Assurance
              </span>
              <span className="mt-5 text-gray-400">
                We constantly strive to redefine the standard of excellence in
                everything we do.
              </span>
            </div>
          </div>

          <div className="border-2 border-white rounded-2xl bg-gray-200">
            <div className="w-[300px] h-[300px] mt-2 flex flex-col p-5">
              <div className="w-12 p-2 text-center rounded-3xl bg-gray-300">
                <CiDeliveryTruck className="text-3xl" />
              </div>
              <span className="mt-5 text-lg font-semibold">
                Reliable Service
              </span>
              <span className="mt-5 text-gray-400">
                We act with honesty and adhere to the highest standards of moral
                and ethical values.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-[200px] bg-stone-900 text-white font-semibold m-8 rounded-2xl">
        <span className="text-2xl">Ready to Experience Our Products?</span>
        <span className="mt-2">
          Join thousands of satisfied customers and discover why our products
          stand out from the rest.
        </span>
        <Link to="/">
          <div className="flex justify-center items-center mt-5">
            <button className="border-1  w-35 h-10 rounded-xl bg-black cursor-pointer hover:bg-stone-900">
              Shop Now
            </button>
          </div>
        </Link>
      </div>

      <Footer />
    </>
  );
}

export default About;
