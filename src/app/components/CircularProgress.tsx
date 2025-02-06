"use client";
import { PieChart, Pie, Cell } from "recharts";

interface CircularProgressProps {
  percentage: number;
  label: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage, label }) => {
  const data = [
    { name: "Completed", value: percentage },
    { name: "Remaining", value: 100 - percentage },
  ];

  const COLORS = ["#4CAF50", "#E0E0E0"]; // Green for progress, Gray for remaining

  return (
    <div className="flex flex-col items-center">
      <PieChart width={120} height={120}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={50}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
      <p className="text-center font-semibold text-gray-700">{label}</p>
      <p className="text-xl font-bold text-green-600">{percentage}%</p>
    </div>
  );
};

export default CircularProgress;
