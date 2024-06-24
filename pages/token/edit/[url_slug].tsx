import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
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
    <div className="flex flex-col items-center min-h-screen p-8">
      <Card className="p-8 flex flex-col gap-4 w-[50%]">
        <p className="text-3xl font-bold">Edit Token</p>
        <p className="-mb-3">Token ID</p>
        <Input
          placeholder="Token ID"
          value={formData?.tokenId || ''}
          onChange={(e) => setFormData({ ...formData, tokenId: e.target.value } as Tokens)}
          className='max-w-xl'
        />
        <p className="-mb-3">Token Logo</p>
        <Input
          placeholder="Token Logo"
          value={formData?.tokenLogo || ''}
          onChange={(e) => setFormData({ ...formData, tokenLogo: e.target.value } as Tokens)}
          className='max-w-xl'
        />
        <p className="-mb-3">Token Name</p>
        <Input
          placeholder="Token Name"
          value={formData?.tokenName || ''}
          onChange={(e) => setFormData({ ...formData, tokenName: e.target.value } as Tokens)}
          className='max-w-xl'
        />
        <p className="-mb-3">Token Chain</p>
        <Input
          placeholder="Token Chain"
          value={formData?.tokenChain.join(', ') || ''}
          onChange={(e) => setFormData({ ...formData, tokenChain: e.target.value.split(',').map(chain => chain.trim()) } as Tokens)}
          className='max-w-xl'
        />
        <p className="-mb-3">Token Symbol</p>
        <Input
          placeholder="Token Symbol"
          value={formData?.tokenSymbol || ''}
          onChange={(e) => setFormData({ ...formData, tokenSymbol: e.target.value } as Tokens)}
          className='max-w-xl'
        />
        <p className="-mb-3">Contract Address</p>
        <Input
          placeholder="Contract Address"
          value={formData?.contractAddress || ''}
          onChange={(e) => setFormData({ ...formData, contractAddress: e.target.value } as Tokens)}
          className='max-w-xl'
        />
        <p className="-mb-3">Status</p>
        <select
          value={formData?.status || ''}
          onChange={(e) => setFormData({ ...formData!, status: e.target.value as Tokens['status'] })}
          className='max-w-xl p-2 border rounded'
        >
          <option value="active">Active</option>
          <option value="pending">Pending</option>
          <option value="blocked">Blocked</option>
          <option value="hold">Hold</option>
          <option value="rejected">Rejected</option>
        </select>
        <Button onClick={handleSave} disabled={isLoading} className='max-w-xl mt-10'>
          {isLoading ? 'Saving...' : 'Save'}
        </Button>
      </Card>
    </div>
  )
}