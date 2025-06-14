import React from 'react';

const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="sideBar-label-container">
      <input onChange={handleChange} value={value} type="radio" name={name} />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {titlez}
    </label>
  );
};

export default Input;
