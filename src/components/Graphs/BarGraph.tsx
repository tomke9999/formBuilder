import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  bars: any[];
  data: any[];
  width: number;
  height: number;
  dataKey: string;
  gridStroke: string;
}

const BarGraph: React.FC<Props> = ({
  bars,
  data,
  width,
  height,
  dataKey,
  gridStroke,
}) => {
  return (
    <BarChart width={width} height={height} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={dataKey} />
      <YAxis />
      <Tooltip />
      <Legend />
      {bars.map((bar: any) => (
        <Bar {...bar} fill={bar.stroke} />
      ))}
    </BarChart>
  );
};

export default BarGraph;
