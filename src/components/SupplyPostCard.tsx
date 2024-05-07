import React from "react";

type TSupplyPost = {
  image: string;
  title: string;
  category: string;
  quantity: string;
};

export default function SupplyPostCard({
  image,
  title,
  category,
  quantity,
}: TSupplyPost) {
  return (
    <div className="bg-primary-foreground w-full shadow-xl px-4 py-6 rounded-md">
      <div className="rounded-xl overflow-hidden">
        <img src={image} alt="" />
      </div>
      <div className="mt-2">
        <p className="text-primary text-xs  font-medium">{category}</p>
      </div>
      <div className="mt-2">
        <h3 className="font-bold text-xs md:text-sm">{title}</h3>
        <p className="text-zinc-400 text-xs mt-1">{quantity}</p>
      </div>
    </div>
  );
}
