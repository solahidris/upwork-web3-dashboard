import NavigationMenu from "@/components/NavigationMenu";
import CalendarDashboard from "@/components/CalendarDashboard";
import SubmenuDashboard from "@/components/SubmenuDashboard";
import { Card } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";
import DarkModeButton from "@/components/DarkModeButton";

export default function DashboardPage() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex min-h-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-black'}`}>
      <NavigationMenu />
      <div className="w-full p-8 ml-[280px]">
        <Card className="p-8 flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="text-3xl font-bold">Admin Dashboard</p>
            <div className="flex gap-2">
              <CalendarDashboard />
              <DarkModeButton />
            </div>
          </div>
          <SubmenuDashboard />
        </Card>
      </div>

    </div>
  );
}