import { FormControl } from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
import React from "react";
import { Dispatch } from "react";
import { SetStateAction } from "react";

interface Props {
  value: Date;
  setValue: Dispatch<SetStateAction<Date>>;
  textFieldCSS: any;
  required?: boolean;
  label: string;
}

const DateSelect: React.FC<Props> = ({
  value,
  setValue,
  textFieldCSS,
  required = false,
  label,
}) => {
  return (
    <FormControl className={textFieldCSS}>
      <DatePicker
        required={required}
        autoOk
        variant="inline"
        label={label}
        value={value}
        onChange={(date: any) => setValue(date)}
        format="MM/dd/yyyy"
        error={value.toString().length < 1}
        helperText="Ovo polje je obavezno."
      />
    </FormControl>
  );
};

export default DateSelect;
