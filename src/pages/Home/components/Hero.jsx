import React from "react";

const Hero = () => {
  return (
    <div className="sm:flex justify-between items-center sm:space-y-0 space-y-4">
      <div className="space-y-1 lg:space-y-3">
        <p className=" text-3xl lg:text-5xl text-white">
          Hello,{" "}
          <p className="bg-gradient-to-r from-[#9ee575] via-[#b5df50] to-[#bdb714] inline-block text-transparent bg-clip-text">
            Brooklyn Simmons
          </p>
        </p>
        <div className="text-white text-xl lg:text-2xl font-light">
          <p>
            Welcome to <p className="text-[#269e28] inline">Spot Trading</p>
          </p>
        </div>
      </div>
      <button className="bg-[#2bb42a] p-2 lg:p-23 rounded-md text-white font-medium w-auto">
        Start Trading
      </button>
    </div>
  );
};

export default Hero;
