import React, { useState } from "react";
import {
  MapPin,
  CreditCard,
  Smartphone,
  Wallet,
  Truck,
  Shield,
  CheckCircle,
} from "lucide-react";
import Footer from "./Footer";

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [onlineOption, setOnlineOption] = useState("");

  const paymentIcons = {
    "Credit Card": <CreditCard className="h-4 w-4" />,
    "Debit Card": <CreditCard className="h-4 w-4" />,
    PhonePe: <Smartphone className="h-4 w-4" />,
    "Google Pay": <Wallet className="h-4 w-4" />,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-10">
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Checkout</h1>
          <p className="text-gray-600">
            Complete your order in just a few steps
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="shadow-lg border-0 bg-white/80 backdrop-blur-sm rounded-lg">
            <div className="p-6 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3 text-xl font-semibold mb-2">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <MapPin className="h-5 w-5 text-black" />
                </div>
                Shipping Address
              </div>
              <p className="text-gray-600 text-sm">
                Where should we deliver your order?
              </p>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Enter first name"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Enter last name"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1  focus:ring-gray-300 focus:border-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1  focus:ring-gray-300 focus:border-gray-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="street"
                  className="block text-sm font-medium text-gray-700"
                >
                  Street Address
                </label>
                <input
                  id="street"
                  type="text"
                  placeholder="House number, street name"
                  className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1  focus:ring-gray-300 focus:border-gray-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    placeholder="Enter city"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1  focus:ring-gray-300 focus:border-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State
                  </label>
                  <input
                    id="state"
                    type="text"
                    placeholder="Enter state"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1  focus:ring-gray-300 focus:border-gray-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="zip"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ZIP Code
                  </label>
                  <input
                    id="zip"
                    type="text"
                    placeholder="577001"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1  focus:ring-gray-300 focus:border-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <input
                    id="country"
                    type="text"
                    placeholder="India"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1  focus:ring-gray-300 focus:border-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="shadow-lg border-0 bg-white/80 backdrop-blur-sm rounded-lg">
            <div className="p-6 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3 text-xl font-semibold mb-2">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Truck className="h-5 w-5 text-black" />
                </div>
                Payment Method
              </div>
              <p className="text-gray-600 text-sm">
                Choose your preferred payment option
              </p>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    id="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => {
                      setPaymentMethod("cod");
                      setOnlineOption("");
                    }}
                    className="w-4 h-4 text-black focus:ring-gray-500"
                  />
                  <label
                    htmlFor="cod"
                    className="flex items-center gap-3 cursor-pointer flex-1"
                  >
                    <div>
                      <div className="font-medium">Cash on Delivery</div>
                      <div className="text-sm text-gray-500">
                        Pay when you receive
                      </div>
                    </div>
                  </label>
                </div>

                <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="online"
                    id="online"
                    checked={paymentMethod === "online"}
                    onChange={() => {
                      setPaymentMethod("online");
                      setOnlineOption("");
                    }}
                    className="w-4 h-4 text-black focus:ring-blue-500"
                  />
                  <label
                    htmlFor="online"
                    className="flex items-center gap-3 cursor-pointer flex-1"
                  >
                    <div>
                      <div className="font-medium">Online Payment</div>
                      <div className="text-sm text-gray-500">
                        Instant & secure
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {paymentMethod === "online" && (
                <div className="border border-blue-200 bg-blue-50/50 rounded-lg">
                  <div className="p-4">
                    <h4 className="font-medium mb-3 text-gray-900">
                      Select Payment Option
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        "Credit Card",
                        "Debit Card",
                        "PhonePe",
                        "Google Pay",
                      ].map((option) => (
                        <div
                          key={option}
                          className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="onlineOption"
                            value={option}
                            id={option}
                            checked={onlineOption === option}
                            onChange={() => setOnlineOption(option)}
                            className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                          />
                          <label
                            htmlFor={option}
                            className="flex items-center gap-3 cursor-pointer flex-1"
                          >
                            <div className="p-1.5 bg-gray-100 rounded">
                              {paymentIcons[option]}
                            </div>
                            <span className="font-medium">{option}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-200">
                {paymentMethod === "cod" && (
                  <button className="w-full bg-black hover:bg-gray-600 cursor-pointer text-white py-3 px-4 rounded-md text-lg font-medium shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
                    <Truck className="h-5 w-5" />
                    Place Order (COD)
                  </button>
                )}

                {paymentMethod === "online" && onlineOption && (
                  <button className="w-full cursor-pointer text-white bg-black hover:bg-gray-700 py-3 px-4 rounded-md text-lg font-medium shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
                    <Shield className="h-5 w-5" />
                    Pay Securely with {onlineOption}
                  </button>
                )}

                {paymentMethod === "online" && !onlineOption && (
                  <button
                    disabled
                    className="w-full bg-gray-300 text-gray-500 py-3 px-4 rounded-md text-lg font-medium cursor-not-allowed"
                  >
                    Select Payment Option
                  </button>
                )}
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 pt-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span>Your payment information is secure and encrypted</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500 flex-wrap">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-600" />
              <span>256-bit SSL</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Secure Checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-green-600" />
              <span>Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
