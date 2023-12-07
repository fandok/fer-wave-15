import { useState } from "react";

export default function UseState() {
  const [state, setState] = useState("brachio");

  const handleChange = () => {
    setState("t-rex");
  };

  return (
    <div>
      <h1>Hello Devsaurus</h1>
      <p>My Name is {state}</p>
      <button onClick={handleChange}>Change Name</button>
    </div>
  );
}
