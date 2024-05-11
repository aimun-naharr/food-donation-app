import React from "react";
import Container from "./Container";
import Logo from "@/components/Logo";
import { MailIcon, Phone } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray">
        <Container>
          {/* logo */}
          <div className="grid grid-cols-1 md:grid-cols-3 py-[80px] w-full ">
            <div>
              <Logo />

              <p className="text-zinc-500 text-sm">
                Let's make a change with small contribution
              </p>
            </div>
            <div className="mt-5">
              <ul className="text-sm gap-2 flex flex-col">
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <ul className="text-sm gap-2 flex flex-col">
                <li className="flex gap-2">
                  <span>
                    <Phone size={14} />
                  </span>{" "}
                  +9992-2929-22
                </li>
                <li className="flex gap-2">
                  <span>
                    <MailIcon size={14} />
                  </span>{" "}
                  <span>dodonate@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
