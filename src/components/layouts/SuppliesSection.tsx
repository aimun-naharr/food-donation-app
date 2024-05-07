import Container from "@/layouts/Container";
import React from "react";
import SupplyPostCard from "../SupplyPostCard";
import { suppliesArr } from "@/lib/constants";

export default function SuppliesSection() {
  return (
    <section className="my-20">
      <Container>
        <div className="flex w-full items-center justify-center">
          <h6 className="section_title">Supplies</h6>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 ">
          {suppliesArr.map((s, i) => (
            <SupplyPostCard key={i} {...s} />
          ))}
        </div>
      </Container>
    </section>
  );
}
