import { useState, useEffect } from "react";
import NavigationMenu from "@/components/NavigationMenu";
import CalendarDashboard from "@/components/CalendarDashboard";
import SubmenuDashboard from "@/components/SubmenuDashboard";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue } from "@/components/ui/select";

export default function DashboardPage() {
  return (
    <div className={`flex flex-col min-h-screen p-8`}>
      <NavigationMenu />

      <div className="mt-8">
        <Card className="p-8 flex flex-col gap-4">

          <div className="flex justify-between">
            <p className="text-3xl font-bold">Admin Dashboard</p>
            <div className="flex gap-2">
              <CalendarDashboard />
            </div>
          </div>
          
          <SubmenuDashboard />

        </Card>
      </div>

    </div>
  );
}