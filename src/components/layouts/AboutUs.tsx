import Container from "@/layouts/Container";
import { assets } from "@/lib/assets";
import React from "react";
import { Button } from "../ui/button";

export default function AboutUs() {
  return (
    <section className="my-20">
      <Container>
        <div className="flex_between w-full ">
          {/* descriptioin */}
          <div className="max-w-[500px] w-full flex flex-col gap-4 ">
            <h6 className="section_title">About Us</h6>
            <h2 className="section_heading">Your support is really powerful</h2>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              quis facilis tempora, eius sequi officiis asperiores laudantium
              ducimus eaque sunt voluptates incidunt earum optio praesentium
            </p>
            <Button className="bg-primary w-max">Learn More</Button>
          </div>
          {/* image */}
          <div className="">
            <div className="w-[320px] tent-border overflow-hidden aspect-square ">
              <img
                src={assets.kids}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
