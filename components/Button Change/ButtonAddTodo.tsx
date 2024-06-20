"use client";
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
import { toast } from "react-toastify";
import { memo } from "react";
import CheckBox from "../Forms/checkBox/CheckBox";
import { SignInButton, SignUpButton, useAuth, useUser } from "@clerk/nextjs";
import { AddNewTodo } from "@/Actions/actions";
import * as z from "zod";
import { Link } from "lucide-react";

const todoSchema = z.object({
  title: z.string().min(1, "Title is required").max(40, "Title is too long"),
  desc: z
    .string()
    .min(1, "Description is required")
    .max(500, "Description is too long"),
  State: z.boolean(),
  authorId: z.string().nonempty("Author ID is required"),
});

function ButtonAddTodo() {
  const { userId } = useAuth();
  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
      State: false,
      authorId: userId as string,
    },
    validate: (values) => {
      try {
        todoSchema.parse(values);
      } catch (error) {
        if (error instanceof z.ZodError) {
          return error.formErrors.fieldErrors;
        }
        return {};
      }
    },
    onSubmit: async (values) => {
      const ToastAddNewTodo = AddNewTodo(values as ITodo);
      toast.promise(ToastAddNewTodo, {
        pending: "Add New Todo...",
        success: "Success Add 👌",
        error: "Promise rejected 🤯",
      });
    },
  });
  const { isSignedIn } = useUser();
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button size={"sm"}>Add Todo</Button>
        </DialogTrigger>
        {isSignedIn ? (
          <DialogContent className="sm:max-w-[425px] form">
            <DialogHeader>
              <DialogTitle>Add Todo</DialogTitle>
              <DialogDescription>
                Make New Todo , Click save when you&apos;re done.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={formik.handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">
                    Title
                  </Label>
                  <div className="col-span-3">
                    <Input
                      className="w-full"
                      type="text"
                      placeholder="Title Todo"
                      id="title"
                      name="title"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.title}
                    />
                    {formik.errors.title && formik.touched.title ? (
                      <div className="text-sm text-red-500 mt-1 ">
                        {formik.errors.title}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="grid grid-cols-4  items-center gap-4">
                  <Label htmlFor="desc" className="text-right">
                    Description
                  </Label>
                  <div className="col-span-3">
                    <Textarea
                      className=" w-full min-h-32"
                      placeholder="Description Todo"
                      id="desc"
                      name="desc"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.desc as string}
                    />
                    {formik.errors.desc && formik.touched.desc ? (
                      <div className="text-sm text-red-500 mt-1 ">
                        {formik.errors.desc}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="State" className="text-right">
                    State
                  </Label>
                  <CheckBox formik={formik} />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit"> Save changes</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        ) : (
          <DialogContent className="sm:max-w-[425px] form">
            <DialogHeader>
              <DialogTitle>You Don&apos;t Sign In </DialogTitle>
              <DialogDescription>Please Sign in before</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="default" className="mr-3">
                <SignInButton />
              </Button>
              <Button variant="default" className="mr-3">
                <SignUpButton />
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}

export default memo(ButtonAddTodo);
