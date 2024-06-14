import React, { memo } from 'react'
import { TableHead, TableHeader, TableRow } from '../ui/table'
import { Button } from '../ui/button'
import ButtonAddTodo from '../Button Change/ButtonAddTodo'

function Header() {
  return (
    <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Title</TableHead>
      <TableHead>Description</TableHead>
      <TableHead>Complete</TableHead>
      <TableHead>Create At</TableHead>
      <TableHead className=""><div className="flex justify-between items-center">Actions <ButtonAddTodo/></div></TableHead>
    </TableRow>
  </TableHeader>  )
}

export default memo(Header)