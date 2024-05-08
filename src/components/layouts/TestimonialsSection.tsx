import React from "react";
import TestimonialCard from "../TestimonialCard";
import Container from "@/layouts/Container";
import Marquee from "../Marquee";

export default function TestimonialsSection() {
  return (
    <section>
      <Container>
        <div>
          <h6 className="section_title">Testimonials</h6>
        </div>
        <div className="flex my-10 justify-between gap-10 flex-wrap">
          {/* <Marquee className="py-10 [--duration:20s]"> */}
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          {/* </Marquee> */}
          {/* <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard /> */}
        </div>
      </Container>
    </section>
  );
}
