import { useEffect } from "react";

const UseEffect = ({ name }) => {
  const message = `Hello ${name}!`;

  useEffect(() => {
    document.title = `Greetings to ${name}`;
  }, [name]);

  return <div>{message}</div>;
};

export default UseEffect;
