import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import OverviewContent from "./OverviewContent";
import { useTheme } from "@/contexts/ThemeContext";

const SubmenuDashboard = () => {
  const { isDarkMode } = useTheme();

  return(
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className={`mb-2 ${isDarkMode ? "bg-gray-900" : "bg-gray-200"}`}>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger disabled value="analytics">Analytics</TabsTrigger>
        <TabsTrigger disabled value="reports">Reports</TabsTrigger>
        <TabsTrigger disabled value="notifications">Notifications</TabsTrigger>
      </TabsList>
        <TabsContent value="overview"><OverviewContent /></TabsContent>
        <TabsContent value="analytics">Analytics Content</TabsContent>
        <TabsContent value="reports">Reports Content</TabsContent>
        <TabsContent value="notifications">Notifications Content</TabsContent>
    </Tabs>
  )
};

export default SubmenuDashboard;