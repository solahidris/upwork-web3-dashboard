import { useState, useEffect } from "react";
import NavigationMenu from "@/components/NavigationMenu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className={`flex min-h-screen`}>
      <NavigationMenu />
      <div className="w-full p-8">
        <Card className="p-8 flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="text-3xl font-bold">Home</p>
            <div className="flex gap-2">
            </div>
          </div>
          <div><Button>You are Logged In</Button></div>
        </Card>
      </div>
    </div>
  );
}