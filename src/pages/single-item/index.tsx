import ButtonComp from "@/components/PrimaryButton";
import SingleItemPageSkeleton from "@/components/SingleItemPageSkeleton";
import Container from "@/layouts/Container";
import { useGetOnePoductQuery } from "@/redux/apiSlices/supply";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SingleItem() {
  const { id } = useParams();
  const { data, isLoading } = useGetOnePoductQuery(id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (isLoading) {
    return (
      <Container>
        <div className="my-10">
          <SingleItemPageSkeleton />
        </div>
      </Container>
    );
  }
  return (
    <div>
      <Container>
        <div className="w-full py-8 flex flex-col gap-8">
          <div className="w-full h-[400px] rounded overflow-hidden">
            <img
              src={data?.data?.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex md:flex-row flex-col md:justify-between gap-4 md:gap-0">
            <div className="flex flex-col gap-2 max-w-4xl">
              <h1 className="text-2xl font-bold">{data?.data?.name}</h1>
              <p className="text-zinc-500">{data.data?.description}</p>
              <p className="text-sm">Quantity: {data?.data?.quantity}</p>
            </div>
            <div>
              <ButtonComp>Donate Now</ButtonComp>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
