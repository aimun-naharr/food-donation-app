import { cn } from "@/lib/utils";
import React from "react";

export default function PrimaryButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <>
      <button
        onClick={onClick}
        className="relative border group w-max px-4 py-2 rounded z-[2] overflow-hidden border-primary"
      >
        <div className="relative z-[2] text-primary-foreground group-hover:text-primary transition-color font-medium duration-500 text-sm">
          {children}
        </div>
        <div
          className={
            "w-[110%] h-full bg-primary absolute top-0 left-0 group-hover:translate-y-[100%] translate-y-0 transition-transform  duration-500 z-[1] border-primary"
          }
        ></div>
      </button>
    </>
  );
}
