import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import tokensData from "@/data/tokens.json";
import { useTheme } from '@/contexts/ThemeContext'
import NavigationMenu from '@/components/NavigationMenu'
import DarkModeButton from '@/components/DarkModeButton'
import TokenEditDashboard from '@/components/TokenEditDashboard'
import useIsMobile from '@/hooks/useIsMobile'

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

// Function to fetch token data by ID
async function fetchTokenData(tokenId: string): Promise<Tokens | undefined> {
  const tokens = await getData();
  return tokens.find(token => token.tokenId === tokenId);
}

// Function to simulate saving token data
async function saveTokenData(updatedToken: Tokens): Promise<void> {
  console.log('Saving token data:', updatedToken);
  // Simulate a delay
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

export default function EditToken() {
  const router = useRouter()
  const { url_slug } = router.query
  const queryClient = useQueryClient();
  const { isDarkMode } = useTheme();
  const isMobile = useIsMobile();

  const { data: tokenData, isLoading } = useQuery({
    queryKey: ['token', url_slug],
    queryFn: () => fetchTokenData(url_slug as string),
    enabled: !!url_slug,
  });

  const mutation = useMutation<void, Error, Tokens>({
    mutationFn: saveTokenData, // Pass the mutation function as a property
    onSuccess: () => {
      if (typeof url_slug === 'string') {
        queryClient.invalidateQueries({ queryKey: ['token', url_slug] });
      }
      router.push('/token');
    },
  });

  const [formData, setFormData] = useState<Tokens | null>(null);

  useEffect(() => {
    if (tokenData) {
      setFormData(tokenData);
    }
  }, [tokenData]);

  const handleSave = () => {
    if (formData) {
      mutation.mutate(formData);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className={`flex min-h-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-black'}`}>
      <NavigationMenu />
      <div className={`w-full p-6 lg:p-8 ${isMobile ? "mt-20" : "ml-[240px]"} `}>
        <Card className="p-8 flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="text-3xl font-bold">Edit Token</p>
            {!isMobile && <DarkModeButton />}
          </div>
          <TokenEditDashboard formData={formData}/>
        </Card>
      </div>

    </div>
  );
}