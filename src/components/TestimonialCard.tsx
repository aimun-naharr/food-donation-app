import { assets } from "@/lib/assets";
import React from "react";

export default function TestimonialCard({
  name,
  testimonial,
  image,
}: {
  name: string;
  testimonial: string;
  image: string;
}) {
  return (
    <div className=" relative shadow-xl hover:shadow-2xl transition-shadow px-6 py-6 w-full md:w-[240px] rounded-md flex-shrink-0 ">
      <div className="absolute -top-4 right-4 size-12 rounded-full overflow-hidden">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div>
        <h2 className="font-bold text-seaGreen">{name}</h2>
        <p className="text-xs leading-relaxed text-zinc-500">{testimonial}</p>
      </div>
    </div>
  );
}
