import React, { useState } from "react";
import DateSelect from "../DateSelect/DateSelect";
import { odDoDateStyles } from "./OdDateStyles";

const OdDoDate: React.FC = () => {
  const classes = odDoDateStyles();
  const [odDate, setOdDate] = useState(new Date());
  const [doDate, setDoDate] = useState(new Date());

  return (
    <>
      <DateSelect
        value={odDate}
        setValue={setOdDate}
        textFieldCSS={classes.textField}
        label={`Od date`}
      />
      <DateSelect
        value={doDate}
        setValue={setDoDate}
        textFieldCSS={classes.textField2}
        label={`Do date`}
      />
    </>
  );
};

export default OdDoDate;
