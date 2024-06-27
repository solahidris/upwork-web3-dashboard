import overviewData from "../data/overviewTopData.json";
import Image from "next/image";
import { Card } from "./ui/card";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";

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

const TokenEditTopContent = ({ formData }: { formData: Tokens | null }) => {
  const { isDarkMode } = useTheme();
  const [strokeColor, setStrokeColor] = useState("#000000")
  const [mappedData, setMappedData] = useState([
    { contractAddress: "" },
    { status: "" },
    { tokenChain: [""] },
    { tokenId: "" },
    { tokenLogo: "" },
    { tokenName: "" },
    { tokenSymbol: "" },
    { updatedAt: "" }
  ]);
  
  useEffect(() => {
    if (isDarkMode) {
      setStrokeColor("#ffffff");
    } else {
      setStrokeColor("#000000");
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (formData) {
      setMappedData([
        { contractAddress: formData.contractAddress },
        { status: formData.status },
        { tokenChain: formData.tokenChain },
        { tokenId: formData.tokenId },
        { tokenLogo: formData.tokenLogo },
        { tokenName: formData.tokenName },
        { tokenSymbol: formData.tokenSymbol },
        { updatedAt: formData.updatedAt }
      ]);
    }
  }, [formData]);

  return (
    <div className="grid grid-cols-2 gap-4">

      {mappedData ? mappedData.map((data, index) => (
        <Card className="p-6" key={index}>
          <div className="flex justify-between pb-2">
            
            {data?.contractAddress && 
              <div className="w-full min-h-20">
              <p className="font-semibold text-3xl mb-2">Contract Address</p>
                <Input
                  placeholder="Contract Address"
                  value={formData?.contractAddress || ''}
                  // onChange={(e) => setFormData({ ...formData, tokenId: e.target.value } as Tokens)}
                  className={`max-w-xl text-black`}
                />
              </div>}

            {data?.status && 
              <div className="w-full min-h-20">
              <p className="font-semibold text-3xl mb-2">Token Status</p>
                <Input
                  placeholder="Token Status"
                  value={formData?.status || ''}
                  // onChange={(e) => setFormData({ ...formData, tokenId: e.target.value } as Tokens)}
                  className={`max-w-xl text-black`}
                />
              </div>}
            {data?.tokenChain && 
              <div className="w-full min-h-20">
              <p className="font-semibold text-3xl mb-2">Token Chain</p>
                <Input
                  placeholder="Token Chain"
                  value={formData?.tokenChain || ''}
                  // onChange={(e) => setFormData({ ...formData, tokenId: e.target.value } as Tokens)}
                  className={`max-w-xl text-black`}
                />
              </div>}

            {data?.tokenId && 
              <div className="w-full min-h-20">
              <p className="font-semibold text-3xl mb-2">Token ID</p>
                <Input
                  placeholder="Token ID"
                  value={formData?.tokenId || ''}
                  // onChange={(e) => setFormData({ ...formData, tokenId: e.target.value } as Tokens)}
                  className={`max-w-xl text-black`}
                />
              </div>}

            {data?.tokenLogo && 
              <div className="w-full min-h-20">
              <p className="font-semibold text-3xl mb-2">Token Logo</p>
                <Input
                  placeholder="Token Logo"
                  value={formData?.tokenLogo || ''}
                  // onChange={(e) => setFormData({ ...formData, tokenId: e.target.value } as Tokens)}
                  className={`max-w-xl text-black`}
                />
              </div>}

            {data?.tokenName && 
              <div className="w-full min-h-20">
              <p className="font-semibold text-3xl mb-2">Token Name</p>
                <Input
                  placeholder="Token Name"
                  value={formData?.tokenName || ''}
                  // onChange={(e) => setFormData({ ...formData, tokenId: e.target.value } as Tokens)}
                  className={`max-w-xl text-black`}
                />
              </div>}

            {data?.tokenSymbol && 
              <div className="w-full min-h-20">
              <p className="font-semibold text-3xl mb-2">Token Symbol</p>
                <Input
                  placeholder="Token Symbol"
                  value={formData?.tokenSymbol || ''}
                  // onChange={(e) => setFormData({ ...formData, tokenId: e.target.value } as Tokens)}
                  className={`max-w-xl text-black`}
                />
              </div>}

            {data?.updatedAt && 
              <div className="w-full min-h-20">
              <p className="font-semibold text-3xl mb-2">Last Update</p>
                <Input
                  // placeholder="Token ID"
                  value={formData?.updatedAt || ''}
                  // onChange={(e) => setFormData({ ...formData, tokenId: e.target.value } as Tokens)}
                  className={`max-w-xl text-black`}
                />
              </div>}

            {/* <Image
              src={data?.tokenLogo ? (isDarkMode ? `/dashboard_icon/${data?.tokenLogo}` : `/dashboard_icon/${data?.tokenLogo}`) : "/next.svg"}
              alt="dollarsign"
              width={16}
              height={16}
              className="text-red-300"
              style={{ stroke: strokeColor }}
            /> */}
            
          </div>
        </Card>
      )) : <p>No data found</p>}
    </div>
  );
};

export default TokenEditTopContent;
