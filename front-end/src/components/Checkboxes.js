import React, { useState } from "react";

const CheckBoxBase = props => {
  const [state, setState] = useState({ checked: false });

  const handleCheckboxChange = e => {
    setState({
      ...state,
      checked: e.target.checked
    });
    props.onChange(e);
  };

  return (
    <div className="checkBox">
      <label htmlFor="checkBox">
        <input
          type="checkbox"
          checked={state.checked}
          onChange={handleCheckboxChange}
        />
        <span>{props.textValue}</span>
      </label>
    </div>
  );
};

export default CheckBoxBase;
