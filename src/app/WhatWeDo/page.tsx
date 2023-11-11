"use client";

import InfoCard from "./InfoCard";

export default function WhatWeDo() {
  interface wwdData {
    title: string;
    imgPath: string;
    buttonHref: string;
  }
  const array: wwdData[] = [];

  array.push(
    {
      title: "Community Events",
      imgPath: "rect1",
      buttonHref: "#",
    },
    {
      title: "Projects",
      imgPath: "rect2",
      buttonHref: "#",
    },
    {
      title: "Academic and Career Programs",
      imgPath: "rect3",
      buttonHref: "#",
    },
    {
      title: "Conference",
      imgPath: "rect4",
      buttonHref: "#",
    },
    {
      title: "deMISTIFY",
      imgPath: "rect5",
      buttonHref: "#",
    },
    {
      title: "Hack the MIST",
      imgPath: "rect6",
      buttonHref: "#",
    },
    {
      title: "International Competiton",
      imgPath: "rect7",
      buttonHref: "#",
    }
  );

  const infoCards = array.map((data) => {
    return (
      <div className="mb-[14.9vh]">
        <InfoCard
          key={data.title}
          title={data.title}
          imgPath={data.imgPath}
          buttonHref={data.buttonHref}
        ></InfoCard>
      </div>
    );
  });

  return (
    <>
      <div className="relative w-screen h-auto bg-dark-grey">
        <div className=" w-screen h-[40vh] bg-cover bg-wwd-banner"></div>
        <div className=" absolute left-[16.7vw] top-[15.7vh] text-white text-[5.2vh] font-roboto-mono">
          <div>What We Do</div>
          <div className="bg-[#00349F] w-[8.1vw] h-[6px]"></div>
        </div>
        <div className="mt-[-7.8vh] flex flex-col justify-around items-center text-white">
          {infoCards}
        </div>
      </div>

    </>
  );
}
