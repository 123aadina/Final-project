import React, { useState } from "react";

const DropdownList = () => {
  const [category, setCategory] = useState("");

  const handleCategoryChange = e => {
    setCategory(category);
  };

  return (
    <div
      className=" dropdownList"
      value={category}
      onChange={handleCategoryChange}
    >
      <select className="form-control" name="category">
        <option id="0">Childcare</option>
        <option id="1">Domestic Violence</option>
        <option id="2">Employment</option>
        <option id="3">Divorce</option>
        <option id="4">Sexual Abuse</option>
        <option id="5">Healthcare</option>
      </select>
    </div>
  );
};

export default DropdownList;
