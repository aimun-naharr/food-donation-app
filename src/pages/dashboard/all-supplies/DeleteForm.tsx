import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useDeleteSupplyMutation } from "@/redux/apiSlices/supply";
import { toast } from "sonner";

export default function DeleteForm({ id }: { id: string }) {
  const [deletePost, { isLoading }] = useDeleteSupplyMutation();
  const handleDelete = async () => {
    await deletePost(id).then((res) => {
      if (res.data.success) {
        toast("Deleted");
      }
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" size={"sm"}>
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this supply post?
          </DialogDescription>
        </DialogHeader>
        <div className=""></div>
        <DialogFooter>
          <Button
            disabled={isLoading}
            onClick={handleDelete}
            variant={"destructive"}
          >
            {isLoading ? "Deleting..." : "Delete"}
          </Button>
          <DialogClose>
            <Button variant={"outline"}>Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
