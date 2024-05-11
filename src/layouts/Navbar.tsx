import Logo from "@/components/Logo";

import PrimaryButton from "@/components/PrimaryButton";
import { cn } from "@/lib/utils";
import { Menu } from "react-feather";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const navItems = [
    { name: "All Items", href: "/all-items" },
    { name: "Dashboard", href: "/dashboard" },
  ];
  const handleAuth = () => {
    navigate("/auth");
    window.scrollTo(0, 0);
  };
  // TODO: Mobile nav
  return (
    <div className="">
      {/* <Container> */}
      <div className=" py-4  w-full h-full flex justify-between items-center border-b-2 border-zinc-100 md:px-10 px-2 sticky top-0">
        <Logo />
        {/* nav items */}
        <div className="md:flex gap-6 items-center hidden text-sm">
          {navItems.map((item, index) => {
            return (
              <Link
                to={item.href}
                key={item.name}
                className="relative group px-0 py-2"
              >
                <span>{item.name}</span>
                {/* floating bar */}
                <div
                  className={cn(
                    "w-0 h-1 rounded bottom-0 bg-primary absolute group-hover:w-[15px] transition-all left-1/2 -translate-x-1/2 duration-300",
                    { "w-[15px]": pathname.includes(item.href) }
                  )}
                ></div>
              </Link>
            );
          })}
          <PrimaryButton onClick={handleAuth}>Login</PrimaryButton>
        </div>
        <div className="md:hidden block text-primary">
          <Menu />
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
}
