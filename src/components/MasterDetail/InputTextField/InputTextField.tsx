import { FormControl, TextField } from "@material-ui/core";
import React, { useState } from "react";

interface Props {
  label: string;
  required: boolean;
}

const InputTextField: React.FC<Props> = ({ label, required = false }) => {
  const [value, setValue] = useState("");

  return (
    <FormControl style={{ width: "100%" }}>
      <TextField
        label={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
      />
    </FormControl>
  );
};

export default InputTextField;
