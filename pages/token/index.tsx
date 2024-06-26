import { useState, useEffect } from "react";
import NavigationMenu from "@/components/NavigationMenu";
import { Card } from "@/components/ui/card";
import { columns } from "../../table_token/columns";
import DataTable from "../../table_token/data-table";
import tokensData from "@/data/tokens.json";
import { useTheme } from "@/contexts/ThemeContext";
import DarkModeButton from "@/components/DarkModeButton";

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
  const { isDarkMode } = useTheme();

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
    <div className={`flex min-h-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-black'}`}>
      <NavigationMenu />
      <div className="w-full p-8 ml-[240px]">
        <Card className="p-8 flex flex-col">
          <div className="flex justify-between">
            <p className="text-3xl font-bold">Token Listing Page</p>
            <DarkModeButton />
          </div>
          <DataTable columns={columns} data={data} />
        </Card>
      </div>
    </div>
  );
}