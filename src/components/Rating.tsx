import React from "react";

export default function Rating({ value = 0 }) {
  return (
    <div className="relative icon overflow-hidden text-[14px] h-[50px] before:content-['\ea70\ea70\ea70\ea70\ea70'] text-[#d3ced2]">
      <div
        style={{ width: value }}
        className="absolute float-left top-0 left-0 w-full overflow-hidden before:content-['\ea70\ea70\ea70\ea70\ea70'] text-[#ff9f00]"
      ></div>
    </div>
  );
}
