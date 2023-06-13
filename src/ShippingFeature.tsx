import React from "react";

export default function ShippingFeature() {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="w-[95%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Item */}
          <div className="flex">
            <i className="icon picon-truck text-[48px] text-[#B8690D] mr-4"></i>
            <div className="flex flex-col">
              <p className="text-[16px] text-[#333333] font-semibold mb-4">
                Free Shipping & Retuns
              </p>
              <p className="text-[12px] text-[#545454]">
                Free Shipping On All Orders
              </p>
              <p className="text-[12px] text-[#545454]">Over $99</p>
            </div>
          </div>
          {/* Item */}
          <div className="flex">
            <i className="icon picon-save-money text-[48px] text-[#B8690D] mr-4"></i>
            <div className="flex flex-col">
              <p className="text-[16px] text-[#333333] font-semibold mb-4">
                We ensure secure payment
              </p>
              <p className="text-[12px] text-[#545454]">
                We ensure secure payment
              </p>
            </div>
          </div>
          {/* Item */}
          <div className="flex">
            <i className="icon picon-handshake text-[48px] text-[#B8690D] mr-4"></i>
            <div className="flex flex-col">
              <p className="text-[16px] text-[#333333] font-semibold mb-4">
                100% Money Back Guarantee
              </p>
              <p className="text-[12px] text-[#545454]">
                100% Money Back Guarantee
              </p>
            </div>
          </div>
          {/* Item */}
          <div className="flex">
            <i className="icon picon-bubbles text-[48px] text-[#B8690D] mr-4"></i>
            <div className="flex flex-col">
              <p className="text-[16px] text-[#333333] font-semibold mb-4">
                24/7 Customers Support
              </p>
              <p className="text-[12px] text-[#545454]">
                24/7 Dedicated Support
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}
