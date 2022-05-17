import React from "react";

function Select({field_id, field_label, field_value, field_placeholder, field_options}) {
  return (
    <select class="form-select" aria-label="Default select example">
      <option selected>Open this select menu</option>
    { 
     field_options.length> 0 && field_options.map((option, i) => {
        return (
            <option key={i} value={option.option_label}>{option.option_label}</option>
        )
    })
    }
    </select>
  );
}

export default Select;
