import { useState, useEffect } from "react";
import NavigationMenu from "@/components/NavigationMenu";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue } from "@/components/ui/select";

export default function DashboardPage() {
  return (
    <div className={`flex flex-col min-h-screen p-24`}>
      <NavigationMenu />
      <p className="text-5xl pt-8">Dashboard Login Page</p>

      <div className="mt-8">
        <Card className="p-8 flex flex-col gap-4">
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