import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  data: any[];
  width: number;
  height: number;
  lines: any[];
  dataKey: string;
  gridStroke: string;
}

const LineGraph: React.FC<Props> = ({
  lines,
  data,
  width,
  height,
  dataKey,
  gridStroke,
}) => {
  return (
    <LineChart width={width} height={height} data={data}>
      {lines.map((line: any) => {
        return <Line {...line} />;
      })}
      <CartesianGrid stroke={gridStroke} />
      <XAxis dataKey={dataKey} />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  );
};

export default LineGraph;
