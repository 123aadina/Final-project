import React from "react";

const DropdownList = props => {
  const [category, setCategory] = useState("");

  const handleCategoryChange = e => {
    setCategory(e.target.selectedIndex);
    //passing the change of the state of the dropdown list from registration form
    props.onChange(e.target.selectedIndex);
  };

  return (
    <div
      className=" dropdownList"
      value={props.currentValue}
      onChange={props.onChange}
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
