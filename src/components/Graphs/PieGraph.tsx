import React, { useState } from "react";
import { Pie, PieChart } from "recharts";
import { renderActiveShape } from "./RenderPieShape";

interface Props {
  data: any[];
  width: number;
  height: number;
}

const PieGraph: React.FC<Props> = ({ data, width, height }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const onPieEnter = (_: any, index: number) => {
    setActiveIdx(index);
  };

  return (
    <PieChart width={width} height={height}>
      <Pie
        activeIndex={activeIdx}
        activeShape={renderActiveShape}
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="korisnici"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
  );
};

export default PieGraph;
