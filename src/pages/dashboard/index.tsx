import Navbar from "@/layouts/Navbar";
import { cn } from "@/lib/utils";
import { useGetAllSupplyPostsQuery } from "@/redux/apiSlices/supply";
import { LayoutPanelLeft } from "lucide-react";
import { useState } from "react";
import { Plus, Table } from "react-feather";
import { Link, Outlet, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [hovered, setHovered] = useState(false);
  const { pathname } = useLocation();

  const navItems = [
    {
      name: "Dashboard",
      icon: <LayoutPanelLeft size={16} />,
      path: "/dashboard",
    },
    {
      name: "All supplies",
      icon: <Table size={16} />,
      path: "/dashboard/all-supplies",
    },
    {
      name: "Add supplies",
      icon: <Plus size={16} />,
      path: "/dashboard/add-new",
    },
  ];
  // motion
  return (
    <div
      className="md:w-[250px] h-[calc(h-screen-72px)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ul className="flex flex-col gap-1 mt-1">
        {navItems.map((nav, i) => {
          return (
            <Link
              to={nav.path}
              key={i}
              className={cn(
                "flex gap-2  items-center px-1 py-1 md:px-4 md:py-2 mx-2 rounded flex-shrink-0 text-zinc-700 transition-all duration-500",
                {
                  "bg-zinc-100": pathname === nav.path,
                }
              )}
            >
              <div
                className={cn("p-2 rounded-md", {
                  "bg-primary text-primary-foreground ": pathname === nav.path,
                })}
              >
                {nav.icon}
              </div>
              <span className="text-sm hidden md:block">{nav.name}</span>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="md:p-4 p-1 w-full h-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
