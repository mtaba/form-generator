import React from 'react'

const Input = ({field_id, field_label, field_value, field_placeholder}) => {
  return (
    <div><label htmlFor="exampleInputEmail1">{field_label}</label>
    <input
      type="text"
      className="form-control"
      id={field_id }
      aria-describedby="emailHelp"
      placeholder={field_placeholder? field_placeholder: '' }
      value={field_value}
    />
    <small>this is a test</small>
    </div>
  )
}

export default Input