import React from "react";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  // const handleClick =()=>{
  // onSubmit(inputValue);
  // }

  const handleInputChange = (e)=>{
  setInputValue(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <div>
      <form action="" onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search Photos"
        />
      </form>
      {/* <button onClick={handleClick}>Click me</button> */}
    </div>
  );
};

export default SearchBar;
