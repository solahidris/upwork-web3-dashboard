import { Card } from "./ui/card";
import TokenEditTopContent from "./TokenEditTopContent";
import OverviewSales from "./OverviewSales";
import { Button } from "./ui/button";
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/router";
import { useState } from "react";

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

const TokenEditDashboard = ({ formData, onInputChange }: { formData: Tokens | null, onInputChange: (field: keyof Tokens, value: string | string[]) => void }) => {

  const { toast } = useToast();
  const router = useRouter();
  const [localFormData, setLocalFormData] = useState(formData);

  const handleSave = () => {
    // if (!localFormData) return;
  
    // const updatedFormData: Tokens = {
    //   ...localFormData,
    //   updatedAt: new Date().toISOString(),
    // };
  
    // setLocalFormData(updatedFormData);
    // onInputChange('updatedAt', updatedFormData.updatedAt);

    toast({
      duration: 2000,
      title: "Edit Successful",
      // description: `${updatedFormData.tokenName} (${updatedFormData.tokenSymbol}) has been saved.`,
    });

    router.push("/token");
  };

  return(
    <div className="flex flex-col gap-4 w-full">
      
      <TokenEditTopContent formData={formData} onInputChange={onInputChange}/>
      <div className="flex justify-end">
        <Button
          onClick={handleSave}
          className={`px-16 bg-gray-50 shadow-sm border border-gray-200 text-black hover:bg-gray-300`}
        >
          Save
        </Button>
      </div>

    </div>
  )
};

export default TokenEditDashboard;