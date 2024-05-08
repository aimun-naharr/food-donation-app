import { assets } from "@/lib/assets";
import React from "react";

export default function TestimonialCard() {
  return (
    <div className="relative shadow-xl hover:shadow-2xl transition-shadow px-6 py-6 w-[220px] rounded-md flex-shrink-0 ">
      <div className="absolute -top-4 right-4 size-12 rounded-full overflow-hidden">
        <img
          src={assets.Person1}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h2 className="font-bold text-seaGreen">John Doe</h2>
        <p className="text-xs leading-relaxed text-zinc-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
          perferendis doloremque vel neque est
        </p>
      </div>
    </div>
  );
}
