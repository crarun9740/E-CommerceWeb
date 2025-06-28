import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="mt-15 flex flex-col overflow-hidden gap-8 items-center justify-center">
      <h1 className="text-3xl font-bold">Payment Successful</h1>

      <div className="w-[400px] h-[300px]">
        <img
          src="/assets/payment-2.gif"
          alt="Payment Successful"
          className="w-full h-full"
        />
      </div>
      <Link
        to="/"
        className="text-xl border-1 border-gray-300 bg-black text-white p-3 rounded-2xl hover:bg-gray-600 transition active:border-2"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
