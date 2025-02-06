"use client";

import { useEffect, useState } from "react";
import CircularProgress from "../../components/CircularProgress";
import { Progress } from "@/components/ui/progress";
import { FaBox, FaShippingFast, FaTimesCircle } from "react-icons/fa";

const DashboardStats = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevents hydration mismatch

  const circularStats = [
    { label: "Inventory", percentage: 75 },
    { label: "Dispatched Orders", percentage: 60 },
    { label: "Cancelled Orders", percentage: 20 },
  ];

  const linearStats = [
    {
      title: "Total Inventory",
      value: 1200,
      progress: 80,
      icon: <FaBox className="text-blue-500 text-3xl" />,
    },
    {
      title: "Dispatched Products",
      value: 850,
      progress: 70,
      icon: <FaShippingFast className="text-green-500 text-3xl" />,
    },
    {
      title: "Order Cancellations",
      value: 150,
      progress: 20,
      icon: <FaTimesCircle className="text-red-500 text-3xl" />,
    },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Circular Progress Bars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {circularStats.map((stat, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg">
            <CircularProgress percentage={stat.percentage} label={stat.label} />
          </div>
        ))}
      </div>

      {/* Linear Progress Bars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[180px]">
        {linearStats.map((stat, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg h-[180px]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-semibold">{stat.title}</span>
              {stat.icon}
            </div>
            <p className="text-3xl font-bold mt-14">{stat.value}</p>
            <Progress value={stat.progress} className="mt-2 h-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;
