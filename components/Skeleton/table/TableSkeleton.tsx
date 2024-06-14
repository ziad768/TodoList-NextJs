"use client";
import Header from "@/components/table/Header";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableRow,
} from "@/components/ui/table";
export function TableSkeleton() {
  return (
    <>
      <Table className="container">
        <TableCaption>A list of your recent Todo.</TableCaption>
        <Header />
        <TableBody>
          <TableRow>
            <TableCell>
              <Skeleton className="h-4 " />
            </TableCell>
            <TableCell className="w-1/3">
              <Skeleton className="h-4 " />
            </TableCell>
            <TableCell className="w-1/6">
              <Skeleton className="h-4" />
            </TableCell>
            <TableCell className="w-[20.5%]">
              <Skeleton className="h-4 " />
            </TableCell>
            <TableCell>
              <div className="flex gap-5">
                <Skeleton className=" h-[30px] w-[83.38px]" />
                <Skeleton className=" h-[30px] w-[98.65px]" />
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton className="h-4 " />
            </TableCell>
            <TableCell className="w-1/3">
              <Skeleton className="h-4 " />
            </TableCell>
            <TableCell className="w-1/6">
              <Skeleton className="h-4" />
            </TableCell>
            <TableCell className="w-[20.5%]">
              <Skeleton className="h-4 " />
            </TableCell>
            <TableCell>
              <div className="flex gap-5">
                <Skeleton className=" h-[30px] w-[83.38px]" />
                <Skeleton className=" h-[30px] w-[98.65px]" />
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton className="h-4 " />
            </TableCell>
            <TableCell className="w-1/3">
              <Skeleton className="h-4 " />
            </TableCell>
            <TableCell className="w-1/6">
              <Skeleton className="h-4" />
            </TableCell>
            <TableCell className="w-[20.5%]">
              <Skeleton className="h-4 " />
            </TableCell>
            <TableCell>
              <div className="flex gap-5">
                <Skeleton className=" h-[30px] w-[83.38px]" />
                <Skeleton className=" h-[30px] w-[98.65px]" />
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton className="h-4 " />
            </TableCell>
            <TableCell className="w-1/3">
              <Skeleton className="h-4 " />
            </TableCell>
            <TableCell className="w-1/6">
              <Skeleton className="h-4" />
            </TableCell>
            <TableCell className="w-[20.5%]">
              <Skeleton className="h-4 " />
            </TableCell>
            <TableCell>
              <div className="flex gap-5">
                <Skeleton className=" h-[30px] w-[83.38px]" />
                <Skeleton className=" h-[30px] w-[98.65px]" />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total :</TableCell>
            <TableCell className="">Completed = {0} todo</TableCell>
            <TableCell className="">UnCompleted = {0} todo</TableCell>
            <TableCell className="">All = {0} todo</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}
