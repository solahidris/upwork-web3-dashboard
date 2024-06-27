import { useState, useEffect } from "react";
import NavigationMenu from "@/components/NavigationMenu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";
import DarkModeButton from "@/components/DarkModeButton";
import useIsMobile from "@/hooks/useIsMobile";

export default function Home() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const isMobile = useIsMobile();

  return (
    <div className={`flex min-h-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-black'}`}>
      <NavigationMenu />
      <div className={`w-full p-8 ${isMobile ? "mt-20" : "ml-[240px]"} `}>
        <Card className="p-8 flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="text-3xl font-bold">Home</p>
            <div className="flex gap-2">
              {!isMobile && <DarkModeButton />}
            </div>
          </div>
          <div><Button>You are Logged In</Button></div>
        </Card>
      </div>
    </div>
  );
}