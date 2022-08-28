// hook kullanim ornegi
import React from "react";
import { Label, Input, Alert } from "reactstrap";
const TextInput = ({ name, label, onChange, placeHolder, value, error }) => {
  return (
        <div>
          <Label htmlFor={name}>{label}</Label>
          <Input
            name={name}
            placeholder={placeHolder}
            value={value}
            type="text"
            onChange={onChange}
          />
          {error&&<Alert  color="danger" >{error}</Alert>}
    </div>
  );
};

export default TextInput;
