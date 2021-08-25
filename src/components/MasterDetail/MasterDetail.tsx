import { Button } from "@material-ui/core";
import React, { Dispatch, SetStateAction } from "react";
import Table from "../Table/Table";
import { Row } from "../Table/Types";
import { style } from "./MasterDetailStyle";

interface Props {
  elements: any[];
  form?: boolean;
  table?: boolean;
  columns: any[];
  rows: Row[];
  submitForm: Dispatch<Row>;
  setRows: Dispatch<SetStateAction<Row[]>>;
}

const MasterDetail: React.FC<Props> = ({
  form = false,
  elements,
  table = false,
  columns,
  rows,
  setRows,
  submitForm,
}) => {
  const classes = style();

  return (
    <div
      style={{ display: "flex", width: "100%", justifyContent: "space-evenly" }}
    >
      {form && (
        <div className={classes.root}>
          <form
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3>Forma za filtriranje</h3>
            {elements.map((element: any) => {
              return (
                <div key={element.id} className={classes.input}>
                  {React.createElement(
                    element.value,
                    element.props && {
                      ...element.props,
                    }
                  )}
                </div>
              );
            })}
            <Button
              style={{ marginTop: "5%" }}
              variant="contained"
              color="primary"
            >
              Filtriraj
            </Button>
          </form>
        </div>
      )}
      {table && (
        <div className={classes.table}>
          <Table
            submitForm={submitForm}
            setRows={setRows}
            columns={columns}
            rows={rows}
            height={`700px`}
            width={`100%`}
          />
        </div>
      )}
    </div>
  );
};

export default MasterDetail;
