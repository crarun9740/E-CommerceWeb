import { CheckCircle, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../store/recentOrdersSlice";
import { clearCart } from "../store/cartSlice";
import { useEffect } from "react";

export default function Success() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartSlice.cart);

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;
    dispatch(addOrder(cart));
    dispatch(clearCart());
  };

  useEffect(() => {
    handlePlaceOrder();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <div className="p-8 text-center space-y-6">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <div className="absolute inset-0 w-20 h-20 bg-green-200 rounded-full animate-ping opacity-20"></div>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">
              Payment Successful!
            </h1>
            <p className="text-gray-600">
              Thank you for your purchase. Your order has been confirmed and
              will be processed shortly.
            </p>
          </div>

          <div className="w-full max-w-xs mx-auto">
            <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src="/assets/payment-2.gif"
                alt="Payment Successful Animation"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Order Number:</span>
              <span className="font-medium text-gray-900">
                1ASddcrKr{cart[0]?.id || 12345}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Payment Method:</span>
              <span className="font-medium text-gray-900">.... 4242</span>
            </div>
          </div>

          <div className="space-y-3 pt-4 flex justify-center">
            <Link to="/products">
              <button className="border-1 cursor-pointer flex items-center gap-5 justify-center border-gray-600 bg-white text-black p-3 rounded-2xl hover:bg-gray-100 transition active:font-semibold">
                Continue Shopping
                <ShoppingBag />
              </button>
            </Link>
          </div>

          <p className="text-xs text-gray-500 pt-4">
            A confirmation email has been sent to your registered email address.
          </p>
        </div>
      </div>
    </div>
  );
}
