import overviewData from "../data/overviewTopData.json";
import Image from "next/image";
import { Card } from "./ui/card";

const OverviewTopContent = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {overviewData.map((data, index) => (
        <Card className="p-6" key={index}>
          <div className="flex justify-between pb-2">
            <p className="font-semibold">{data?.title}</p>
            <Image
              src={data?.iconSvg ? `/${data.iconSvg}` : "/next.svg"}
              alt="dollarsign"
              width={16}
              height={16}
            />
          </div>
          <p className="font-bold text-2xl">{data?.description}</p>
          <p className="text-xs text-gray-500">{data?.secondDescription}</p>
        </Card>
      ))}
    </div>
  );
};

export default OverviewTopContent;
