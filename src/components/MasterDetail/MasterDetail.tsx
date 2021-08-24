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
    <div style={{ display: "flex", width: "100%" }}>
      {form && (
        <div className={!table ? classes.root100 : classes.root50}>
          <form>
            <h3>Forma za filtriranje</h3>
            {elements.map((element: any) => {
              console.log(element);

              return (
                <div className={classes.input}>
                  {React.createElement(element.value, null)}
                </div>
              );
            })}
          </form>
        </div>
      )}
      {table && (
        <div className={!form ? classes.table100 : classes.table50}>
          <Table
            submitForm={submitForm}
            setRows={setRows}
            columns={columns}
            rows={rows}
            height={`700px`}
            width={`70%`}
          />
        </div>
      )}
    </div>
  );
};

export default MasterDetail;
