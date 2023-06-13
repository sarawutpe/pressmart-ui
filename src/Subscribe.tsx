import React from "react";

export default function Subscribe() {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="bg-[#b8690d] py-[3rem]">
        <div className="w-[95%] mx-auto">
          <div className="flex justify-center lg:justify-between items-center flex-wrap">
            <div className="mb-4">
              <h4 className="text-[20px] text-center lg:text-left font-semibold text-white mb-1">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-white text-center lg:text-left  mb-1">
                Subscribe today and get special offers, coupons and news.
              </p>
            </div>
            <div className="relative mt-4">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="w-[250px] md:w-[450px] h-[50px] text-[14px] text-[#545454] py-[6px] pl-[16px] pr-[12px] rounded-full outline-none"
              />
              <button
                type="button"
                className="h-[42px] absolute top-0 right-0 text-white leading-4 bg-[#333333] hover:text-[#f1f1f1] hover:bg-[#212121] rounded-full m-1 py-[12px] px-[15px]"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
