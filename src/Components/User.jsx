import { FaArrowRight } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import Footer from "./Footer";
import { useState } from "react";

function UserProfile() {
  return (
    <>
      <div className="flex-col md:flex md:flex-row min-h-screen">
        <div className="lg:w-1/3">
          <div className="pt-25 flex flex-col m-5 justify-around">
            <div className="flex gap-5 border border-gray-400 w-full p-5 justify-start rounded-xl">
              <div className="w-[45px] rounded-full border-2 p-2 bg-gray-300 text-2xl ml-10">
                <CiUser />
              </div>
              <div className="flex flex-col">
                <span>hello,</span>
                <span className="font-bold text-stone-900">Arun</span>
              </div>
            </div>
            <div className="">
              <div className="rounded-xl border-gray-400 border w-full mt-3">
                <div className="flex w-full justify-between items-center rounded-xl p-5 cursor-pointer border-gray-400">
                  <span className="text-lg ml-5">MY ORDERS</span>
                  <span>
                    <FaArrowRight />
                  </span>
                </div>
              </div>
              <div className="mt-2 flex flex-col border border-gray-400 w-full rounded-xl p-5">
                <span className="text-lg mt-2 cursor-pointer">
                  ACCOUNT SETTINGS
                </span>
                <span className="text-sm ml-7 mt-2 cursor-pointer font-semibold text-gray-600">
                  Manage Address
                </span>
                <span className="text-sm ml-7 mt-2 cursor-pointer font-semibold text-gray-600">
                  PAN Card Information
                </span>
                <span className="text-sm ml-7 mt-2 cursor-pointer font-semibold text-gray-600">
                  Payments
                </span>
                <span className="text-sm ml-7 mt-2 cursor-pointer font-semibold text-gray-600">
                  My Coupons
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-4/5 mb-5">
            <button className="border ml-5 w-full rounded-xl h-10 border-gray-400 cursor-pointer hover:bg-gray-100">
              Personal Settings
            </button>
            <button className="mt-3 border ml-5 w-full rounded-xl h-10 border-gray-400 cursor-pointer hover:bg-gray-900 bg-black text-white">
              Advanced Settings
            </button>
          </div>
        </div>

        <div className="md:w-2/3 bg-gray-50 p-8 mt-20">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-full p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
              <div className="bg-blue-500 rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Total Orders</h3>
                <p className="text-3xl font-bold">24</p>
                <p className="text-blue-100 text-sm">+12% from last month</p>
              </div>
              <div className="bg-green-500 rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Active Coupons</h3>
                <p className="text-3xl font-bold">8</p>
                <p className="text-green-100 text-sm">3 expiring soon</p>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Saved Addresses</h3>
                <p className="text-3xl font-bold">3</p>
                <p className="text-purple-100 text-sm">Home, Office, Other</p>
              </div>
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Wishlist Items</h3>
                <p className="text-3xl font-bold">15</p>
                <p className="text-orange-100 text-sm">2 items on sale</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Recent Activity
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800">
                      Order 999u45 delivered
                    </p>
                    <p className="text-sm text-gray-600">2 hours ago</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Delivered
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800">
                      New coupon added to wallet
                    </p>
                    <p className="text-sm text-gray-600">1 day ago</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    New
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default UserProfile;
