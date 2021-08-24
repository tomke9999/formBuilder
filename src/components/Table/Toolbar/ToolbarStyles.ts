import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => ({
  searchClass: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  select: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  selectBtn: {
    width: "100px",
    "&: hover": {
      backgroundColor: "#ccc",
    },
  },
  textField: {
    width: "40%",
    marginRight: ".5rem",
    // fontSize: "1.5rem",
  },
  searchBtn: {
    cursor: "pointer",
  },
}));
