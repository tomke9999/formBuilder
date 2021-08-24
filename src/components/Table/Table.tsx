import React, {
  useEffect,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { DataGrid, GridCellParams } from "@material-ui/data-grid";

import LoadingOverlay from "./LoadingOverlay/LoadingOverlay";
import NoRowsOverlay from "./NoRowsOverlay/NoRowsOverlay";
import Toolbar from "./Toolbar/Toolbar";
import { escapeRegExp } from "./utils/EscapeRegex";
import { Column, Row } from "./Types";
import DeleteDialog from "./DeleteDialog/DeleteDialog";
import EditModal from "./EditModal/EditModal";

import TableActionComponent from "../MasterDetail/ActionComponent/TableActionComponent";

interface Props {
  columns: any;
  rows: Row[];
  setRows: Dispatch<SetStateAction<Row[]>>;
  height: string;
  width: string;
  rowsPerPage?: number[];
  loading?: boolean;
  submitForm: Dispatch<Row>;
}

const Table: React.FC<Props> = ({
  rows,
  setRows,
  columns,
  height,
  width,
  rowsPerPage = [5, 10, 20],
  loading = false,
  submitForm,
}) => {
  let onClickDelete;
  const [searchText, setSearchText] = useState("");
  const [newRows, setNewRows] = useState(rows);
  const [editRow, setEditRow] = useState<Row | {}>({});
  const [tableColumn, setTableColumn] = useState([]);
  const [initColumns, setInitColumns] = useState([
    ...columns,
    {
      field: "events",
      width: 150,
      renderCell: (params: GridCellParams) => {
        onClickDelete = () => {
          setRows(rows.filter((row: any) => row.id !== params.row.id));
        };
        return (
          <TableActionComponent
            setOpenDeleteDialog={setOpenDeleteDialog}
            setOpenEditDialog={setOpenEditDialog}
          />
        );
      },
    },
  ]);

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const handleCloseDelete = () => {
    setOpenDeleteDialog(false);
  };

  const handleCloseEdit = () => {
    setOpenEditDialog(false);
  };

  const changeRow = (e: ChangeEvent<HTMLInputElement>) => {
    setEditRow((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const event = columns.find((el: Column) => el.field === "events");

    if (event && tableColumn.length < 1) {
      setTableColumn(columns.slice(0, columns.length - 1));
    } else if (!event && tableColumn.length < 1) {
      setTableColumn(columns);
    }

    if (Object.keys(editRow).length === 0) {
      tableColumn.map((column: any) =>
        setEditRow((prevState) => ({
          ...prevState,
          [column.field]: "",
        }))
      );
    }
  }, [editRow, tableColumn]);

  const requestSearch = (searchValue: any) => {
    setSearchText(searchValue);

    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    if (searchValue === "") {
      return setNewRows(rows);
    }
    const filteredRows = rows.filter((row: any) => {
      return Object.keys(row).some((field: string) => {
        return searchRegex.test(row[field].toString());
      });
    });

    setNewRows(filteredRows);
  };

  return (
    <div
      style={{
        height,
        width,
      }}
    >
      <DataGrid
        components={{ LoadingOverlay, NoRowsOverlay, Toolbar }}
        columns={initColumns}
        rows={newRows}
        checkboxSelection={true}
        pageSize={10}
        loading={loading}
        rowsPerPageOptions={rowsPerPage}
        disableSelectionOnClick
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              requestSearch(event.target.value);
            },
            clearSearch: () => {
              requestSearch("");
            },
          },
        }}
      />
      <EditModal
        handleSubmit={submitForm}
        open={openEditDialog}
        handleClose={handleCloseEdit}
        column={tableColumn}
        editRow={editRow}
        changeRow={changeRow}
      />
      <DeleteDialog
        open={openDeleteDialog}
        handleClose={handleCloseDelete}
        onClickDelete={onClickDelete}
      />
    </div>
  );
};

export default Table;
