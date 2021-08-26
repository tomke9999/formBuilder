import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  areas: any[];
  data: any[];
  width: number;
  height: number;
  dataKey: string;
  gridStroke: string;
}

const AreaGraph: React.FC<Props> = ({
  areas,
  data,
  width,
  height,
  dataKey,
  gridStroke,
}) => {
  return (
    <AreaChart width={width} height={height} data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
      <XAxis dataKey={dataKey} />
      <YAxis />
      <Tooltip />
      <Legend />
      {areas.map((area) => (
        <Area {...area} fill={area.stroke} />
      ))}
    </AreaChart>
  );
};

export default AreaGraph;
