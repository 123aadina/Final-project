import React, { useState } from "react";

const CheckBoxBase = props => {
  const [state, setState] = useState({ checked: false });

  const handleCheckboxChange = e => {
    setState({
      ...state,
      checked: e.target.checked
    });
    console.log(e.target.checked);
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

const Checkboxes = () => {
  const [state, setState] = useState({ checked: false });

  const handleCheckboxChange = e => {
    setState({
      ...state,
      checked: e.target.checked
    });
    console.log(e.target.checked);
  };

  return (
    <div className="checkBoxes">
      <CheckBoxBase textValue="I agree"></CheckBoxBase>
      <CheckBoxBase textValue="I disagree"></CheckBoxBase>
    </div>
  );
};

export { Checkboxes, CheckBoxBase };
