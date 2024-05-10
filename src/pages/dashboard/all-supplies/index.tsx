import ButtonComp from "@/components/PrimaryButton";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { suppliesArr } from "@/lib/constants";
import { Plus } from "react-feather";
import { useNavigate } from "react-router-dom";

const AllSupplies = () => {
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
            {suppliesArr.map((s, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{s.title}</TableCell>
                  <TableCell>{s.category}</TableCell>
                  <TableCell>{s.quantity}</TableCell>
                  <TableCell>buttons</TableCell>
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
