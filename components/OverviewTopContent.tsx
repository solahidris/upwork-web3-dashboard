import overviewData from "../data/overviewTopData.json";
import Image from "next/image";
import { Card } from "./ui/card";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";

const OverviewTopContent = () => {
  const { isDarkMode } = useTheme();
  const [strokeColor, setStrokeColor] = useState("#000000")
  
  useEffect(() => {
    if (isDarkMode) {
      setStrokeColor("#ffffff");
    } else {
      setStrokeColor("#000000");
    }
  }, [isDarkMode]);


  return (
    <div className="grid grid-cols-4 gap-4">
      {overviewData.map((data, index) => (
        <Card className="p-6" key={index}>
          <div className="flex justify-between pb-2">
            <p className="font-semibold">{data?.title}</p>
            <Image
              src={data?.iconSvg ? (isDarkMode ? `/dashboard_icon/${data.iconSvgDarkMode}` : `/dashboard_icon/${data.iconSvg}`) : "/next.svg"}
              alt="dollarsign"
              width={16}
              height={16}
              className="text-red-300"
              style={{ stroke: strokeColor }}
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
