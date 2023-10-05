import React from "react";

function Form({
  inputType,
  inputId,
  inputName,
  placeholdertext,
  ariaLabelName,
  cols,
  rows,
  value,
  onChange,
  inputLabel,
  labelFor
}) {
  return (
<div className="Form">
	<label className="Form-Label" htmlFor={labelFor}>
			{inputLabel}
	</label>
	<input
			className="Form-Input"
			type={inputType}
		
			id={inputId}
			name={inputName}
			placeholder={placeholdertext}
			aria-label={ariaLabelName}
			cols={cols}
			rows={rows}
			value={value} // Bind the value to the input
          onChange={onChange}
			required
 />
		</div>
  );
}

export default Form;
