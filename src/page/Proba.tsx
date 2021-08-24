import React, { useState } from "react";
import { useDispatch } from "react-redux";
import MasterDetail from "../components/MasterDetail/MasterDetail";
import { Row } from "../components/Table/Types";
import { data } from "../dummyData";
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

  const newData = data.map((row: any) => ({ ...row, id: row.korisnikId }));
  const [rows, setRows] = useState<Row[]>(newData);

  return (
    <div>
      <MasterDetail
        submitForm={submitForm}
        setRows={setRows}
        table
        form
        elements={Elements}
        columns={columns}
        rows={rows}
      />
    </div>
  );
};

export default Proba;
