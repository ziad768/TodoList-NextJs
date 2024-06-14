"use server";
import { GetToDo } from "@/Actions/actions";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import StateBage from "./StateBage";
import ButtonChange from "./Button Change/ButtonChange";
import { auth } from "@clerk/nextjs/server";
import Header from "./table/Header";
import Footer from "./table/Footer";
export async function ToDoList() {
  const { userId } = await auth();
  const ToDos = await GetToDo(userId as string);

  return (
    <>
      <Table className="container">
        <TableCaption>A list of your recent Todo.</TableCaption>
        <Header />
        <TableBody>
          {ToDos.map((todo) => (
            <TableRow
              key={todo?.id}
              className={`relative ${
                todo?.State && "bg-slate-300 hover:bg-slate-300"
              }`}
            >
              <TableCell className="font-medium">{todo?.title}</TableCell>
              <TableCell>
                {(todo?.desc?.length as number) >= 50 ? (
                  <TooltipProvider delayDuration={300}>
                    <Tooltip>
                      <TooltipTrigger asChild className="cursor-pointer">
                        <p>{todo?.desc?.slice(0, 49) + "..."}</p>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-[400px] lg:w-auto ">{todo?.desc}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  todo?.desc
                )}
              </TableCell>
              <TableCell>
                <StateBage todo={todo} />
              </TableCell>
              <TableCell>
                <p>
                  {todo?.createDate?.toLocaleTimeString()}{" "}
                  {todo?.createDate?.toLocaleDateString()}
                </p>
              </TableCell>

              <TableCell>
                <ButtonChange todo={todo} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <Footer ToDos={ToDos} />
      </Table>
    </>
  );
}
