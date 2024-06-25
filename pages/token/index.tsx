import { useState, useEffect } from "react";
import NavigationMenu from "@/components/NavigationMenu";
import { Card } from "@/components/ui/card";
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
    <div className={`flex min-h-screen`}>
      <NavigationMenu />
      <div className="w-full p-8">
        <Card className="p-8 flex flex-col">
          <p className="text-3xl font-bold">Token Listing Page</p>
          <DataTable columns={columns} data={data} />
        </Card>
      </div>
    </div>
  );
}