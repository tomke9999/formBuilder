import { IconButton, TextField } from "@material-ui/core";
import { GridToolbar } from "@material-ui/data-grid";
import { Search, Clear } from "@material-ui/icons";
import React from "react";
import { ChangeEvent } from "react";
import { styles } from "./ToolbarStyles";

interface Props {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  clearSearch: () => void;
}

const Toolbar: React.FC<Props> = ({ value, onChange, clearSearch }) => {
  const classes = styles();
  return (
    <div className={classes.searchClass}>
      <div className={classes.select}>
        <GridToolbar />
      </div>
      <TextField
        variant="outlined"
        value={value}
        size="medium"
        onChange={onChange}
        placeholder="Pretraga..."
        className={classes.textField}
        InputProps={{
          startAdornment: (
            <Search fontSize="small" className={classes.searchBtn} />
          ),
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: value ? "visible" : "hidden" }}
              onClick={clearSearch}
            >
              <Clear fontSize="small" />
            </IconButton>
          ),
        }}
      />
    </div>
  );
};

export default Toolbar;
