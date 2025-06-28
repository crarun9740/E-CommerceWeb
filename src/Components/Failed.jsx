import { Link } from "react-router-dom";
import { AlertCircle, ArrowLeft, RefreshCw } from "lucide-react";

export default function PaymentFailed() {
  return (
    <div className="mt-5 bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm rounded-lg">
          <div className="p-6 text-center space-y-6">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
              <AlertCircle className="w-10 h-10 text-white" />
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Payment Unsuccessful
              </h1>
              <p className="text-gray-600 text-sm md:text-base">
                We couldn't process your payment. Please try again or contact
                support if the issue persists.
              </p>
            </div>

            <div className="py-4">
              <div className="w-full max-w-[280px] mx-auto bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl p-6">
                <img
                  src="/assets/payment-failed.png"
                  alt="Payment Failed Illustration"
                  className="w-full h-auto object-contain opacity-80"
                />
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <Link
                to="/checkout"
                className="w-full inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 h-12 text-base font-medium rounded-md px-4 py-2 no-underline"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Link>

              <Link
                to="/"
                className="w-full inline-flex items-center justify-center border border-gray-200 hover:bg-gray-50 h-11 text-gray-700 bg-transparent rounded-md px-4 py-2 transition-colors duration-200 no-underline"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
