import React , {useEffect, useState} from 'react';
import formJson from './FormElement.json'
import Element from './Element';
import Input from './components/elements/Input';


function App() {
  console.log('formjson',formJson);
  const [elements, setElements] = useState(null);
 
  useEffect(() => {
    setElements(formJson[0]);
  },[])

  const {fields, page_label} = elements??{}


  return (
    <div className="container">
      <h3>{page_label}</h3>
      
      <form>
      {fields ? fields.map((field,i)=><Element key={i} field={field} /> ) : null}  
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default App;
