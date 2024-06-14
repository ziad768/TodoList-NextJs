import React, { Dispatch, SetStateAction, memo } from "react";
import EditButton from "./Edit/EditButton";
import DeleteButton from "./Delete/DeleteButton";

function ButtonChange({
  todo,
}: {
  todo: ITodo;
}) {
  return (
    <>
      <EditButton todo={todo} />
      <DeleteButton todo={todo} />
    </>
  );
}

export default memo(ButtonChange);
