import overviewData from "../data/overviewTopData.json";
import Image from "next/image";
import { Card } from "./ui/card";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

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

const TokenEditTopContent = ({ formData, onInputChange }: { formData: Tokens | null, onInputChange: (field: keyof Tokens, value: string | string[]) => void }) => {

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

  const [selectedChains, setSelectedChains] = useState<string[]>(formData?.tokenChain || []);

  useEffect(() => {
    if (formData) {
      setSelectedChains(formData.tokenChain);
    }
  }, [formData]);

  const handleChainChange = (chain: string) => {
    const updatedChains = selectedChains.includes(chain)
      ? selectedChains.filter(c => c !== chain)
      : [...selectedChains, chain];
    setSelectedChains(updatedChains);
    onInputChange('tokenChain', updatedChains);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-4">

      {mappedData ? mappedData.map((data, index) => (
        <Card className="p-6" key={index}>
          <div className="flex justify-between pb-2">
          {data?.contractAddress && 
              <div className="w-full min-h-20">
                <p className="font-semibold text-2xl lg:text-3xl mb-2">Contract Address</p>
                <Input
                  placeholder="Contract Address"
                  value={formData?.contractAddress || ''}
                  onChange={(e) => onInputChange('contractAddress', e.target.value)}
                  className={`max-w-xl text-black`}
                />
              </div>}
            {data?.status && 
              <div className="w-full min-h-20">
                <p className="font-semibold text-2xl lg:text-3xl mb-2">Token Status</p>
                <Select
                  onValueChange={(value) => onInputChange('status', value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={formData?.status ? formData.status.charAt(0).toUpperCase() + formData.status.slice(1) : ''} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Status</SelectLabel>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="blocked">Blocked</SelectItem>
                      <SelectItem value="hold">Hold</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>}
           {data?.tokenChain && 
              <div className="w-full min-h-20">
                <p className="font-semibold text-2xl lg:text-3xl mb-2">Token Chain</p>
                <div className="flex lg:flex-row flex-col lg:gap-8 mt-4">
                  {['Ethereum', 'Polygon', 'Solana'].map(chain => (
                    <div key={chain} className="flex items-center mb-2">
                      <Checkbox
                        checked={selectedChains.includes(chain)}
                        onCheckedChange={() => handleChainChange(chain)}
                      />
                      <label className="ml-2">{chain}</label>
                    </div>
                  ))}
                </div>
              </div>}
            {data?.tokenId && 
              <div className="w-full min-h-20">
                <p className="font-semibold text-2xl lg:text-3xl mb-2">Token ID</p>
                <Input
                  placeholder="Token ID"
                  value={formData?.tokenId || ''}
                  onChange={(e) => onInputChange('tokenId', e.target.value)}
                  className={`max-w-xl text-black`}
                />
              </div>}
            {data?.tokenLogo && 
              <div className="w-full min-h-20">
                <p className="font-semibold text-2xl lg:text-3xl mb-2">Token Logo</p>
                <Input
                  placeholder="Token Logo"
                  value={formData?.tokenLogo || ''}
                  onChange={(e) => onInputChange('tokenLogo', e.target.value)}
                  className={`max-w-xl text-black`}
                />
              </div>}
            {data?.tokenName && 
              <div className="w-full min-h-20">
                <p className="font-semibold text-2xl lg:text-3xl mb-2">Token Name</p>
                <Input
                  placeholder="Token Name"
                  value={formData?.tokenName || ''}
                  onChange={(e) => onInputChange('tokenName', e.target.value)}
                  className={`max-w-xl text-black`}
                />
              </div>}
            {data?.tokenSymbol && 
              <div className="w-full min-h-20">
                <p className="font-semibold text-2xl lg:text-3xl mb-2">Token Symbol</p>
                <Input
                  placeholder="Token Symbol"
                  value={formData?.tokenSymbol || ''}
                  onChange={(e) => onInputChange('tokenSymbol', e.target.value)}
                  className={`max-w-xl text-black`}
                />
              </div>}
            {data?.updatedAt && 
              <div className="w-full min-h-20">
                <p className="font-semibold text-2xl lg:text-3xl mb-2">Last Update</p>
                <Input
                  value={formData?.updatedAt || ''}
                  onChange={(e) => onInputChange('updatedAt', e.target.value)}
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
