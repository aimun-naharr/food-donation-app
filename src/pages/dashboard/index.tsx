import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LayoutPanelLeft } from "lucide-react";
import React, { useState } from "react";
import { Plus } from "react-feather";

const Sidebar = () => {
  const [hovered, setHovered] = useState(false);
  const activePath = "/dashboard";
  const navItems = [
    {
      name: "Dashboard",
      icon: <LayoutPanelLeft size={16} />,
      path: "/dashboard",
    },
    { name: "Add", icon: <Plus size={16} />, path: "add-supplies" },
  ];
  // motion
  return (
    <div
      className=" h-screen"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ul className="flex flex-col gap-1 mt-1">
        {navItems.map((nav, i) => {
          return (
            <li
              key={i}
              className={cn(
                "flex gap-2  items-center px-4 py-2 mx-2 rounded flex-shrink-0 text-zinc-700",
                {
                  "bg-zinc-100": activePath === nav.path,
                }
              )}
            >
              <div
                className={cn("p-2 rounded-md", {
                  "bg-primary text-primary-foreground ":
                    activePath === nav.path,
                })}
              >
                {nav.icon}
              </div>
              <span className="text-sm">{nav.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      content
    </div>
  );
}
