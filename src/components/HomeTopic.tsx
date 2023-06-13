import React from "react";

export default function HomeTopic({ topic = "" }) {
  return (
    <div className="flex justify-between border-b-[1px] border-b-[#e9e9e9] mb-6">
      <h1 className="text-[20px] text-[#333333] leading-10 font-semibold border-b-[2px] border-b-[#b8690d]">
        {topic}
      </h1>
      <a href="#" className="text-[15px] text-[#b8690d] font-semibold">
        View All
      </a>
    </div>
  );
}
