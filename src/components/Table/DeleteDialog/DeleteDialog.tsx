import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";

interface Props {
  open: boolean;
  handleClose: () => void;
  onClickDelete: any;
}

const DeleteDialog: React.FC<Props> = ({
  open,
  handleClose,
  onClickDelete,
}) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Upozorenje!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Da li zelete da izbrisete ovaj red?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              onClickDelete();
              handleClose();
            }}
            color="primary"
          >
            Da, zelim.
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Ne, vrati me nazad.
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteDialog;
