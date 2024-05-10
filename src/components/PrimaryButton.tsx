import { cn } from "@/lib/utils";
import React from "react";

export default function ButtonComp({
  children,
  onClick,
  type = "primary",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "primary" | "secondary";
}) {
  return (
    <>
      <button
        onClick={onClick}
        className={cn(
          "relative border group px-2 py-1 w-max md:px-4 md:py-2 rounded z-[2] overflow-hidden border-primary"
        )}
      >
        <div
          className={cn(
            "relative z-[2]  transition-color font-medium duration-500 md:text-sm text-xs",
            {
              "text-primary-foreground group-hover:text-primary":
                type === "primary",
              "text-primary group-hover:text-primary-foreground":
                type === "secondary",
            }
          )}
        >
          {children}
        </div>
        <div
          className={cn(
            "w-[110%] h-full bg-primary absolute top-0 left-0   duration-500 z-[1] border-primary",
            {
              "group-hover:translate-y-[100%] translate-y-0 transition-transform":
                type === "primary",
              "translate-y-[100%] group-hover:translate-y-0 transition-transform":
                type === "secondary",
            }
          )}
        ></div>
      </button>
    </>
  );
}
