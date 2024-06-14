"use client";
import { Trash2 } from "lucide-react";
import "./DeleteButton.modules.css";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DeleteTodo } from "@/Actions/actions";
import { toast } from "react-toastify";
function DeleteButton({ todo }: { todo: ITodo }) {
  const handelDelete = () => {
    const ToastDelete = DeleteTodo(todo.id);
    toast.promise(ToastDelete, {
      pending:"Deleting....",
      success:"Deleted 👌"
      ,error:"Error in Deleting"
    });
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button className="button mr-4">
            <span className="button-decor bg-red-600"></span>
            <div className="button-content">
              <div className="button__icon bg-red-600">
                <Trash2 size={18} color="#fff" />
              </div>
              <span className="button__text">Delete</span>
            </div>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] ">
          <DialogHeader>
            <DialogTitle>Delete Todo</DialogTitle>
            <DialogDescription>
              Make changes to your Todo here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button > Close</Button>
            </DialogClose>{" "}
            <DialogClose asChild>
              <Button
                className="bg-red-700  hover:bg-red-800 dark:text-white"
                onClick={handelDelete}
              >
                Delete todo
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default DeleteButton;
