import React from "react";

export default function NewArrival() {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="w-[95%] mx-auto">
        <div className="flex gap-5">
          {/* Item */}
          <div className="relative w-full h-full md:w-1/2 group overflow-hidden cursor-pointer">
            <img
              className="scale-110 group-hover:scale-100 object-cover"
              src="/home-4-banner-4.jpg"
              alt=""
              style={{
                transition: "transform .5s cubic-bezier(0,0,.44,1.18)",
              }}
            />
            <div className="absolute top-0 flex flex-col justify-center h-full p-8">
              <p className="text-[18px] font-medium">New Arrivals</p>
              <p className="text-[35px] font-bold">Men's Fashion</p>
              <p className="text-[16px]">Up to 70% Off</p>
              <div className="flex items-center my-4">
                <p className="mr-2 text-[14px] font-semibold">Shop Now</p>
                <i className="icon picon-chevron-right text-[8px]"></i>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="relative w-1/2 hidden md:block h-full group overflow-hidden cursor-pointer ">
            <img
              className="scale-110 group-hover:scale-100 object-cover"
              src="/home-4-banner-5.jpg"
              alt=""
              style={{
                transition: "transform .5s cubic-bezier(0,0,.44,1.18)",
              }}
            />
            <div className="absolute top-0 flex flex-col justify-center h-full p-8">
              <p className="text-[18px] font-medium">New Arrivals</p>
              <p className="text-[35px] font-bold">Men's Fashion</p>
              <p className="text-[16px]">Up to 70% Off</p>
              <div className="flex items-center my-4">
                <p className="mr-2 text-[14px] font-semibold">Shop Now</p>
                <i className="icon picon-chevron-right text-[8px]"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
