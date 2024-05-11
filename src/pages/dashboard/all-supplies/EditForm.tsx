import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMediaQuery } from "@uidotdev/usehooks";
import SelectElem from "@/components/SelectElem";
import { categoryOptions } from "@/lib/constants";
import { Camera, X } from "react-feather";

export function EditForm() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit </Button>
        </DialogTrigger>
        <DialogContent className="w-[800px] max-w-3xl">
          <DialogHeader>
            <DialogTitle>Edit</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent className="">
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  const [img, setImg] = React.useState(null);
  const imageRef = React.useRef<HTMLInputElement>(null);
  const onImageChange = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImg(reader.result);
      };
    }
  };

  return (
    <form
      className={cn(
        "grid md:grid-cols-2 grid-cols-1 items-start gap-4",
        className
      )}
    >
      <div>
        <Label htmlFor="name">Title</Label>
        <Input type="text" id="name" defaultValue="" />
      </div>
      <div>
        <Label htmlFor="quantity">Quantity</Label>
        <Input type="number" id="quantity" defaultValue="" />
      </div>
      <SelectElem
        label="Category"
        onChange={() => {}}
        options={categoryOptions}
      />
      <div>
        <Label htmlFor="description">Description</Label>
        <Input id="description" defaultValue="" />
      </div>
      <div className="col-span-2 h-[150px]">
        <div className="h-[150px]">
          {img ? (
            <div className="relative">
              <button
                onClick={() => setImg(null)}
                className="absolute bg-red-50  size-10 flex items-center justify-center rounded-full shadow-2xl -left-4 -top-3 cursor-pointer shadow-primary group "
              >
                <X className="group-hover:rotate-12 transition-transform" />
              </button>
              <img
                className="w-[300px] md:h-[150px] h-[100px] rounded object-contain"
                src={img}
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
      <div className="col-span-2">
        <Button type="submit" className="w-full" variant={"secondary"}>
          Save changes
        </Button>
      </div>
    </form>
  );
}