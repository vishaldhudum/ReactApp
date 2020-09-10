// Libraries
import React from 'react';

export default function CustomInputField(props){

  return (
    <div className="field">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        className={props.errorMsg && "error"}
        autoComplete='off'
      />
      {props.errorMsg && (
        <div className="error-msg">{props.errorMsg}</div>
      )}
    </div>
  );
}