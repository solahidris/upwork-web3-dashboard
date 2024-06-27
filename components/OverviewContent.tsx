import { Card } from "./ui/card";
import OverviewTopContent from "./OverviewTopContent";
import OverviewSales from "./OverviewSales";

const OverviewContent = () => {

  return(
    <div className="flex flex-col gap-4 w-full">
      
      <OverviewTopContent />      
      
      <div className="grid lg:grid-cols-8 gap-4">
        <Card className="p-6 lg:col-span-5">
          <p className="font-semibold">Overview</p>
        </Card>
        <Card className="p-6 lg:col-span-3">
          <OverviewSales />
        </Card>
      </div>

    </div>
  )
};

export default OverviewContent;