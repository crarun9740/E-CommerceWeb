import {
  FaShoppingBag,
  FaHeart,
  FaMapMarkerAlt,
  FaEdit,
  FaUser,
} from "react-icons/fa";
import Footer from "./Footer";
import { useState } from "react";
import { useSelector } from "react-redux";

function UserProfile() {
  const [activeTab, setActiveTab] = useState("overview");

  // ✅ Get recent orders from Redux
  const recentOrders = useSelector((state) => state.recentOrder.orders);

  const menuItems = [
    { id: "overview", label: "Account Overview", icon: FaUser },
    { id: "orders", label: "My Orders", icon: FaShoppingBag },
    { id: "wishlist", label: "My Wishlist", icon: FaHeart },
    { id: "addresses", label: "Manage Addresses", icon: FaMapMarkerAlt },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 mt-5">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white text-xl font-bold">
                A
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  Hello, Arun
                </h1>
                <p className="text-sm text-gray-600">
                  Manage your account and preferences
                </p>
              </div>
            </div>
            <button className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              <FaEdit className="w-4 h-4" />
              <span>Edit Profile</span>
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar Menu */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-4 bg-gray-50 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">
                    Account Settings
                  </h3>
                </div>
                <div className="p-2">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                          activeTab === item.id
                            ? "bg-gray-800 text-white"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-sm font-medium">
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {activeTab === "overview" && (
                <div className="space-y-6">
                  {/* Recent Orders */}
                  <div className="bg-white rounded-lg border border-gray-200">
                    <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Recent Orders
                      </h3>
                    </div>
                    <div className="divide-y divide-gray-200">
                      {recentOrders.length === 0 ? (
                        <div className="px-6 py-4 text-gray-500">
                          You have no recent orders.
                        </div>
                      ) : (
                        recentOrders.map((orderItem, index) => (
                          <div
                            key={orderItem.id || index}
                            className="px-6 py-4 flex items-center justify-between"
                          >
                            <div className="flex items-center space-x-4">
                              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                                <img
                                  src={orderItem.image}
                                  alt={orderItem.name}
                                  className="w-15 h-15 rounded-2xl text-gray-400"
                                />
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">
                                  #1ASddcrKr{orderItem.id || 123}
                                </p>
                                <p className="text-sm text-gray-600">
                                  Delivered on Mar 15, 2024
                                </p>
                                <p className="text-sm text-gray-600">
                                  ₹{orderItem.price}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "orders" && (
                <div className="bg-white rounded-lg border border-gray-200">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">
                      My Orders
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="text-center py-12">
                      <FaShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Order Management
                      </h3>
                      <p className="text-gray-600">
                        View and manage all your orders in one place
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "wishlist" && (
                <div className="bg-white rounded-lg border border-gray-200">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">
                      My Wishlist
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="text-center py-12">
                      <FaHeart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Your Wishlist
                      </h3>
                      <p className="text-gray-600">
                        Save items you love for later
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default UserProfile;
