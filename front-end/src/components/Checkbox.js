import React, { useState } from "react";

const Checkbox = () => {
  const [state, setState] = useState({ checked: false });

  const handleCheckboxChange = e => {
    setState({
      ...state,
      checked: e.target.checked
    });
    console.log(e.target.checked);
  };

  return (
    <div>
      <label htmlFor="checkBox">
        <input
          type="checkbox"
          checked={state.checked}
          onChange={handleCheckboxChange}
        />
        <span>I don't have an email</span>
      </label>
    </div>
  );
};

export default Checkbox;
