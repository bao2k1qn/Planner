"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";

import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

import { taskSchema } from "../data/schema";
import ServiceFormDialog from "../service_forms/ServiceFormDialog";
import ServiceDeteleDialog from "../service_forms/ServiceDeteleDialog";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export default function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const task = taskSchema.parse(row.original);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <div className="p-2 hover:bg-slate-100 cursor-pointer">
          <ServiceFormDialog serviceId={row.getValue("serviceId")} />
        </div>
        <DropdownMenuItem disabled className="text-muted-foreground">
          Tạo giảm giá - Chưa thực hiện
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="p-2 hover:bg-slate-100 cursor-pointer text-red-500 font-bold">
          <ServiceDeteleDialog serviceId={row.getValue("serviceId")} />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
