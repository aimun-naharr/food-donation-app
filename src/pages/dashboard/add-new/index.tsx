import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";

const InputElem = ({ label, ...props }: { label: string }) => {
  return (
    <>
      <div>
        <label htmlFor="" className="text-sm font-semibold ">
          {label}
        </label>
        <Input placeholder="Title" {...props} />
      </div>
    </>
  );
};

const AddNewSupplies = () => {
  return (
    <div>
      <div>
        <h3 className="font-bold md:text-2xl text-sm">Add Supply</h3>
        <Breadcrumb className="my-2 hidden md:block ">
          <BreadcrumbList>
            <BreadcrumbItem className="text-xs">
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="text-xs">
              <BreadcrumbPage>Add Supplies</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="my-6 grid md:grid-cols-3 gap-4">
        <InputElem label="Title" placeholder="Title" />
        <InputElem label="Quantity" type="number" placeholder="Quantity" />
        <InputElem label="Title" placeholder="Title" />
        <div className="col-span-2">
          <InputElem label="Title" placeholder="Title" />
        </div>
        <InputElem label="Title" placeholder="Title" />
      </div>
    </div>
  );
};

export default AddNewSupplies;
