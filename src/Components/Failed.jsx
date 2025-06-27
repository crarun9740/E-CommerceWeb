import { Link } from "react-router-dom";

export default function Failed() {
  return (
    <div className="h-screen w-screen flex flex-col gap-[2rem] items-center justify-center">
      <h1 className="text-3xl font-bold">Payment UnSuccessfull</h1>
      <Link to={"/checkout"} className="text-xl">
        Check out again
      </Link>
    </div>
  );
}
