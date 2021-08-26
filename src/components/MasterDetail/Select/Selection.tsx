import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";

interface Props {
  selectionTitle: string;
  label: string;
  items: any[];
  multiple: boolean;
  required?: boolean;
}

const Selection: React.FC<Props> = ({
  selectionTitle,
  label,
  items,
  multiple = false,
  required = false,
}) => {
  const [select, setSelect] = useState("");
  const [multipleSelect, setMultipleSelect] = useState<any>([]);

  const handleChange = (e: ChangeEvent<any>) => {
    if (multiple) {
      setMultipleSelect(e.target.value);
    } else {
      setSelect(e.target.value);
    }
  };

  return (
    <FormControl style={{ width: "100%" }} required={required}>
      <InputLabel id={label}>{selectionTitle}</InputLabel>
      {multiple ? (
        <Select
          labelId={label}
          value={multipleSelect}
          onChange={handleChange}
          multiple={true}
          renderValue={(selected: any) => selected.join(", ")}
        >
          {items.map((item: any) => {
            return (
              <MenuItem key={item.id} value={item.value}>
                <Checkbox checked={multipleSelect.indexOf(item.value) > -1} />
                <ListItemText primary={item.value} />
              </MenuItem>
            );
          })}
        </Select>
      ) : (
        <Select labelId={label} value={select} onChange={handleChange}>
          {items.map((item: any) => (
            <MenuItem key={item.id} value={item.value}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      )}
    </FormControl>
  );
};

export default Selection;
