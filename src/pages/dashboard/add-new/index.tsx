import InputElem from "@/components/InputElem";
import SelectElem from "@/components/SelectElem";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React, { useState } from "react";

const initialFormData = {
  title: "",
  description: "",
  category: "",
  quantity: 0,
};

const AddNewSupplies = () => {
  const [formData, setFormData] = useState(initialFormData);
  console.log({ formData });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSelectChange = (value: string, name: string) => {
    setFormData({ ...formData, [name]: value });
  };
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
      <div className="my-6 grid md:grid-cols-3 gap-4 grid-cols-1">
        <InputElem
          label="Title"
          placeholder="Title"
          onChange={(e) => handleChange(e)}
          name="title"
          value={formData.title}
        />
        <InputElem
          label="Quantity"
          type="number"
          placeholder="Quantity"
          onChange={(e) => handleChange(e)}
          name="quantity"
          min={0}
          value={formData.quantity}
        />
        <SelectElem
          label="Category"
          onChange={(e) => handleSelectChange(e, "category")}
          name="category"
        />
        <div className="md:col-span-2">
          <InputElem
            label="Description"
            placeholder=""
            onChange={handleChange}
            name="description"
            value={formData.description}
          />
        </div>
        {/* <InputElem label="" placeholder="Title" /> */}
      </div>
    </div>
  );
};

export default AddNewSupplies;
