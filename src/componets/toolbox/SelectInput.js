import React from "react";
import { Label ,Input, Alert } from "reactstrap";

const SelectInput = ({
  name,
  label,
  onChange,
  defaultOption,
  value,
  error,
  options,
}) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input    
      name={name}
      value={value}
      onChange={onChange}
            
      type="select"
    >
        
        <option value='' >{defaultOption}</option>
        {options.map(option=>{
            return(
                <option key={option.value} value={option.value}> {option.text}</option>
            )
        })}
       
      </Input>
      {error&&<Alert  color="danger" >{error}</Alert>}
    </div>
  );
};
export default SelectInput;
