import { Card } from "./ui/card";
import Image from "next/image";

const OverviewContent = () => {

  const overviewData = [
    {
      id:"1",
      title:"Total Revenue",
      iconSvg: "dollarsign.svg",
      description:"$45,231.89",
      secondDescription: "+20.1% from last month",
    },
    {
      id:"2",
      title:"Subscriptions",
      iconSvg: "people.svg",
      description:"+2350",
      secondDescription: "+180.1% from last month",
    },
    {
      id:"3",
      title:"Sales",
      iconSvg: "creditcard.svg",
      description:"+12,234",
      secondDescription: "+19% from last month",
    },
    {
      id:"4",
      title:"Active Now",
      iconSvg: "pulse.svg",
      description:"+573",
      secondDescription: "+201 since last hour",
    },
  ];

  return(
    <div className="flex flex-col gap-4 w-full">
      
      <div className="grid grid-cols-4 gap-4">
        {overviewData.map((data,index) => (
          <Card className="p-6" key={index}>
            <div className="flex justify-between pb-2">
              <p className="font-semibold">{data?.title}</p>
              <Image src={data?.iconSvg ? `/${data.iconSvg}` : "/next.svg"} alt="dollarsign" width={16} height={16} />
            </div>
            <p className="font-bold text-2xl">{data?.description}</p>
            <p className="text-xs text-gray-500">{data?.secondDescription}</p>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-8 gap-4">
        <Card className="p-6 col-span-5">
          <p className="font-semibold">Overview graph</p>
        </Card>
        <Card className="p-6 col-span-3">
          <p className="font-semibold">Recent sales</p>
        </Card>
      </div>

    </div>
  )
};

export default OverviewContent;