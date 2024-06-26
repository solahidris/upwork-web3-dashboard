"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/router"
import Image from "next/image"

// Custom cell renderer for token logo
const TokenLogoCell = ({ value }: { value: string }) => (
  <div className="flex justify-center">
    <Image src={value} width={32} height={32} className="w-8 h-8 rounded-full"  alt="Token Logo" />
  </div>
);
const TokenChainCell = ({ value }: { value: string }) => (
  <div className="flex justify-center w-8 h-8 rounded-full bg-gray-100 border border-[4px] scale-[0.5]">
    <Image src={value} width={32} height={32} alt="Token Logo"
    className="w-full p-1" />
  </div>
);

export const statusMapping = {
  active: "Active",
  pending: "Pending",
  blocked: "Blocked",
  hold: "On Hold",
  rejected: "Rejected"
}

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
    cell: ({ getValue, row }) => {
      const value = getValue() as string;
      const chainLogoMap: { [key: string]: string } = {
        Ethereum: "/chain_logo/ethereum-eth-logo.png",
        Polygon: "/chain_logo/polygon-matic-logo.png",
        Solana: "/chain_logo/solana-sol-logo.png",
        Bitcoin: "/chain_logo/bitcoin-btc-logo.png",
      };
  
      return (
        <div className="-ml-5">
          <TokenLogoCell value={value} />
          <div className="flex gap-1 absolute mt-[-48px] ml-[28px]">
            {row.original.tokenChain.map((chainItem, index) => (
              <div key={index} className={`z-${index+1}0 mr-[-24px]`} >
                <TokenChainCell value={chainLogoMap[chainItem]}/>
              </div>
            ))}
          </div>
        </div>
      );
    },
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
  // {
  //   accessorKey: "status",
  //   header: "Status",
  // },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as keyof typeof statusMapping
      // return <Badge>{statusMapping[status]}</Badge>
      return <span>{statusMapping[status]}</span>
    }
  },
  {
    accessorKey: "updatedAt",
    header: "Updated at",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const tokens = row.original
      const router = useRouter()

      const handleEdit = () => {
        if (confirm(`Edit token ${tokens.tokenName}?`)) {
          router.push(`/token/edit/${tokens.tokenId}`)
          console.log(`Edit button confirmed. Routing to ${tokens.tokenId}`)
        }
        console.log(`Edit action abandoned.`)
      }
      const handleDelete = () => {
        if (confirm(`Delete token ${tokens.tokenName}?`)) {
          // Perform delete operation here
          console.log(`Deleting token ${tokens.tokenId}`)
        }
      }
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={handleEdit}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleDelete}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  // // Email
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
  // // Amount
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
  // // Select Row
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