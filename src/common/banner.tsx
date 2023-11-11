"use client";

import LinkButton from "./LinkButton";

export default function Banner() {
  return (
    <div>
      <div className="relative bg-cover bg-banner-small lg:bg-banner-large w-screen h-screen">
        <div className="font-roboto-mono text-white text-center flex flex-col ">
          <div className="w-[86vw] text-[6vh] ml-[7.6vw] mt-[7.9vh] sm:mb-[5.1vh] lg:ml-[8.3vw] lg:mt-[16.3vh] lg:mb-[5.1vh] lg:text-[5.4vh] lg:w-[39.9vw]">
            University of Toronto Machine Intelligence Student Team
          </div>
          <div className=" w-[55vw] text-[2.8vh] ml-[24.6vw] mb-[7.5vh] lg:w-[45vw] lg:text-[2.4vh] lg:ml-[5.7vw] lg:mb-[8vh]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            egestas, lorem id dapibus accumsan.
          </div>
          
          <LinkButton redirectPath="/WhatWeDo" buttonText="Join Us" ></LinkButton>
        </div>
      </div>
    </div>
  );
}
