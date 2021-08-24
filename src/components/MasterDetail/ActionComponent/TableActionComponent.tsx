import { IconButton } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import React, { SetStateAction } from "react";
import { Dispatch } from "react";

interface Props {
  setOpenEditDialog: Dispatch<SetStateAction<boolean>>;
  setOpenDeleteDialog: Dispatch<SetStateAction<boolean>>;
}

const TableActionComponent: React.FC<Props> = ({
  setOpenEditDialog,
  setOpenDeleteDialog,
}) => {
  return (
    <>
      <IconButton
        color="primary"
        onClick={() => {
          setOpenEditDialog(true);
          // onClickEdit();
        }}
      >
        <Edit />
      </IconButton>
      <IconButton
        color="secondary"
        onClick={() => {
          setOpenDeleteDialog(true);
          // onClickDelete()
        }}
      >
        <Delete />
      </IconButton>
    </>
  );
};

export default TableActionComponent;
