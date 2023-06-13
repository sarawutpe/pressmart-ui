import React from "react";
import HomeTopic from "./components/HomeTopic";

export default function Category() {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="w-[95%] mx-auto">
        {/* Categories */}
        <HomeTopic topic="Featured Categories" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
          {/* Item */}
          <div className="relative group overflow-hidden cursor-pointer hover:shadow-[0_0_10px_rgba(0,0,0,0.15)] transition">
            <div>
              <img
                className="group-hover:scale-110 object-cover transition"
                style={{
                  transition: "transform .5s cubic-bezier(0,0,.44,1.18)",
                }}
                src="/Men-Category-430x502.jpg"
                alt=""
              />
            </div>
            <div className="absolute bottom-6 cursor-pointer w-full">
              <div className="flex flex-col text-center bg-[#fffffff2] group-hover:bg-[#ffffff] p-4">
                <p className="text-[#212121] font-semibold group-hover:text-[#b8690d]">
                  Men
                </p>
                <p className="text-[12px] text-[#545454] font-normal">
                  7 Products
                </p>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="relative group overflow-hidden cursor-pointer hover:shadow-[0_0_10px_rgba(0,0,0,0.15)] transition">
            <div>
              <img
                className="group-hover:scale-110 object-cover transition"
                style={{
                  transition: "transform .5s cubic-bezier(0,0,.44,1.18)",
                }}
                src="/Women-Category-430x502.jpg"
                alt=""
              />
            </div>
            <div className="absolute bottom-6 cursor-pointer w-full">
              <div className="flex flex-col text-center bg-[#fffffff2] group-hover:bg-[#ffffff] p-4">
                <p className="text-[#212121] font-semibold group-hover:text-[#b8690d]">
                  Men
                </p>
                <p className="text-[12px] text-[#545454] font-normal">
                  7 Products
                </p>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="relative group overflow-hidden cursor-pointer hover:shadow-[0_0_10px_rgba(0,0,0,0.15)] transition">
            <div>
              <img
                className="group-hover:scale-110 object-cover transition"
                style={{
                  transition: "transform .5s cubic-bezier(0,0,.44,1.18)",
                }}
                src="/Watch-Category-430x502.jpg"
                alt=""
              />
            </div>
            <div className="absolute bottom-6 cursor-pointer w-full">
              <div className="flex flex-col text-center bg-[#fffffff2] group-hover:bg-[#ffffff] p-4">
                <p className="text-[#212121] font-semibold group-hover:text-[#b8690d]">
                  Men
                </p>
                <p className="text-[12px] text-[#545454] font-normal">
                  7 Products
                </p>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="relative group overflow-hidden cursor-pointer hover:shadow-[0_0_10px_rgba(0,0,0,0.15)] transition">
            <div>
              <img
                className="group-hover:scale-110 object-cover transition"
                style={{
                  transition: "transform .5s cubic-bezier(0,0,.44,1.18)",
                }}
                src="/Bags-Category-430x502.jpg"
                alt=""
              />
            </div>
            <div className="absolute bottom-6 cursor-pointer w-full">
              <div className="flex flex-col text-center bg-[#fffffff2] group-hover:bg-[#ffffff] p-4">
                <p className="text-[#212121] font-semibold group-hover:text-[#b8690d]">
                  Men
                </p>
                <p className="text-[12px] text-[#545454] font-normal">
                  7 Products
                </p>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="relative group overflow-hidden cursor-pointer hover:shadow-[0_0_10px_rgba(0,0,0,0.15)] transition">
            <div>
              <img
                className="group-hover:scale-110 object-cover transition"
                style={{
                  transition: "transform .5s cubic-bezier(0,0,.44,1.18)",
                }}
                src="/Shoes-Category-430x502.jpg"
                alt=""
              />
            </div>
            <div className="absolute bottom-6 cursor-pointer w-full">
              <div className="flex flex-col text-center bg-[#fffffff2] group-hover:bg-[#ffffff] p-4">
                <p className="text-[#212121] font-semibold group-hover:text-[#b8690d]">
                  Men
                </p>
                <p className="text-[12px] text-[#545454] font-normal">
                  7 Products
                </p>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="relative group overflow-hidden cursor-pointer hover:shadow-[0_0_10px_rgba(0,0,0,0.15)] transition">
            <div>
              <img
                className="group-hover:scale-110 object-cover transition"
                style={{
                  transition: "transform .5s cubic-bezier(0,0,.44,1.18)",
                }}
                src="/Accessories-Category-430x502.jpg"
                alt=""
              />
            </div>
            <div className="absolute bottom-6 cursor-pointer w-full">
              <div className="flex flex-col text-center bg-[#fffffff2] group-hover:bg-[#ffffff] p-4">
                <p className="text-[#212121] font-semibold group-hover:text-[#b8690d]">
                  Men
                </p>
                <p className="text-[12px] text-[#545454] font-normal">
                  7 Products
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
