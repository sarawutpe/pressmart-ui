import React from "react";

export default function Header() {
  const menuItems = [
    { title: "Home", hasIcon: true },
    { title: "Shop", hasIcon: true },
    { title: "Pages", hasIcon: true },
    { title: "Blog", hasIcon: true },
    { title: "Elements", hasIcon: true },
    { title: "Buy", hasIcon: false },
  ];
  return (
    <>
      <div
        className="bg-auto bg-no-repeat bg-center w-full h-[500px]"
        style={{
          backgroundImage: `url("/home-4-slider-1.jpg")`,
          backgroundSize: "cover",
        }}
      >
        {/* Head */}
        <div className="flex flex-col w-full h-full">
          <div className="w-full">
            <div className="w-[95%] h-[90px] flex items-center m-auto">
              <div className="flex w-full md:w-5/12 justify-start">
                {/* Menu */}
                <button className="block lg:hidden">
                  <i className="icon picon-menu text-[22px] hover:text-[#fffc]"></i>
                </button>
                <ul className="hidden lg:flex">
                  {menuItems.map((menu, index) => (
                    <li
                      key={index}
                      className="mx-1 lg:mx-2 cursor-pointer group"
                    >
                      <a className="text-white mr-1 font-semibold text-[14px] lg:text-[16px] group-hover:text-[#fffc]">
                        {menu.title}
                      </a>
                      {menu.hasIcon && (
                        <i className="icon picon-chevron-down text-[8px] group-hover:text-[#fffc]"></i>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/6 justify-center">
                <img
                  className="max-w-[120px] lg:max-w-[170px] mx-3"
                  src="/logo-light.svg"
                  alt=""
                  height={200}
                />
              </div>
              <div className="flex w-full md:w-5/12 justify-end gap-1">
                {/* Icon */}
                <a href="#" className="w-[40px]">
                  <i className="icon  picon-magnifier text-[22px] text-white hover:text-[#b8690d]"></i>
                </a>
                {/* Icon */}
                <a href="#" className="w-[40px] hidden md:block">
                  <i className="icon picon-user text-[22px] text-white hover:text-[#b8690d]"></i>
                </a>
                {/* Icon Badge */}
                <a
                  href="#"
                  className="relative w-[40px] h-[22px] hidden md:block"
                >
                  <i className="icon picon-heart text-[22px] text-white hover:text-[#b8690d]"></i>
                  <div className="absolute top-[-8px] right-2 bg-[#b8690d] w-[18px] h-[18px] flex justify-center items-center rounded-full">
                    <span className="text-white text-[10px]">0</span>
                  </div>
                </a>
                {/* Icon Badge */}
                <a
                  href="#"
                  className="relative w-[40px] h-[22px] hidden md:block"
                >
                  <i className="icon picon-shuffle text-[22px] text-white hover:text-[#b8690d]"></i>
                  <div className="absolute top-[-8px] right-2 bg-[#b8690d] w-[18px] h-[18px] flex justify-center items-center rounded-full">
                    <span className="text-white text-[10px]">0</span>
                  </div>
                </a>
                {/* Icon Badge */}
                <a href="#" className="relative w-[40px] h-[22px]">
                  <i className="icon picon-basket text-[22px] text-white hover:text-[#b8690d]"></i>
                  <div className="absolute top-[-8px] right-2 bg-[#b8690d] w-[18px] h-[18px] flex justify-center items-center rounded-full">
                    <span className="text-white text-[10px]">0</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-1">
            {/* Slider */}
            <div className="w-10/12 flex items-center m-auto">
              <div className="flex w-full h-full">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col">
                    {/* Text */}
                    <p className="font-dancing-script text-[46px] font-bold">
                      Classic. Exclusive.
                    </p>
                    <p className="fontp-Poppins text-[55px] leading-[50px] font-bold">
                      MEN's STUITS
                    </p>
                    <p className="fontp-Poppins text-[28px]">UPTO 65% OFF</p>
                  </div>
                  {/* Button */}
                  <div className="flex gap-4">
                    <button className="bg-[#b8690d] py-[6px] px-[14px] text-[11px] uppercase">
                      Shop Now
                    </button>
                    <button className="border-[2px] hover:text-[#b8690d] hover:border-[#b8690d] transition py-[6px] px-[14px] text-[11px] uppercase">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
