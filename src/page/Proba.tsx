import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AreaGraph from "../components/Graphs/AreaGraph";
import BarGraph from "../components/Graphs/BarGraph";
import LineGraph from "../components/Graphs/LineGraph";
import PieGraph from "../components/Graphs/PieGraph";
import RadarGraph from "../components/Graphs/RadarGraph";
import MasterDetail from "../components/MasterDetail/MasterDetail";
import { Row } from "../components/Table/Types";
import { data as dummyData } from "../dummyData";
import { areas, bars, data, lines, radars } from "./data";
import { Elements } from "./Elements";

const Proba: React.FC = () => {
  const columns = [
    {
      field: "korisnikId",
      headerName: "Korisnik ID",
      width: 150,
    },
    {
      field: "nazivImePrezime",
      headerName: "Naziv Ime Prezime",
      width: 300,
    },
    {
      field: "mobilniTelefon",
      headerName: "Mobilni Telefon",
      width: 200,
    },
    {
      field: "poruka",
      headerName: "Poruka",
      width: 400,
    },
  ];

  // const dispatch = useDispatch<Row>();

  const submitForm = (values: Row) => {
    // dispatch()
  };

  const newData = dummyData.map((row: any) => ({ ...row, id: row.korisnikId }));
  const [rows, setRows] = useState<Row[]>(newData);

  return (
    <div style={{ width: "100%" }}>
      <MasterDetail
        submitForm={submitForm}
        setRows={setRows}
        table
        form
        elements={Elements}
        columns={columns}
        rows={rows}
      />
      <LineGraph
        dataKey={"name"}
        lines={lines}
        data={data}
        width={600}
        height={300}
        gridStroke={"#ccc"}
      />
      <AreaGraph
        dataKey={"name"}
        areas={areas}
        data={data}
        width={600}
        height={300}
        gridStroke={"#ccc"}
      />
      <BarGraph
        bars={bars}
        data={data}
        width={600}
        height={300}
        dataKey={`name`}
        gridStroke={`#ccc`}
      />
      <PieGraph data={data} width={600} height={300} />
      <RadarGraph data={data} dataKey={"name"} radars={radars} />
    </div>
  );
};

export default Proba;
