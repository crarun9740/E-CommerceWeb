import { FaShoppingBag, FaMapMarkerAlt, FaEdit, FaUser } from "react-icons/fa";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../actions/getOrder";
import { addOrder } from "../store/recentOrdersSlice";

function UserProfile() {
  const [activeTab, setActiveTab] = useState("overview");
  const { orders } = useSelector((state) => state.recentOrderSlice);
  const dispatch = useDispatch();

  // Address State
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const getOrderHandler = async () => {
      try {
        const orderItem = await getOrders();
        if (Array.isArray(orderItem)) {
          orderItem.forEach((item) => {
            if (item && item.id) dispatch(addOrder(item));
          });
        }
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    getOrderHandler();
  }, [dispatch]);

  const menuItems = [
    { id: "overview", label: "Account Overview", icon: FaUser },
    { id: "orders", label: "My Orders", icon: FaShoppingBag },
    { id: "addresses", label: "Manage Addresses", icon: FaMapMarkerAlt },
  ];

  const handleAddClick = () => setIsAdding(true);
  const handleSaveAddress = () => {
    if (newAddress.trim()) {
      setAddresses([...addresses, newAddress.trim()]);
      setNewAddress("");
      setIsAdding(false);
    }
  };

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
                  {/* User Details */}
                  <div className="bg-white rounded-lg border border-gray-200">
                    <div className="px-6 py-4 border-b border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900">
                        User Details
                      </h3>
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 text-2xl font-bold">
                          A
                        </div>
                        <div className="space-y-1">
                          <p className="text-lg font-medium text-gray-900">
                            Arun Ramesh Chavan
                          </p>
                          <p className="text-sm text-gray-600">
                            Email: arun@gmail.com
                          </p>
                          <p className="text-sm text-gray-600">
                            Phone: +91 9876543210
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Orders */}
                  <div className="bg-white rounded-lg border border-gray-200">
                    <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Recent Orders
                      </h3>
                    </div>
                    <div className="divide-y divide-gray-200">
                      {orders.length === 0 ? (
                        <div className="px-6 py-4 text-gray-500">
                          You have no recent orders.
                        </div>
                      ) : (
                        orders.slice(0, 10).map((orderItem, index) => (
                          <div
                            key={orderItem.id || index}
                            className="px-6 py-4 flex items-center justify-between"
                          >
                            <div className="flex items-center space-x-4">
                              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                                <img
                                  src={orderItem.image || "/placeholder.png"}
                                  alt={orderItem.name || "Order"}
                                  className="w-full h-full object-cover rounded-2xl"
                                />
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">
                                  #1ASddcrKr{orderItem.id || 123}
                                </p>
                                <p className="text-sm text-gray-600">
                                  Delivered on{" "}
                                  {orderItem.created_at
                                    ? orderItem.created_at.split("T")[0]
                                    : "N/A"}
                                </p>
                                <p className="text-sm text-gray-600">
                                  ₹{orderItem.price || 0}
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

              {/* Orders Tab */}
              {activeTab === "orders" && (
                <div className="bg-white rounded-lg border border-gray-200">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">
                      My Orders
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {orders.length === 0 ? (
                      <div className="px-6 py-4 text-gray-500">
                        You have no orders.
                      </div>
                    ) : (
                      orders.map((orderItem, index) => (
                        <div
                          key={orderItem.id || index}
                          className="px-6 py-4 flex items-center justify-between"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                              <img
                                src={orderItem.image || "/placeholder.png"}
                                alt={orderItem.name || "Order"}
                                className="w-full h-full object-cover rounded-2xl"
                              />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">
                                #1ASddcrKr{orderItem.id || 123}
                              </p>
                              <p className="text-sm text-gray-600">
                                Delivered on{" "}
                                {orderItem.created_at
                                  ? orderItem.created_at.split("T")[0]
                                  : "N/A"}
                              </p>
                              <p className="text-sm text-gray-600">
                                ₹{orderItem.price || 0}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {/* Addresses Tab */}
              {activeTab === "addresses" && (
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Manage Addresses
                  </h3>

                  {/* Address List */}
                  {addresses.length === 0 ? (
                    <p className="text-gray-500 mt-2 text-sm">
                      No addresses added yet.
                    </p>
                  ) : (
                    <ul className="list-disc pl-5 mt-2 text-gray-700">
                      {addresses.map((addr, index) => (
                        <li key={index}>{addr}</li>
                      ))}
                    </ul>
                  )}

                  {/* Add Address */}
                  {!isAdding && (
                    <button
                      onClick={handleAddClick}
                      className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-700 transition"
                    >
                      Add Address
                    </button>
                  )}

                  {isAdding && (
                    <div className="mt-4 flex gap-2">
                      <input
                        type="text"
                        value={newAddress}
                        onChange={(e) => setNewAddress(e.target.value)}
                        placeholder="Enter new address"
                        className="flex-1 border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      <button
                        onClick={handleSaveAddress}
                        className="px-3 py-2 bg-gray-900 text-white rounded hover:bg-gray-600 transition cursor-pointer"
                      >
                        Save
                      </button>
                    </div>
                  )}
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
