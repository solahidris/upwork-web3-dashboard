import NavigationMenu from "@/components/NavigationMenu";
import CalendarDashboard from "@/components/CalendarDashboard";
import SubmenuDashboard from "@/components/SubmenuDashboard";
import { Card } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";

export default function DashboardPage() {
  const { darkMode, toggleDarkMode } = useTheme();
  
  return (
    <div className={`flex min-h-screen ${darkMode ? "darkTheme" : "lightTheme"}`}>
      <NavigationMenu />
      <div className="w-full p-8">
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