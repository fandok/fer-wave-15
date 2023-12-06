import { useEffect, useState } from "react";
import RepeatMessage from "./UseEffect-2";

const UseEffect = ({ name }) => {
  const [value, setValue] = useState("");
  const message = `Hello ${name}!`;

  useEffect(() => {
    document.title = `Greetings to ${value}`;
  }, [value]);

  return (
    <>
      <h1>
        {" "}
        <input
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          placeholder="type your input"
        />
        {message}
      </h1>
      {value && <RepeatMessage message="hello world" />}
    </>
  );
};

export default UseEffect;
