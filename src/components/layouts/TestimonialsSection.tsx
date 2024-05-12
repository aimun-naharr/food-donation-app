import TestimonialCard from "../TestimonialCard";
import Container from "@/layouts/Container";
import { testimonialsArray } from "@/lib/constants";

export default function TestimonialsSection() {
  return (
    <section>
      <Container>
        <div>
          <h6 className="section_title">Testimonials</h6>
        </div>
        <div className="flex my-10 justify-between gap-10 flex-wrap items-center">
          {/* <div className="testimonial-container"> */}
          {testimonialsArray.map((t, i) => {
            return <TestimonialCard key={i} {...t} />;
          })}
        </div>
      </Container>
    </section>
  );
}
