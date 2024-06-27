import { Card } from "./ui/card";
import TokenEditTopContent from "./TokenEditTopContent";
import OverviewSales from "./OverviewSales";
import { Button } from "./ui/button";

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

const TokenEditDashboard = ({ formData }: { formData: Tokens | null }) => {

  return(
    <div className="flex flex-col gap-4 w-full">
      
      <TokenEditTopContent formData={formData} />      
      
      {/* <div className="grid grid-cols-8 gap-4">
        <Card className="p-6 col-span-5">
          <p className="font-semibold">Overview graph</p>
        </Card>
        <Card className="p-6 col-span-3">
          <OverviewSales />
        </Card>
      </div> */}
      <div className="bg-red-300x flex justify-end">
      <Button className={`px-16 bg-gray-100 border border-gray-300 text-black hover:bg-gray-300`} >Save</Button>
      </div>

    </div>
  )
};

export default TokenEditDashboard;