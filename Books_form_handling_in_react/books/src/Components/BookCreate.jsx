import React from "react";
import { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // this line stop from reloading page when we hit enter or clicks on submit
    onCreate(inputValue);
  };
// console.log();

  return (
    <div className="book-create">
        <h3>Add Book</h3>
      <form onSubmit={handleSubmit}>
        <input
        className="input"
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter Book Title"
        />
        <div>
          <button className="button" onSubmit={handleSubmit}>Create</button>
        </div>
      </form>
    </div>
  );
};

export default BookCreate;
