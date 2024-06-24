import { useState, useEffect } from "react";
import NavigationMenu from "@/components/NavigationMenu";
// import CalendarDashboard from "@/components/CalendarDashboard";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue } from "@/components/ui/select";

import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
    },
    {
      id: "728ed52",
      amount: 10,
      status: "success",
      email: "2m@example.com",
    },
    {
      id: "489e1d4",
      amount: 12,
      status: "failed",
      email: "3example@gmail.com",
    },
    // ...
  ]
}

export default function TokenPage() {

  const [data, setData] = useState<Payment[]>([]);
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
        <Card className="p-8 flex flex-col gap-4">
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