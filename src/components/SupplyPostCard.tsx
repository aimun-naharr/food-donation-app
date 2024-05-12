import React from "react";
import { ArrowRight } from "react-feather";
import { useNavigate } from "react-router-dom";

type TSupplyPost = {
  image: string;
  name: string;
  category: string;
  quantity: number;
  _id: string;
};

export default function SupplyPostCard({
  image,
  name,
  category,
  quantity,
  _id,
}: TSupplyPost) {
  const navigate = useNavigate();
  const handleViewDetails = () => {
    navigate(`/items/${_id}`);
  };
  return (
    <div className="bg-primary-foreground w-full shadow-xl px-4 py-6 rounded-md relative">
      <button
        className="group absolute bottom-0 border border-zinc-100  size-10 right-0 rounded-br-lg text-primary flex items-center justify-center shadow-2xl z-[3] overflow-hidden"
        onClick={handleViewDetails}
      >
        <div className="relative  w-full h-full flex items-center justify-center">
          <ArrowRight
            size={16}
            className="z-[2]  relative group-hover:text-primary-foreground transition-color"
          />
          <div className="absolute bg-primary z-[1] size-[50px] rounded-full translate-y-[100%] group-hover:translate-y-0 group-hover:rounded-none transition-all duration-500"></div>
        </div>
        {/* <div></div> */}
      </button>
      <div className="rounded-xl overflow-hidden h-[180px]">
        <img src={image} alt="" className="object-cover h-full w-full" />
      </div>
      <div className="mt-2">
        <p className="text-primary text-xs  font-medium">{category}</p>
      </div>
      <div className="mt-2">
        <h3 className="font-bold text-xs md:text-sm">{name}</h3>
        <p className="text-zinc-400 text-xs mt-1">{quantity}</p>
      </div>
    </div>
  );
}
