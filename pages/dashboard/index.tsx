import NavigationMenu from "@/components/NavigationMenu";
import { useState, useEffect } from "react";

export default function DashboardPage() {
  return (
    <div className={`flex flex-col min-h-screen p-24`}>
      <p className="text-5xl">Dashboard Login Page</p>
      <NavigationMenu />
    </div>
  );
}