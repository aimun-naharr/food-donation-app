import Container from "@/layouts/Container";
import React from "react";
import SupplyPostCard from "../SupplyPostCard";
import { suppliesArr } from "@/lib/constants";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useGetAllSupplyPostsQuery } from "@/redux/apiSlices/supply";
import SupplyCardLoader from "../SupplyCardLoader";

export default function SuppliesSection() {
  const navigate = useNavigate();
  const { data, isLoading } = useGetAllSupplyPostsQuery("");
  console.log(data);
  return (
    <section className="">
      {/* <SupplyCardLoader /> */}
      <Container>
        <div className="flex w-full items-center justify-between">
          <h6 className="section_title">Supplies</h6>
          <Button variant={"link"} onClick={() => navigate("/all-items")}>
            View all
          </Button>
        </div>
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 my-4">
            {suppliesArr.map((s, i) => (
              <SupplyCardLoader key={i} {...s} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 my-4">
            {data.data.map((s, i) => (
              <SupplyPostCard key={i} {...s} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
