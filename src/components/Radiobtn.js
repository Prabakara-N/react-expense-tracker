import { useState } from "react";

function RadioButtonExample() {
  const [radioValue, setRadioValue] = useState("");

  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = parseFloat(event.target.input.value);
    const displayValue = radioValue === "positive" ? inputValue : -inputValue;
    console.log(displayValue); // do something with displayValue
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="radio"
          name="radioButton"
          value="positive"
          checked={radioValue === "positive"}
          onChange={handleChange}
        />
        Positive
      </label>
      <label>
        <input
          type="radio"
          name="radioButton"
          value="negative"
          checked={radioValue === "negative"}
          onChange={handleChange}
        />
        Negative
      </label>
      <input type="number" name="input" />
      <button type="submit">Submit</button>
    </form>
  );
}
