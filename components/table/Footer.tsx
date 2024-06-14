import React from "react";
import { TableCell, TableFooter, TableRow } from "../ui/table";

function Footer({ ToDos }: { ToDos: ITodo[] }) {
  return (
    <TableFooter>
      <TableRow>
        <TableCell colSpan={2}>Total :</TableCell>
        <TableCell className="">
          Completed = {ToDos.filter((todo) => todo.State == true).length} todo
        </TableCell>
        <TableCell className="">
          UnCompleted = {ToDos.filter((todo) => todo.State == false).length}{" "}
          todo
        </TableCell>
        <TableCell className="">All = {ToDos.length} todo</TableCell>
      </TableRow>
    </TableFooter>
  );
}

export default Footer;
