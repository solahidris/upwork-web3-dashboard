import salesData from "../data/overviewSalesData.json";
import Image from "next/image";

const OverviewSales = () => {
  return (
    <div className="">

          <div className="flex flex-col">

            <p className="font-semibold pb-1">Recent Sales</p>
            <p className="text-gray-500 text-sm mb-8">You made 265 sales this month.</p>

            {salesData.map((data,index)=>(
              <div className="flex flex-col lg:flex-row justify-between mb-8 lg:mb-6" key={index}>
                <div className="flex items-center gap-1 lg:gap-4 -ml-2">
                  <Image
                    src={data?.profileImage ? `/${data.profileImage}` : "/next.svg"}
                    alt="profilepicsales"
                    width={40}
                    height={40}
                    className="max-h-10 max-w-10"
                    />
                <div className="flex flex-col">
                  <p className="font-medium text-sm lg:text-base">{data?.name}</p>
                  <p className="text-gray-500 text-xs lg:text-sm">{data?.email}</p>
                </div>
                </div>
                <p className="font-medium text-sm lg:text-lg text-end">
                  {data?.amount > 0 ? '+' : ''}
                  {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data?.amount)}
                </p>
              </div>
            ))}

          </div>

    </div>
  );
};

export default OverviewSales;
