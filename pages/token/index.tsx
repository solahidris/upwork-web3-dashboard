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
        <Card className="p-8 flex flex-col">
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