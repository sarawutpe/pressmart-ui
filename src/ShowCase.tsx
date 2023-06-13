import React from "react";

export default function ShowCase() {
  return (
    <>
      <br />
      <div className="w-[95%] mx-auto">
        <div className="flex gap-4">
          {/* Item */}
          <div className="w-full md:w-1/2 lg:w-2/6">
            <div className="relative w-full h-full group overflow-hidden cursor-pointer">
              <img
                className="scale-110 group-hover:scale-100 object-cover"
                src="/home-4-banner-1.jpg"
                alt=""
                style={{
                  transition: "transform .5s cubic-bezier(0,0,.44,1.18)",
                }}
              />
              <div className="absolute top-0 flex flex-col justify-center h-full p-8">
                <p className="text-[18px] font-medium">Formal Look</p>
                <p className="text-[35px] font-bold">Footwear</p>
                <p className="text-[16px]">Min. 35-70% Off</p>
                <div className="flex items-center my-4">
                  <p className="mr-2 text-[14px] font-semibold">Shop Now</p>
                  <i className="icon picon-chevron-right text-[8px]"></i>
                </div>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="w-full md:w-1/2 lg:w-2/6 hidden md:flex">
            <div className="relative w-full h-full group overflow-hidden cursor-pointer">
              <img
                className="scale-110 group-hover:scale-100 object-cover"
                style={{
                  transition: "transform .5s cubic-bezier(0,0,.44,1.18)",
                }}
                src="/home-4-banner-2.jpg"
                alt=""
              />
              <div className="absolute top-0 flex flex-col justify-center w-full text-center h-full p-8">
                <p className="text-[18px] font-medium">Man's Fashion</p>
                <p className="text-[35px] font-bold">Accessories</p>
                <p className="text-[16px]">Flat 25% Off</p>
                <div className="flex items-center justify-center my-4">
                  <p className="mr-2 text-[14px] font-semibold">Shop Now</p>
                  <i className="icon picon-chevron-right text-[8px]"></i>
                </div>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="w-2/6 hidden lg:flex">
            <div className="relative w-full h-full group overflow-hidden cursor-pointer">
              <img
                className="scale-110 group-hover:scale-100 object-cover"
                src="/home-4-banner-3.jpg"
                alt=""
                style={{
                  transition: "transform .5s cubic-bezier(0,0,.44,1.18)",
                }}
              />
              <div className="absolute top-0 flex flex-col justify-center h-full p-8">
                <p className="text-[18px] font-medium">Best Digital</p>
                <p className="text-[35px] font-bold">HD Camera</p>
                <p className="text-[16px]">Starting $299</p>
                <div className="flex items-center my-4">
                  <p className="mr-2 text-[14px] font-semibold">Shop Now</p>
                  <i className="icon picon-chevron-right text-[8px]"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
