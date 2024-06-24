import { useState, useEffect } from "react";
import NavigationMenu from "@/components/NavigationMenu";
// import CalendarDashboard from "@/components/CalendarDashboard";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue } from "@/components/ui/select";

import { columns } from "../../table_token/columns";
import DataTable from "../../table_token/data-table";
import tokensData from "@/data/tokens.json";

type Tokens = {
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

// Fetch data - from API here later
// NOW - dummy data
// async function getData(): Promise<Tokens[]> {
//   return [
//     {
//       tokenId: "728ed52f",
//       tokenLogo: "token_logo_bonk.png",
//       tokenName: "Bonk",
//       tokenChain: ["Ethereum", "Polygon", "Solana"],
//       tokenSymbol: "BONK",
//       contractAddress: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
//       status: "active",
//       updatedAt: "2024-06-24T16:30:01"
//     },
//     {
//       tokenId: "489e1d42",
//       tokenLogo: "token_logo_bome.png",
//       tokenName: "BOOK OF MEME",
//       tokenChain: ["Solana"],
//       tokenSymbol: "BOME",
//       contractAddress: "ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82",
//       status: "pending",
//       updatedAt: "2024-06-24T16:30:02"
//     },
//     {
//       tokenId: "289e1d42",
//       tokenLogo: "token_logo_mew.png",
//       tokenName: "cat in a dogs world",
//       tokenChain: ["Solana"],
//       tokenSymbol: "MEW",
//       contractAddress: "MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5",
//       status: "blocked",
//       updatedAt: "2024-06-24T16:30:03"
//     },
//     {
//       tokenId: "109e1d42",
//       tokenLogo: "token_logo_popcat.png",
//       tokenName: "POPCAT",
//       tokenChain: ["Solana"],
//       tokenSymbol: "POPCAT",
//       contractAddress: "7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr",
//       status: "hold",
//       updatedAt: "2024-06-24T16:30:04"
//     },
//     {
//       tokenId: "919e1d42",
//       tokenLogo: "token_logo_ponke.png",
//       tokenName: "PONKE",
//       tokenChain: ["Solana"],
//       tokenSymbol: "PONKE",
//       contractAddress: "5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC",
//       status: "hold",
//       updatedAt: "2024-06-24T16:30:04"
//     },
//   ]
// }

async function getData(): Promise<Tokens[]> {
  return tokensData as Tokens[]; 
}

export default function TokenPage() {

  const [data, setData] = useState<Tokens[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`flex flex-col min-h-screen p-8`}>
      <NavigationMenu />

      <div className="mt-8">
        <Card className="p-8 flex flex-col gap-4">
          <p className="text-3xl font-bold">Token Listing Page</p>
          <DataTable columns={columns} data={data} />

          <ul>
            <p className="text-lg font-semibold">Tokens (index page)</p>
            <br/>
            <li>Filter ( all  string text, except status )
              <ul className="list-disc list-inside">
                <li>Wallet Address</li>
                <li>Token ID</li>
                <li>Token Name/Symbol</li>
                <li>Contract Address</li>
                <li>Status (Active, pending, blocked, hold, rejected)</li>
              </ul>
            </li>
            <br/>
            <li>Table
              <ul className="list-disc list-inside">
                <li>ID</li>
                <li>Token (logo + small chain logo on top right, name & symbol, contract address)</li>
                <li>Status</li>
                <li>Updated At</li>
                <li>Actions (edit / delete)</li>
              </ul>
            </li>
          </ul>

        </Card>
      </div>

    </div>
  );
}