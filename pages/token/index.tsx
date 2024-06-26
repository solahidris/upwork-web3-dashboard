import { useState, useEffect } from "react";
import NavigationMenu from "@/components/NavigationMenu";
import { Card } from "@/components/ui/card";
import { columns } from "../../table_token/columns";
import DataTable from "../../table_token/data-table";
import tokensData from "@/data/tokens.json";
import { useTheme } from "@/contexts/ThemeContext";
import DarkModeButton from "@/components/DarkModeButton";
import useIsMobile from "@/hooks/useIsMobile";

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
  const isMobile = useIsMobile();


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
      <div className={`w-full p-6 lg:p-8 ${isMobile ? "mt-20" : "ml-[240px]"} `}>
        <Card className="p-6 lg:p-8 flex flex-col">
          <div className="flex justify-between">
            <p className="text-3xl font-bold">Token Listing</p>
            {!isMobile && <DarkModeButton />}
          </div>
          <DataTable columns={columns} data={data} />
        </Card>
      </div>
    </div>
  );
}