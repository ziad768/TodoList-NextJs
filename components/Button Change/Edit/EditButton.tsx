"use client";
import { Edit } from "lucide-react";
import "./editButton.modules.css";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import { Textarea } from "@/components/ui/textarea";
import { UpdateTodo } from "@/Actions/actions";
import { toast } from "react-toastify";

function EditButton({ todo }: { todo: ITodo }) {
  const formik = useFormik({
    initialValues: {
      title: todo?.title,
      desc: todo?.desc,
    },
    onSubmit: (values) => {
      const ToastUpdateTodo = UpdateTodo(todo.id, values as ITodo);
      toast.promise(ToastUpdateTodo, {
        pending: "Update data",
        success: "Success Change 👌",
        error: "Promise rejected 🤯",
      });
    },
  });

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button className="button mr-4">
            <span className="button-decor bg-gray-600"></span>
            <div className="button-content">
              <div className="button__icon bg-gray-600">
                <Edit size={18} color="#fff" />
              </div>
              <span className="button__text">Edit</span>
            </div>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] form">
          <DialogHeader>
            <DialogTitle>Edit Todo</DialogTitle>
            <DialogDescription>
              Make changes to your Todo here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={formik.handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  className="col-span-3"
                  type="text"
                  placeholder="Title Todo"
                  id="title"
                  name="title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
              </div>
              <div className="grid grid-cols-4  items-center gap-4">
                <Label htmlFor="desc" className="text-right">
                  Description
                </Label>
                <Textarea
                  className="col-span-3 min-h-32"
                  placeholder="Description Todo"
                  id="desc"
                  name="desc"
                  onChange={formik.handleChange}
                  value={formik.values.desc as string}
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit"> Save changes</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default EditButton;
