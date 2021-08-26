export const data = [
  {
    label: "korisnici",
    name: "Januar",
    korisnici: 400,
    korisnici2: 200,
    amt: 2400,
  },
  {
    label: "korisnici",
    name: "Februar",
    korisnici: 500,
    korisnici2: 300,
    amt: 2400,
  },
  {
    label: "korisnici",
    name: "Mart",
    korisnici: 100,
    korisnici2: 500,
    amt: 2400,
  },
  {
    label: "korisnici",
    name: "April",
    korisnici: 400,
    korisnici2: 200,
    amt: 2400,
  },
  {
    label: "korisnici",
    name: "Maj",
    korisnici: 300,
    korisnici2: 100,
    amt: 2400,
  },
];

export const lines = [
  { key: 1, type: "monotone", dataKey: "korisnici", stroke: "#8884d8" },
  {
    key: 2,
    type: "monotone",
    dataKey: "korisnici2",
    stroke: "#456645",
  },
];

export const areas = [
  { key: 3, type: "monotone", dataKey: "korisnici", stroke: "#8884d8" },
  {
    key: 4,
    type: "monotone",
    dataKey: "korisnici2",
    stroke: "#456645",
  },
];

export const bars = [
  { key: 5, type: "monotone", dataKey: "korisnici", stroke: "#8884d8" },
  {
    key: 6,
    type: "monotone",
    dataKey: "korisnici2",
    stroke: "#456645",
  },
];

export const radars = [
  {
    name: "januar",
    key: 3,
    type: "monotone",
    dataKey: "korisnici",
    stroke: "#8884d8",
    fill: "#8884d8",
  },
  {
    name: "februar",
    key: 4,
    type: "monotone",
    dataKey: "korisnici2",
    stroke: "#456645",
    fill: "#456645",
  },
];
