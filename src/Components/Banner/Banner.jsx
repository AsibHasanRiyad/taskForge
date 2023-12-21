import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#FF7594] via-[#FF797B] to-[#FF7C65] rounded-md ">
        <div className=" grid grid-cols-1 lg:grid-cols-2 items-center px-5 gap-5 lg:px-20 py-16">
          <div className=" ">
            <img
              className=" w-full md:w-1/2 lg:w-3/4"
              src="https://i.ibb.co/TPY25Dp/Pngtree-business-and-work-planning-schedule-7516386-1.png"
              alt=""
            />
          </div>
          <div className=" text-white space-y-3 md:space-y-6 ">
            <h1 className=" text-xl md:text-5xl font-semibold">
              Welcome to <span className=" text-[#2d2122]">Task</span>Forge!
            </h1>
            <p className=" text-base md:text-2xl">
              Streamline tasks effortlessly with our intuitive task management
              platform!
            </p>
            <button className=" px-4 py-3  text-base md:text-xl font-bold text-white rounded-lg border-2 shadow-2xl shadow-red-500 glass hover:bg-white hover:text-[#FF7594] transition-colors duration-600 transform ">
              <Link to={"/login"}>Let&apos;s Explore</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
