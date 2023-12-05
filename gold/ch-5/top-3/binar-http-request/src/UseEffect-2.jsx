import { useEffect } from "react";

const RepeatMessage = ({ message }) => {
  useEffect(() => {
    const id = setInterval(() => {
      console.log(message);
    }, 2000);

    return () => {
      clearInterval(id);
    };
  }, [message]);

  return <div>I&apos;m logging to console {message}</div>;
};

export default RepeatMessage;
