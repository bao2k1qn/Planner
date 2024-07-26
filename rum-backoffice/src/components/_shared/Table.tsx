"use client";

import * as React from "react";
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { LoaderCircleIcon, LoaderIcon } from "lucide-react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading?: boolean;
  isError?: boolean;
  onChange?: React.Dispatch<React.SetStateAction<TableStateType>>;
}

export type TableStateType = {
  sorting: SortingState;
  rowSelection: object;
};

export default function DataTable<TData, TValue>({
  columns,
  data,
  isLoading,
  isError,
  onChange,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [sorting, setSorting] = React.useState<SortingState>([]);

  React.useEffect(() => {
    if (!onChange) return;

    const isEmptyNewValue =
      sorting.length === 0 && Object.keys(rowSelection).length === 0;

    onChange((pre) => {
      const isEmptyOldValue =
        pre.sorting.length === 0 && Object.keys(pre.rowSelection).length === 0;
      if (isEmptyNewValue && isEmptyOldValue) return pre;
      return { ...pre, sorting, rowSelection };
    });
  }, [rowSelection, sorting]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  {isLoading && (
                    <div className="flex justify-center">
                      <LoaderCircleIcon className="animate-spin text-sm text-slate-500" />
                    </div>
                  )}
                  {isError && (
                    <span className="text-red-500">
                      Đã có lỗi xảy ra. Vui lòng thử lại sau.
                    </span>
                  )}
                  {!(isLoading || isError) && "Không có dữ liệu."}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
