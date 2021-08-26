import React from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

interface Props {
  data: any[];
  dataKey: string;
  radars: any[];
}

const RadarGraph: React.FC<Props> = ({ data, dataKey, radars }) => {
  return (
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey={dataKey} />
      <PolarRadiusAxis />
      {radars.map((radar: any) => (
        <Radar {...radar} />
      ))}
    </RadarChart>
  );
};

export default RadarGraph;
