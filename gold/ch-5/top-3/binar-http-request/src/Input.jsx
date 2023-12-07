import { useState } from "react";

const Input = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        placeholder="type your input"
      />
      <h1>hasil input: {value}</h1>
    </>
  );
};

export default Input;
