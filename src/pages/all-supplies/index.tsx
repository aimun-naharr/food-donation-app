import SupplyCardLoader from "@/components/SupplyCardLoader";
import SupplyPostCard from "@/components/SupplyPostCard";
import Container from "@/layouts/Container";
import { suppliesArr } from "@/lib/constants";
import { useGetAllSupplyPostsQuery } from "@/redux/apiSlices/supply";
import React, { useEffect } from "react";

export default function AllSuppliesPosts() {
  const { data, isLoading } = useGetAllSupplyPostsQuery("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Container>
        <div className="py-8">
          <h1 className="text-xl font-bold">All supplies</h1>
          <div className="py-4">
            {isLoading ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 ">
                {suppliesArr.map((s, i) => (
                  <SupplyCardLoader key={i} {...s} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 ">
                {data.data.map((s, i) => (
                  <SupplyPostCard key={i} {...s} />
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
