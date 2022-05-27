import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

function Select({ field_id, field_label, field_options }) {

  const {handleChange} = useContext(FormContext);
  return (
    <>
      <label className="form-check-label" htmlFor="exampleCheck1">
        {field_label}
      </label>

      <select
        className="form-select"
        aria-label="Default select example"
        id={field_id}
        onChange ={(e) => handleChange(field_id, e)}
      >
        <option selected>Open this select menu</option>
        {field_options.length > 0 &&
          field_options.map((option, i) => {
            return (
              <option key={i} value={option.option_label}>
                {option.option_label}
              </option>
            );
          })}
      </select>
    </>
  );
}

export default Select;
