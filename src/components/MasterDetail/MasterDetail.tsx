import { Button, Grid } from "@material-ui/core";
import React, { Dispatch, SetStateAction } from "react";
import Table from "../Table/Table";
import { Row } from "../Table/Types";

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
  return (
    <Grid container justifyContent="space-evenly">
      {form && (
        <Grid item xs={3}>
          <form>
            <h3>Forma za filtriranje</h3>
            {elements.map((element: any) => {
              return (
                <div key={element.id}>
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
        </Grid>
      )}
      {table && (
        <Grid item xs={form ? 8 : 10}>
          <Table
            submitForm={submitForm}
            setRows={setRows}
            columns={columns}
            rows={rows}
            height={`700px`}
            width={`100%`}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default MasterDetail;
