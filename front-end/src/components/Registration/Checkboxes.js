import React from "react";

const CheckBoxBase = props => {
  return (
    <div className="checkBox">
      <label htmlFor="checkBox">
        <input
          type="checkbox"
          checked={props.currentValue}
          onChange={props.onChange}
          required
        />
        <span>{props.textValue}</span>
      </label>
    </div>
  );
};

export default CheckBoxBase;
