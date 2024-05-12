import ButtonComp from "@/components/PrimaryButton";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { suppliesArr } from "@/lib/constants";
import { useGetAllSupplyPostsQuery } from "@/redux/apiSlices/supply";
import { Plus } from "react-feather";
import { useNavigate } from "react-router-dom";
import { EditForm } from "./EditForm";
import DeleteForm from "./DeleteForm";
import { Skeleton } from "@/components/ui/skeleton";

const AllSupplies = () => {
  const { data, isLoading } = useGetAllSupplyPostsQuery("");
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="flex justify-between items-center  w-full">
        <div>
          <h3 className="font-bold md:text-2xl text-sm">All supplies</h3>
          <Breadcrumb className="my-2 hidden md:block ">
            <BreadcrumbList>
              <BreadcrumbItem className="text-xs">
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="text-xs">
                <BreadcrumbPage>All supplies</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div>
          <ButtonComp
            type="secondary"
            onClick={() => {
              navigate("/dashboard/add-new");
            }}
          >
            <div className="flex gap-2 items-center">
              <Plus />
              Add new
            </div>
          </ButtonComp>
        </div>
      </div>
      {/* table */}
      <div className="my-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead className="">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading
              ? Array(4)
                  .fill(1)
                  .map((s, i) => {
                    return (
                      <TableRow key={i}>
                        <TableCell>
                          <Skeleton className="h-[30px] w-[250px]" />
                        </TableCell>
                        <TableCell>
                          {" "}
                          <Skeleton className="h-[30px] w-[250px]" />
                        </TableCell>
                        <TableCell className="">
                          {" "}
                          <Skeleton className="h-[30px] w-[250px]" />
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-4">
                            <Skeleton className="h-[30px] w-[80px]" />
                            <Skeleton className="h-[30px] w-[80px]" />
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })
              : data?.data.map((s, i) => {
                  return (
                    <TableRow key={s._id}>
                      <TableCell>{s.name}</TableCell>
                      <TableCell>{s.category}</TableCell>
                      <TableCell className="">{s.quantity}</TableCell>
                      <TableCell>
                        <div className="flex gap-4">
                          <EditForm id={s._id} />
                          <DeleteForm id={s._id} />
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AllSupplies;
