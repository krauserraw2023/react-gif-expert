import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    const value = inputValue.trim();
    
    if (value.length < 1) {
      return;
    }

    onNewCategory(value.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
