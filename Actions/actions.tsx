"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();
// await prisma.todo.create({
//   data: {
//     title: "todo 1 ",
//     decs: "ziad Hamdi Saad Ahmed Mohammedin Ayob + ziad Hamdi Saad Ahmed Mohammedin Ayob + ziad Hamdi Saad Ahmed Mohammedin Ayob ",
//     State: true,
//     authorId: "user_2hHQbaXd3wTkE0d1KD3BWBlYfTD",
//   },
// });
export const GetToDo = async (authorId: string) => {
  return await prisma.todo
    .findMany({
      where: {
        authorId,
      },
      orderBy: {
        createDate: "desc",
      },
    })
    .finally(() => prisma.$disconnect());
};
export const UpdateTodo = async (id: string, todo: ITodo) => {
  await prisma.todo
    .update({
      where: {
        id,
      },
      data: {
        title: todo?.title,
        desc: todo?.desc as string,
      },
    })
    .finally(() => prisma.$disconnect());
  revalidatePath("/");
};
export const HandleState = async (todoId: string, PreState: boolean) => {
  await prisma.todo
    .update({
      where: {
        id: todoId,
      },
      data: {
        State: !PreState,
      },
    })
    .finally(() => prisma.$disconnect());
  revalidatePath("/");
};
export const DeleteTodo = async (todoId: string) => {
  await prisma.todo
    .delete({
      where: {
        id: todoId,
      },
    })
    .finally(() => prisma.$disconnect());
  revalidatePath("/");
};
export const AddNewTodo = async (todo: ITodo) => {
  await prisma.todo
    .create({
      data: {
        title:todo.title,
        desc: todo.desc as string,
        State:todo.State,
        authorId: todo.authorId as string,
      },
    })
    .finally(() => prisma.$disconnect());
  revalidatePath("/");
};
