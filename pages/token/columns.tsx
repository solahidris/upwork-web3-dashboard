"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"

export type Tokens = {
  tokenId: string
  tokenLogo: string
  tokenName: string
  tokenChain: string[]
  tokenSymbol: string
  contractAddress: string
  status: "active" | "pending" | "blocked" | "hold" | "rejected"
  updatedAt: string
  // email: string
  // amount: number
}

export const columns: ColumnDef<Tokens>[] = [
  {
    accessorKey: "tokenId",
    header: "ID",
  },
  {
    accessorKey: "tokenLogo",
    header: "Token Logo",
  },
  {
    accessorKey: "tokenName",
    header: "Token Name",
  },
  {
    accessorKey: "tokenSymbol",
    header: "Token Symbol",
  },
  {
    accessorKey: "contractAddress",
    header: "Contract Address",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "updatedAt",
    header: "Updated at",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const tokens = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => {}}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  // {
  //   accessorKey: "email",
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         variant="ghost"
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //       >
  //         Email
  //         <ArrowUpDown className="ml-2 h-4 w-4" />
  //       </Button>
  //     )
  //   },
  // },
  // {
  //   accessorKey: "amount",
  //   header: () => <div className="text-right">Amount</div>,
  //   cell: ({ row }) => {
  //     const amount = parseFloat(row.getValue("amount"))
  //     const formatted = new Intl.NumberFormat("en-US", {
  //       style: "currency",
  //       currency: "USD",
  //     }).format(amount)
 
  //     return <div className="text-right font-medium">{formatted}</div>
  //   },
  // },
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
]

export const tokens: Tokens[] = [
  {
    tokenId: "728ed52f",
    tokenLogo: "token_logo_bonk.png",
    tokenName: "Bonk",
    tokenChain: ["Ethereum", "Polygon", "Solana"],
    tokenSymbol: "BONK",
    contractAddress: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
    status: "active",
    updatedAt: "2024-06-24T16:30:01"
  },
  {
    tokenId: "489e1d42",
    tokenLogo: "token_logo_bome.png",
    tokenName: "BOOK OF MEME",
    tokenChain: ["Solana"],
    tokenSymbol: "BOME",
    contractAddress: "ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82",
    status: "pending",
    updatedAt: "2024-06-24T16:30:02"
  },
  {
    tokenId: "289e1d42",
    tokenLogo: "token_logo_mew.png",
    tokenName: "cat in a dogs world",
    tokenChain: ["Solana"],
    tokenSymbol: "MEW",
    contractAddress: "MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5",
    status: "blocked",
    updatedAt: "2024-06-24T16:30:03"
  },
  {
    tokenId: "109e1d42",
    tokenLogo: "token_logo_popcat.png",
    tokenName: "POPCAT",
    tokenChain: ["Solana"],
    tokenSymbol: "POPCAT",
    contractAddress: "7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr",
    status: "hold",
    updatedAt: "2024-06-24T16:30:04"
  },
  {
    tokenId: "919e1d42",
    tokenLogo: "token_logo_ponke.png",
    tokenName: "PONKE",
    tokenChain: ["Solana"],
    tokenSymbol: "PONKE",
    contractAddress: "5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC",
    status: "hold",
    updatedAt: "2024-06-24T16:30:04"
  },
]
