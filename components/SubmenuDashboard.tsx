import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import OverviewContent from "./OverviewContent";

const SubmenuDashboard = () => {
  return(
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="mb-2">
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