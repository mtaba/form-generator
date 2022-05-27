import React, { useEffect, useState } from "react";
import formJson from "./FormElement.json";
import Element from "./Element";
import { FormContext } from "./FormContext";

function App() {
  const [elements, setElements] = useState(null);

  useEffect(() => {
    setElements(formJson[0]);
  }, []);

  const { fields, page_label } = elements ?? {};

  const hanleSubmit = (e) => {
    e.preventDefault();
    console.log(elements);
  };

  // handle change when user change the value of input
  const handleChange = (id, event) => {
    const newElements = { ...elements };
    newElements.fields.forEach((field) => {
      const {field_id, field_type} = field;
      if (field_id === id) {
      switch (field_type) {
        case "checkbox":
            field.field_value = event.target.checked;
          break;
        default: 
          field.field_value = event.target.value;
          break;
      }
    }
      // update elements with new value
      setElements(newElements);
    });
    console.log("elemnts",elements);
  };

  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className="container">
        <h3>{page_label}</h3>
        <form>
          {fields
            ? fields.map((field, i) => <Element key={i} field={field} />)
            : null}
          <button type="submit" onClick={hanleSubmit} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </FormContext.Provider>
  );
}
export default App;
