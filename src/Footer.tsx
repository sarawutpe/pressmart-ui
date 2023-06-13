import React from "react";

export default function Footer() {
  const informations = [
    "About Us",
    "Store Location",
    "Contact Us",
    "Shipping & Delivery",
    "Latest News",
    "Our Sitemap",
  ];

  const ourServices = [
    "Privacy Policy",
    "Terms of Sale",
    "Customer Service",
    "Delivery Information",
    "Payments",
    "Saved Cards",
  ];

  const myAccounts = [
    "Privacy Policy",
    "Terms of Sale",
    "Customer Service",
    "Delivery Information",
    "Payments",
    "Saved Cards",
  ];

  return (
    <>
      <footer>
        <br />
        <br />
        <br />
        <div className="w-[95%] mx-auto">
          {/* Footer */}
          <div className="flex flex-col md:flex-row mb-4 gap-4">
            <div className="w-full md:w-1/4 mx-[10px]">
              <img
                className="max-w-[170px] mb-4"
                src="/logo.svg"
                alt=""
                height={200}
              />
              <p className="my-3 text-[14px] text-[#545454]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. luctus
                nec ullamcorper mattis.
              </p>
              <div className="flex mb-4">
                <i className="icon picon-home text-[16px] text-[#545454] mr-[14px]"></i>
                <p className="text-[14px] text-[#545454]">
                  115 Eighth Avenue North, New York City
                </p>
              </div>
              <div className="flex mb-4">
                <i className="icon picon-phone text-[16px] text-[#545454] mr-[14px]"></i>
                <p className="text-[14px] text-[#545454]">1-661-395-1234</p>
              </div>
              <div className="flex mb-4">
                <i className="icon picon-printer text-[16px] text-[#545454] mr-[14px]"></i>
                <p className="text-[14px] text-[#545454]">1-661-395-1234</p>
              </div>
              <div className="flex mb-4">
                <i className="icon picon-envelope text-[16px] text-[#545454] mr-[14px]"></i>
                <a
                  href="#"
                  className="text-[14px] text-[#545454] font-normal hover:text-[#b8690d]"
                >
                  support@pressmart.com
                </a>
              </div>
              <div className="flex mb-4">
                <i className="icon picon-clock text-[16px] text-[#545454] mr-[14px]"></i>
                <p className="text-[14px] text-[#545454]">
                  Mon - Fri / 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/4 mx-[10px]">
              <div className="flex justify-between">
                <h3 className="text-[18px] text-[#212121] font-semibold mb-5">
                  Information
                </h3>
                <i className="visible md:invisible icon picon-chevron-right text-[16px] text-[#212121] mx-4"></i>
              </div>
              <ul className="hidden md:block">
                {informations.map((information, index) => (
                  <li key={index} className="mb-4">
                    <a
                      href="#"
                      className="text-[14px] text-[#212121] font-normal hover:text-[#b8690d]"
                    >
                      {information}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/4 mx-[10px]">
              <div className="flex justify-between">
                <h3 className="text-[18px] text-[#212121] font-semibold mb-5">
                  Our Service
                </h3>
                <i className="visible md:invisible icon picon-chevron-right text-[16px] text-[#212121] mx-4"></i>
              </div>
              <ul className="hidden md:block">
                {ourServices.map((information, index) => (
                  <li key={index} className="mb-4">
                    <a
                      href="#"
                      className="text-[14px] text-[#212121] font-normal hover:text-[#b8690d]"
                    >
                      {information}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/4 mx-[10px]">
              <div className="flex justify-between">
                <h3 className="text-[18px] text-[#212121] font-semibold mb-5">
                  My Account
                </h3>
                <i className="visible md:invisible icon picon-chevron-right text-[16px] text-[#212121] mx-4"></i>
              </div>
              <ul className="hidden md:block">
                {myAccounts.map((information, index) => (
                  <li key={index} className="mb-4">
                    <a
                      href="#"
                      className="text-[14px] text-[#212121] font-normal hover:text-[#b8690d]"
                    >
                      {information}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t-[1px] border-t-[#e9e9e9] py-8">
            <div className="flex  justify-between">
              <p className="text-[#333333] text-[14px]">
                © 2023 presslayouts.com. All Rights Reserved.
              </p>
              <div className="">
                <img src="/payments-method.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
