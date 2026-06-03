import React from "react";
import latestArrival from "../assets/latestArrivals.avif";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:h-130 border border-gray-400 ">
        {/* left side hero */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10">
          <div className="text-[#414141]">
            <div className="flex items-center gap-2">
              <p className="w-8 h-0.5 bg-black md:w-11"></p>
              <p className="font-medium text-sm  md:text-base uppercase">
                Our Bestsellers
              </p>
            </div>

            <div className="text-3xl lg:text-5xl leading-relaxed font-climate-crisis bg-[url(https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-centert bg-clip-text text-transparent">
              Latest Arrivals
            </div>

            <div className="flex items-center gap-2">
              <p className="font-medium text-sm  md:text-base uppercase">
                Shop Now
              </p>
              <p className="w-8 h-0.5 bg-black md:w-11"></p>
            </div>
          </div>
        </div>

        {/* Right side hero */}
        <div className="sm:w-1/2">
          <img
            className="w-ful h-full object-cover "
            src={latestArrival}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
