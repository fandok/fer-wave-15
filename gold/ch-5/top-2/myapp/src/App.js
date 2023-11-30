import rightImg from "./float-right.png";
import styles from "./App.module.css";
import "./App.css";

function App() {
  return (
    <>
      <h1 className={styles.HeadingText}>Hello World</h1>
      <img className="image" src={rightImg} alt="test" />
    </>
  );
}

export default App;
