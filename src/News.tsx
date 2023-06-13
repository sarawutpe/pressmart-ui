import React from "react";
import HomeTopic from "./components/HomeTopic";

export default function News() {
  const newsList = [
    {
      thumbnail: "/Beautiful-girl-posing-professional-model-works-480x360.jpg",
      title: "Beautiful girl posing professional model",
      tag: "Hobbies, Model",
      comments: 4,
    },
    {
      thumbnail:
        "/Young-woman-running-race-with-friends-at-the-beach-480x360.jpg",
      title: "Stylish young beard man in sunglasses",
      tag: "Hobbies, Lifestyle",
      comments: 2,
    },
    {
      thumbnail: "/Smiling-young-couple-walking-on-beach-480x360.jpg",
      title: "Smiling young couple walking on beach",
      tag: "Lifestyle, Motivation",
      comments: 2,
    },
    {
      thumbnail:
        "/Stylish-young-bearded-man-in-sunglasses-and-trendy-480x360.jpg",
      title: "Young woman running race with friends",
      tag: "Model, Motivation",
      comments: 0,
    },
  ];
  return (
    <>
      <br />
      <br />
      <br />
      <div>News</div>
      <div className="w-[95%] mx-auto">
        <HomeTopic topic="Latest News" />
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-5">
          {/* Item */}
          {newsList.map((news, index) => (
            <div key={index} className="flex overflow-hidden">
              <div className="h-full group cursor-pointer overflow-hidden">
                <div className="w-full max-h-[244px] overflow-hidden relative group-hover:after:bg-[#0000004d] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:transition after:ease-in-out after:duration-500">
                  <img
                    className="scale-100 group-hover:scale-110 object-cover overflow-hidden"
                    src={news.thumbnail}
                    alt=""
                    style={{
                      transition: "transform .5s cubic-bezier(0,0,.44,1.18)",
                    }}
                  />
                </div>
                <p className="text-[13px] text-[#212121] font-semibold my-4">
                  {news.tag}
                </p>
                <h2 className="text-[20px] text-[#212121] font-semibold whitespace-nowrap text-ellipsis overflow-hidden hover:text-[#b8690d] transition-colors duration-300">
                  {news.title}
                </h2>
                {/* Author, Comments */}
                <div className="flex gap-2 my-4">
                  <div className="flex gap-1 after:content-['_\003a'] after:text-[#848484] after:mx-1">
                    <i className="icon picon-user text-[18px] text-[#848484]"></i>
                    <p className="text-[14px] text-[#212121]">By Martin Gray</p>
                  </div>
                  <div className="flex gap-1">
                    <i className="icon picon-bubble text-[18px] text-[#848484]"></i>
                    <p className="text-[14px] text-[#212121]">
                      {news.comments} Comments
                    </p>
                  </div>
                </div>
                {/* Details */}
                <div className="my-4">
                  <p className="text-[#545454] text-[14px]">
                    Nulla facilisi. Nam posuere iaculis bibendum. Nulla risus,
                    dapibus at diam nec, blandit a ultrices turpis. Nulla eget
                    sollicitudin lacus.…
                  </p>
                </div>
                {/* Read more */}
                <div className="flex items-center my-4">
                  <p className="mr-2 text-[14px] text-[#212121] font-semibold">
                    Read More
                  </p>
                  <i className="icon picon-chevron-right text-[8px] text-[#212121]"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
