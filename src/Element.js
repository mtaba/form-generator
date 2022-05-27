import React from "react";
import Input from "./components/elements/Input";
import Select from "./components/elements/Select";
import CheckBox from "./components/elements/CheckBox";

const Element = ({
  field: {
    field_type,
    field_id,
    field_label,
    field_value,
    field_placeholder,
    field_options,
  },
}) => {
  switch (field_type) {
    case "text":
      return (
        <Input
          field_id={field_id}
          field_value={field_value}
          field_label={field_label}
          field_placeholder={field_placeholder}
        />
      );
    case "select":
      return (
        <Select
          field_id={field_id}
          field={field_value}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_options={field_options}
        />
      );
    case "checkbox":
      return (
        <CheckBox
          field_id={field_id}
          field={field_value}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_options={field_options}
        />
      );
    default:
      return null;
  }
};
export default Element;
