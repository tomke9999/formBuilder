import { v4 as uuid } from "uuid";
import InputTextField from "../components/MasterDetail/InputTextField/InputTextField";
import OdDoDate from "../components/MasterDetail/OdDoDate/OdDoDate";
import Selection from "../components/MasterDetail/Select/Selection";

export const Elements = [
  {
    id: uuid(),
    value: OdDoDate,
    required: true,
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
  {
    id: uuid(),
    value: Selection,
    props: {
      selectionTitle: "select",
      label: "Select",
      multiple: true,
      required: true,
      items: [
        {
          id: uuid(),
          value: "popusti",
          title: "Popusti",
        },
        {
          id: uuid(),
          value: "kvarovi",
          title: "Kvarovi",
        },
        {
          id: uuid(),
          value: "nesto",
          title: "Nesto",
        },
      ],
    },
  },
];
