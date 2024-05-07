import React from "react";
import Person1 from "../assets/person1.avif";
import { ArrowDown } from "react-feather";
import { cn } from "@/lib/utils";

type THeroHangingCardProp = {
  className: string;
  imageUrl: string;
  linkText: string;
  iconBgClass?: string;
};

const Tick = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="30"
      height="30"
      viewBox="0 0 50 50"
      fill="#ffffff"
    >
      <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"></path>
    </svg>
  );
};
export default function HeroHangingCard({
  className,
  imageUrl,
  linkText,
  iconBgClass,
}: THeroHangingCardProp) {
  return (
    <div
      className={cn(
        "w-[150px] md:w-[250px] bg-primary-foreground  absolute  rounded-md shadow-2xl ",
        className
      )}
    >
      <div className="relative flex flex-col gap-6 md:gap-8 px-2 py-4 md:px-4 md:py-6">
        <div className="w-full rounded-md aspect-square overflow-hidden ">
          <img src={imageUrl} alt="" className="object-cover h-full w-full" />
          <div
            className={cn(
              "absolute text-primary-foreground top-[65%] md:top-[68%] left-[50%] -translate-x-[50%] bg-seaGreen flex items-center justify-center size-[30px] md:size-[50px]  rounded-full p-2 md:p-0",
              iconBgClass
            )}
          >
            <Tick />
            {/* <ArrowDown /> */}
          </div>
        </div>
        <div>
          <p className="text-primary font-bold text-xs md:text-sm text-center">
            {linkText}
          </p>
        </div>
      </div>
    </div>
  );
}
