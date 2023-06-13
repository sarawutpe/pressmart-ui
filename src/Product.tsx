import React from "react";
import HomeTopic from "./components/HomeTopic";
import Tippy from "@tippyjs/react";
import Rating from "./components/Rating";

interface ColorOption {
  name: string;
  color: string;
}

interface Product {
  categoryName: string;
  title: string;
  image: string;
  imageOnHover: string;
  rate: number;
  price: string;
  discount: string;
  discountDesc: string;
  featured: string;
  colorOptions: ColorOption[];
  sizeOptions: string[];
}

export default function Product() {
  const menProducts: Product[] = [
    {
      categoryName: "Jackets",
      title: "Brown Solid Biker Jacket",
      image: "/Men-Brown-Solid-Biker-Jacket-430x502.jpg",
      imageOnHover: "/Men-Brown-Solid-Biker-Jacket-2-430x502.jpg",
      rate: 100,
      price: "$110.00-$120.00",
      discount: "",
      discountDesc: "",
      featured: "",
      colorOptions: [
        {
          name: "Black",
          color: "#000",
        },
      ],
      sizeOptions: ["L", "M", "S"],
    },
    {
      categoryName: "T-Shirts",
      title: "Men Navy Printed Round Neck T-shirt",
      image: "/Men-Navy-Printed-Round-Neck-T-shirt-430x502.jpg",
      imageOnHover: "/Men-Navy-Printed-Round-Neck-T-shirt-2-430x502.jpg",
      rate: 80,
      price: "$50.00",
      discount: "",
      discountDesc: "",
      featured: "",
      colorOptions: [],
      sizeOptions: ["L", "M", "S"],
    },
    {
      categoryName: "Casual Shoes, Sneakers",
      title: "Men Brown Solid Mid-Top Boots",
      image: "/Men-Brown-Solid-Mid-Top-Boots-2-430x502.jpg",
      imageOnHover: "/Men-Brown-Solid-Mid-Top-Boots-430x502.jpg",
      rate: 100,
      price: "$150.00",
      discount: "",
      discountDesc: "",
      featured: "",
      colorOptions: [],
      sizeOptions: [],
    },
    {
      categoryName: "Belts",
      title: "Brown Solid Leather Belt",
      image: "/Men-Brown-Solid-Leather-Belt-430x502.jpg",
      imageOnHover: "/Men-Brown-Solid-Leather-Belt-2-430x502.jpg",
      rate: 60,
      price: "$15.00",
      discount: "$18.00",
      discountDesc: "17% OFF",
      featured: "",
      colorOptions: [],
      sizeOptions: ["7", "8", "9"],
    },
    {
      categoryName: "Formal Shoes, Sandals & Floaters",
      title: "Brown Solid Synthetic Leather Boots",
      image: "/Men-Brown-Solid-Synthetic-Leather-Boots-430x502.jpg",
      imageOnHover: "/Men-Brown-Solid-Synthetic-Leather-Boots-2-430x502.jpg",
      rate: 100,
      price: "$50.00",
      discount: "",
      discountDesc: "",
      featured: "",
      colorOptions: [],
      sizeOptions: ["7", "8", "9"],
    },
  ];

  const womenProducts: Product[] = [
    {
      categoryName: "Handbags",
      title: "Brown Self Design Shoulder Bag",
      image: "/Brown-Self-Design-Shoulder-Bag-430x502.jpg",
      imageOnHover: "/Brown-Self-Design-Shoulder-Bag-2-430x502.jpg",
      rate: 60,
      price: "$78.00",
      discount: "",
      discountDesc: "",
      featured: "FEATURED",
      colorOptions: [],
      sizeOptions: [],
    },
    {
      categoryName: "Dresses & Tops",
      title: "White & Peach-Coloured Printed Blouson Top",
      image: "/Women-Petite-Olive-Green-Solid-Top-430x502.jpg",
      imageOnHover: "/Women-Petite-Olive-Green-Solid-Top-2-430x502.jpg",
      rate: 100,
      price: "$49.00",
      discount: "",
      discountDesc: "",
      featured: "",
      colorOptions: [],
      sizeOptions: [],
    },
    {
      categoryName: "Dresses & Tops",
      title: "White & Peach-Coloured Printed Blouson Top",
      image: "/Women-Off-White-Peach-Coloured-Printed-Blouson-Top-430x502.jpg",
      imageOnHover:
        "/Women-Off-White-Peach-Coloured-Printed-Blouson-Top-2-430x502.jpg",
      rate: 20,
      price: "$85.00",
      discount: "",
      discountDesc: "",
      featured: "",
      colorOptions: [],
      sizeOptions: [],
    },
    {
      categoryName: "Jeans & Jeggings",
      title: "Blue Skinny Fit Stretchable Jeans",
      image: "/Women-Blue-Skinny-Fit-Stretchable-Jeans-430x502.jpg",
      imageOnHover: "/Women-Blue-Skinny-Fit-Stretchable-Jeans-2-430x502.jpg",
      rate: 0,
      price: "$34.00",
      discount: "",
      discountDesc: "",
      featured: "",
      colorOptions: [],
      sizeOptions: ["30", "32", "34"],
    },
    {
      categoryName: "Jackets & Coats",
      title: "Women Brown Solid Sweatshirt",
      image: "/Women-Yellow-Solid-Top-430x502.jpg",
      imageOnHover: "/Women-Yellow-Solid-Top-2-430x502.jpg",
      rate: 100,
      price: "$179.00",
      discount: "",
      discountDesc: "",
      featured: "",
      colorOptions: [],
      sizeOptions: [],
    },
  ];
  return (
    <>
      <br />
      <br />
      <br />
      <div className="w-[95%] mx-auto">
        {/* Men Fashion */}
        <HomeTopic topic="Latest Products" />
        <div className="flex gap-1">
          <div className="hidden lg:flex w-1/4 mt-[10px]">
            <img src="/home-4-banner-6.jpg" alt="" className="max-h-[370px]" />
          </div>
          <div className="flex flex-1 justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
              {menProducts.map((product, index) => (
                <div
                  key={index}
                  className="p-[10px] group cursor-pointer hover:shadow-[0_0_10px_rgba(0,0,0,0.15)] transition"
                >
                  <div className="relative overflow-hidden">
                    {product.discount ? (
                      <div className="absolute top-4 py-[3px] px-[10px] bg-[#388E3C]">
                        <p className="text-[10px]">{product.discount}</p>
                      </div>
                    ) : product.featured ? (
                      <div className="absolute top-4 py-[3px] px-[10px] bg-[#ff9f00]">
                        <p className="text-[10px]">{product.featured}</p>
                      </div>
                    ) : (
                      <></>
                    )}
                    <Tippy content="Add to wishlist" placement="left">
                      <i className="cursor-pointer absolute right-0 p-2 icon picon-heart text-[22px] text-[#212121] hover:text-[#b8690d]"></i>
                    </Tippy>
                    <div className="mb-2">
                      <img className="" src={product.image} />
                      <img
                        className="absolute top-0 left-0 transition-all duration-[_400ms_] ease-linear delay-0 invisible opacity-0  group-hover:visible group-hover:opacity-100"
                        src={product.imageOnHover}
                      />
                    </div>
                    {/* Slide Quick View */}
                    <div className="absolute w-full bg-[#b8690d] text-center p-2 overflow-hidden bottom-0 translate-y-10 transition group-hover:translate-y-0">
                      <a href="#" className="text-[14px] text-white ">
                        Quick View
                      </a>
                    </div>
                  </div>
                  <div className="mb-2 overflow-hidden">
                    <p className="text-[12px] text-[#545454]">
                      {product.categoryName}
                    </p>
                    <h2 className="text-[#212121] hover:text-[#b8690d] whitespace-nowrap text-ellipsis overflow-hidden">
                      {product.title}
                    </h2>
                  </div>
                  {/* Rating */}
                  <div className="flex">
                    <Rating value={product.rate} />
                    <span className="text-[14px] text-[#545454] mx-1">
                      {product.rate > 0 ? "(1)" : "(0)"}
                    </span>
                  </div>
                  {/* Price */}
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <p className="text-[16px] text-[#212121] font-semibold">
                        {product.price}
                      </p>
                      {product.discount && (
                        <p className="text-[14px] text-[#212121] font-normal line-through">
                          {product.price}
                        </p>
                      )}
                    </div>
                    <Tippy content="Select option" placement="left">
                      <div className="">
                        <div className="w-[38px] h-[38px] rounded-full flex justify-center items-center bg-[#e1e1e1] group-hover:bg-[#b8690d] transition duration-200">
                          <i className="icon picon-layers text-[18px] text-[#545454] group-hover:text-white transition duration-200"></i>
                        </div>
                      </div>
                    </Tippy>
                  </div>
                  {/* Option colors */}
                  <div className="opacity-0 group-hover:opacity-100">
                    {product.colorOptions.map((option, index) => (
                      <div key={index} className="flex gap-2 my-1">
                        <Tippy content={option.name} placement="top">
                          <div
                            style={{ background: option.color }}
                            className="w-[28px] h-[28px] border-none bg-white rounded-full flex justify-center items-center"
                          >
                            <div className="w-[20px] h-[20px] bg-black rounded-full"></div>
                          </div>
                        </Tippy>
                        <Tippy content="Brown" placement="top">
                          <div className="w-[28px] h-[28px] border border-[#b8690d] bg-white rounded-full flex justify-center items-center">
                            <div className="w-[20px] h-[20px] bg-[#af621c] rounded-full"></div>
                          </div>
                        </Tippy>
                      </div>
                    ))}
                  </div>
                  {/* Option sizes */}
                  <div className="flex gap-2 my-1 opacity-0 group-hover:opacity-100">
                    {product.sizeOptions.map((option, index) => (
                      <div
                        key={index}
                        className="w-[26px] h-[26px] text-[14px] font-normal text-[#545454] border border-[#b8690d] rounded-full flex justify-center items-center"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Women Fashion */}
        <HomeTopic topic="Latest Products" />
        <div className="flex flex-row-reverse gap-1">
          <div className="hidden lg:flex w-1/4 mt-[10px]">
            <img src="/home-4-banner-7.jpg" alt="" className="max-h-[370px]" />
          </div>
          <div className="flex flex-1 justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
              {womenProducts.map((product, index) => (
                <div
                  key={index}
                  className="p-[10px] group cursor-pointer hover:shadow-[0_0_10px_rgba(0,0,0,0.15)] transition"
                >
                  <div className="relative overflow-hidden">
                    {product.discount ? (
                      <div className="absolute top-4 py-[3px] px-[10px] bg-[#388E3C]">
                        <p className="text-[10px]">{product.discount}</p>
                      </div>
                    ) : product.featured ? (
                      <div className="absolute top-4 py-[3px] px-[10px] bg-[#ff9f00]">
                        <p className="text-[10px]">{product.featured}</p>
                      </div>
                    ) : (
                      <></>
                    )}
                    <Tippy content="Add to wishlist" placement="left">
                      <i className="cursor-pointer absolute right-0 p-2 icon picon-heart text-[22px] text-[#212121] hover:text-[#b8690d]"></i>
                    </Tippy>
                    <div className="mb-2">
                      <img className="" src={product.image} />
                      <img
                        className="absolute top-0 left-0 transition-all duration-[_400ms_] ease-linear delay-0 invisible opacity-0  group-hover:visible group-hover:opacity-100"
                        src={product.imageOnHover}
                      />
                    </div>
                    {/* Slide Quick View */}
                    <div className="absolute w-full bg-[#b8690d] text-center p-2 overflow-hidden bottom-0 translate-y-10 transition group-hover:translate-y-0">
                      <a href="#" className="text-[14px] text-white ">
                        Quick View
                      </a>
                    </div>
                  </div>
                  <div className="mb-2 overflow-hidden">
                    <p className="text-[12px] text-[#545454]">
                      {product.categoryName}
                    </p>
                    <h2 className="text-[#212121] hover:text-[#b8690d] whitespace-nowrap text-ellipsis overflow-hidden">
                      {product.title}
                    </h2>
                  </div>
                  {/* Rating */}
                  <div className="flex">
                    <Rating value={product.rate} />
                    <span className="text-[14px] text-[#545454] mx-1">
                      {product.rate > 0 ? "(1)" : "(0)"}
                    </span>
                  </div>
                  {/* Price */}
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <p className="text-[16px] text-[#212121] font-semibold">
                        {product.price}
                      </p>
                      {product.discount && (
                        <p className="text-[14px] text-[#212121] font-normal line-through">
                          {product.price}
                        </p>
                      )}
                    </div>
                    <Tippy content="Select option" placement="left">
                      <div className="">
                        <div className="w-[38px] h-[38px] rounded-full flex justify-center items-center bg-[#e1e1e1] group-hover:bg-[#b8690d] transition duration-200">
                          <i className="icon picon-layers text-[18px] text-[#545454] group-hover:text-white transition duration-200"></i>
                        </div>
                      </div>
                    </Tippy>
                  </div>
                  {/* Option colors */}
                  <div className="opacity-0 group-hover:opacity-100">
                    {product.colorOptions.map((option, index) => (
                      <div key={index} className="flex gap-2 my-1">
                        <Tippy content={option.name} placement="top">
                          <div
                            style={{ background: option.color }}
                            className="w-[28px] h-[28px] border-none bg-white rounded-full flex justify-center items-center"
                          >
                            <div className="w-[20px] h-[20px] bg-black rounded-full"></div>
                          </div>
                        </Tippy>
                        <Tippy content="Brown" placement="top">
                          <div className="w-[28px] h-[28px] border border-[#b8690d] bg-white rounded-full flex justify-center items-center">
                            <div className="w-[20px] h-[20px] bg-[#af621c] rounded-full"></div>
                          </div>
                        </Tippy>
                      </div>
                    ))}
                  </div>
                  {/* Option sizes */}
                  <div className="flex gap-2 my-1 opacity-0 group-hover:opacity-100">
                    {product.sizeOptions.map((option, index) => (
                      <div
                        key={index}
                        className="w-[26px] h-[26px] text-[14px] font-normal text-[#545454] border border-[#b8690d] rounded-full flex justify-center items-center"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
