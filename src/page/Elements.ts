import { v4 as uuid } from "uuid";
import InputTextField from "../components/MasterDetail/InputTextField/InputTextField";
import OdDoDate from "../components/MasterDetail/OdDoDate/OdDoDate";

export const Elements = [
  {
    id: uuid(),
    value: OdDoDate,
  },
  {
    id: uuid(),
    value: InputTextField,
    props: {
      label: "Ugovor ID",
      required: true,
    },
  },
  {
    id: uuid(),
    value: InputTextField,
    props: {
      label: "Naziv Ime Prezime",
      required: true,
    },
  },
  {
    id: uuid(),
    value: InputTextField,
    props: {
      label: "Redni broj",
      required: true,
    },
  },
];
