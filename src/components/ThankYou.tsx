import { Link } from "react-router-dom";

function ThankYou() {
  const paragraphStyle = "text-black text-xl md:text-5xl";

  return (
    <div className="flex flex-col gap-10 justify-center items-center mt-16 pb-20">
      <p className="text-green-500 text-5xl font-semibold"> Success</p>
      <img src="../../src/images/belt.png" className=" w-32"></img>
      <p className={paragraphStyle}> Thank you for your purchase</p>
      <p className={paragraphStyle}> Happy boxing!</p>
      <p className={paragraphStyle}>
        <Link to="/shop">
          <span className=" text-blue-600 cursor-pointer hover:opacity-75 transition-opacity duration-300">
            Return{" "}
          </span>
        </Link>{" "}
        to home page
      </p>
    </div>
  );
}

export default ThankYou;
