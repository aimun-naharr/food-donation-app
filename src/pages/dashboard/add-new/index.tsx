import InputElem from "@/components/InputElem";
import ButtonComp from "@/components/PrimaryButton";
import SelectElem from "@/components/SelectElem";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { categoryOptions } from "@/lib/constants";
import { useCreateSupplyPostMutation } from "@/redux/apiSlices/supply";
import { X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Camera } from "react-feather";
import { toast } from "sonner";

const initialFormData = {
  name: "",
  description: "",
  category: "",
  quantity: 0,
};

const AddNewSupplies = () => {
  const [addPost, { isLoading, isSuccess }] = useCreateSupplyPostMutation();
  const [formData, setFormData] = useState(initialFormData);
  const imageRef = useRef<HTMLInputElement>(null);
  const [img, setImg] = useState<string | ArrayBuffer | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSelectChange = (value: string, name: string) => {
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    setFormData(initialFormData);
    setImg(null);
  }, [isSuccess]);

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImg(reader.result);
      };
    }
  };

  const handleSubmit = async () => {
    if (formData.name && formData.category && formData.quantity) {
      await addPost({ ...formData, image: img }).then((res) => {
        if (res.data.success) {
          toast("Supply post created");
        }
      });
    }
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
          name="name"
          value={formData.name}
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
          options={categoryOptions}
          value={formData.category}
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
        <div>
          {img ? (
            <div className="relative">
              <button
                onClick={() => setImg(null)}
                className="absolute bg-red-50  size-10 flex items-center justify-center rounded-full shadow-2xl -left-4 -top-3 cursor-pointer shadow-primary group "
              >
                <X className="group-hover:rotate-12 transition-transform" />
              </button>
              <img
                className="w-[300px] h-[180px] rounded object-contain"
                src={typeof img === "string" ? img : ""}
                alt="previewImg"
              />
            </div>
          ) : (
            <div
              onClick={() => imageRef?.current?.click()}
              className="border border-dashed border-zinc-300 rounded hover:border-dotted w-full h-full flex items-center justify-center cursor-pointer gap-4"
            >
              {" "}
              <Camera />
              <div>Upload image</div>
            </div>
          )}
          <input
            type="file"
            style={{ display: "none" }}
            ref={imageRef}
            onChange={onImageChange}
          />
        </div>
      </div>
      <div>
        <ButtonComp onClick={handleSubmit}>
          {isLoading ? "Saving..." : "Save"}
        </ButtonComp>
      </div>
    </div>
  );
};

export default AddNewSupplies;
