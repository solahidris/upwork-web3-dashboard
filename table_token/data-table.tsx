"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getFilteredRowModel,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter, ChevronDown } from "lucide-react";
import { statusMapping } from "./columns";
import { useTheme } from "@/contexts/ThemeContext";
import { useState } from "react";
import useIsMobile from "@/hooks/useIsMobile";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const DataTable = <TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  const { isDarkMode } = useTheme();
  const isMobile = useIsMobile();
  const [showFilters, setShowFilters] = useState(isMobile ? false : true);
  const handleShowFilters = () => {setShowFilters(!showFilters)};

  return (
    <div>
      {isMobile && <div className="w-full flex justify-end py-4"><Button className="text-xs h-6 px-2 -mr-2 -mt-2" onClick={handleShowFilters}>Filters <ChevronDown className={`h-3 w-3 ml-1 transition duration-300 ${showFilters && "rotate-180"}`} /></Button></div>}
      <div className={`flex lg:flex-row flex-col items-center py-4 gap-4 transition-all duration-300 ease-in-out ${showFilters ? "opacity-100 h-auto" : "opacity-0 h-0"}`}>
      <Input
          placeholder="Wallet Address"
          value={
            (table.getColumn("contractAddress")?.getFilterValue() as string) ??
            ""
          }
          onChange={(event) =>
            table
              .getColumn("contractAddress")
              ?.setFilterValue(event.target.value)
          }
          className={`max-w-sm border ${isDarkMode && "bg-gray-900 border-gray-800"}`}
        />
        <Input
          placeholder="Token ID"
          value={(table.getColumn("tokenId")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("tokenId")?.setFilterValue(event.target.value)
          }
          className={`max-w-sm border ${isDarkMode && "bg-gray-900 border-gray-800"}`}
        />
        <Input
          placeholder="Token Name"
          value={
            (table.getColumn("tokenName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("tokenName")?.setFilterValue(event.target.value)
          }
          className={`max-w-sm border ${isDarkMode && "bg-gray-900 border-gray-800"}`}
        />
        <Input
          placeholder="Contract Address"
          value={
            (table.getColumn("contractAddress")?.getFilterValue() as string) ??
            ""
          }
          onChange={(event) =>
            table
              .getColumn("contractAddress")
              ?.setFilterValue(event.target.value)
          }
          className={`max-w-sm border ${isDarkMode && "bg-gray-900 border-gray-800"}`}
        />
        <div className="flex gap-4 w-full">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className={`w-md border w-full ${isDarkMode && "bg-gray-900 border-gray-800 hover:bg-gray-950/50 hover:text-gray-100/80"}`}>
              <span>Status</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className={`border my-2 p-3 ${isDarkMode && "bg-gray-900 border-gray-500 text-gray-300 hover:text-gray-100/80"}`}>
            {Object.entries(statusMapping).map(([key, value]) => (
              <DropdownMenuCheckboxItem
                key={key}
                className="capitalize"
                checked={table.getColumn("status")?.getFilterValue() === key}
                onCheckedChange={(checked) => {
                  table
                    .getColumn("status")
                    ?.setFilterValue(checked ? key : undefined);
                }}
              >
                {value}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className={`max-w-sm border ml-auto ${isDarkMode && "bg-gray-900 border-gray-800 hover:bg-gray-950/50 hover:text-gray-100/80"}`}>
              <Filter />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className={`border my-2 p-3 ${isDarkMode && "bg-gray-900 border-gray-500 text-gray-300 hover:text-gray-100/80"}`}>
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
      </div>

      {/*  RENDER - SELECT ROW FEATURE */}
      {/* {table.getFilteredSelectedRowModel().rows.length > 0 &&
        <div className="flex-1 pb-2 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
      } */}

      <div className={`rounded-md border ${isDarkMode ? "border-gray-700" : "border-gray-50"} `}>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
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
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className={`border p-3 ${isDarkMode && "bg-gray-900 border-gray-500 text-gray-300 hover:text-gray-100/80"}`}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className={`border p-3 ${isDarkMode && "bg-gray-900 border-gray-500 text-gray-300 hover:text-gray-100/80"}`}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default DataTable;
