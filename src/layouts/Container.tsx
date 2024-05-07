import React from "react";

type TProp = {
  children: React.ReactNode;
};
export default function Container({ children }: TProp) {
  return (
    <div className="max-w-7xl mx-auto xl:px-0 px-2 w-full">{children}</div>
  );
}
