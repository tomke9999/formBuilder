import React, { ChangeEvent, Dispatch } from "react";
import { Backdrop, Fade, Modal, TextField, Button } from "@material-ui/core";

import { useStyles } from "./EditModalStyles";
import { Column, Row } from "../Types";

interface Props {
  open: boolean;
  handleClose: () => void;
  column: any;
  editRow: any;
  changeRow: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: Dispatch<Row>;
}

const EditModal: React.FC<Props> = ({
  open,
  handleClose,
  column,
  editRow,
  changeRow,
  handleSubmit,
}) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form onSubmit={() => handleSubmit(editRow)}>
              <h2>Edit</h2>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {Object.keys(editRow).map((el: any) => {
                  return (
                    <TextField
                      key={el}
                      name={el}
                      value={editRow[el]}
                      onChange={changeRow}
                      label={column.map((col: Column) => {
                        if (col.field.toString() === el.toString()) {
                          return col.headerName;
                        }
                      })}
                    ></TextField>
                  );
                })}
                <Button
                  style={{ marginTop: "5%" }}
                  variant="contained"
                  color="primary"
                >
                  Potvrdi
                </Button>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default EditModal;
