import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden gap-[2rem] items-center justify-center">
      <h1 className="text-3xl font-bold">Payment Successfull</h1>
      <Link to={"/"} className="text-xl">
        Continue Shopping
      </Link>
    </div>
  );
}
