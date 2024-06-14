import Header from "@/components/Header";
import { TableSkeleton } from "@/components/Skeleton/table/TableSkeleton";
import { ToDoList } from "@/components/ToDoList";
import { Suspense } from "react";

export default async function SignInPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<TableSkeleton />}>
        <ToDoList />
        
      </Suspense>
    </>
  );
}
