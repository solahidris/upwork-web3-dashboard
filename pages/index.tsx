import { useState, useEffect } from "react";
import NavigationMenu from "@/components/NavigationMenu";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue } from "@/components/ui/select"

export default function Home() {
  return (
    <div className={`flex flex-col min-h-screen p-24`}>
      <NavigationMenu />
      <p className="text-5xl pt-8">Home</p>

      <div className="mt-8">
        <Card className="p-8 flex flex-col gap-4 bg-black text-white">
          <p className="text-5xl">You are Logged In</p>
        </Card>
      </div>

    </div>
  );
}