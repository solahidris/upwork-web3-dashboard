import NavigationMenu from "@/components/NavigationMenu";
import CalendarDashboard from "@/components/CalendarDashboard";
import SubmenuDashboard from "@/components/SubmenuDashboard";
import { Card } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";
import DarkModeButton from "@/components/DarkModeButton";
import useIsMobile from "@/hooks/useIsMobile";

export default function DashboardPage() {
  const { isDarkMode } = useTheme();
  const isMobile = useIsMobile();

  return (
    <div className={`flex min-h-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-black'}`}>
      <NavigationMenu />
      <div className={`w-full p-8 ${isMobile ? "mt-20" : "ml-[240px]"} `}>
        <Card className="p-8 flex flex-col gap-4">
          <div className={`flex justify-between`}>
            <span className="text-[28px] lg:text-3xl font-bold">Admin Dashboard</span>
            {!isMobile && 
              <div className="flex gap-4">
                <CalendarDashboard />
                <DarkModeButton />
              </div>
            }
          </div>
          {isMobile && <div className="mt-2 "><CalendarDashboard /></div>}
          <SubmenuDashboard />
        </Card>
      </div>

    </div>
  );
}