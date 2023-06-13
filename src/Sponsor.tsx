import React from "react";

export default function Sponsor() {
  const sponsors = [
    "/Orients.png",
    "/Rosatta.png",
    "/Stratch.png",
    "/Reduax.png",
    "/Canna.png",
    "/Agritech.png",
    "/Cornel.png",
    "/Beauty.png",
  ];
  return (
    <>
      <br />
      <br />
      <br />
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6">
        {sponsors.map((sponsor, index) => (
          <a key={index} href="#" className="group">
            <img
              className="opacity-60 mx-[10px] grayscale group-hover:opacity-100 group-hover:filter-none transition duration-200"
              src={sponsor}
              width={165}
              alt=""
            />
          </a>
        ))}
      </div>
    </>
  );
}
