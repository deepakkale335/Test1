import React from "react";
import "./Form.css";

const FormComponent = ({
  inputStyle,
  inputTitle,
  required,
  disable,
  customChangeFunction,
  holder,
  labelStyle,
  errorMessage,
  error,
  maxLength,
  inputType,
  value,
}) => {
  return (
    <div>
      <label style={labelStyle}>{inputTitle}</label>
      <input
        type={inputType}
        style={inputStyle}
        required={required}
        disabled={disable}
        onChange={customChangeFunction}
        placeholder={holder}
        maxLength={maxLength}
        value={value}
      />
      {error && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default FormComponent;
