import { useState, useEffect } from "react";
import NavigationMenu from "@/components/NavigationMenu";
// import CalendarDashboard from "@/components/CalendarDashboard";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue } from "@/components/ui/select";

export default function TokenPage() {
  return (
    <div className={`flex flex-col min-h-screen p-8`}>
      <NavigationMenu />

      <div className="mt-8">
        <Card className="p-8 flex flex-col gap-4">

          <div className="flex justify-between">
            <p className="text-3xl font-bold">Token Listing Page</p>
            <div className="flex gap-2">
              {/* <CalendarDashboard /> */}
            </div>
          </div>
          
          <div><Button>Button</Button></div>
          <div><Input placeholder="Input"></Input></div>
          <div><Badge>Badge</Badge></div>
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">ERC-20</SelectItem>
                <SelectItem value="dark">ERC-721</SelectItem>
              </SelectContent>
            </Select>
          </div>

        </Card>
      </div>

    </div>
  );
}