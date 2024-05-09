import Container from "@/layouts/Container";
import { assets } from "@/lib/assets";
import { Button } from "../ui/button";
import PrimaryButton from "../PrimaryButton";

export default function AboutUs() {
  return (
    <section className="">
      <Container>
        <div className="flex_between w-full items-center justify-center">
          {/* descriptioin */}
          <div className="max-w-[500px] w-full flex flex-col gap-4 ">
            <h6 className="section_title">About Us</h6>
            <h2 className="section_heading">Your support is really powerful</h2>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              quis facilis tempora, eius sequi officiis asperiores laudantium
              ducimus eaque sunt voluptates incidunt earum optio praesentium
            </p>
            <PrimaryButton>Learn More</PrimaryButton>
          </div>
          {/* image */}
          <div className="relative ">
            <div className="absolute -left-[60%] z-[-1] opacity-20">
              <img src={assets.grid} alt="" />
            </div>

            <div className="max-w-[450px] w-full rounded-md aspect-[16/12] overflow-hidden ">
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
