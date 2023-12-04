import styles from "./contoh.module.css";

function Contoh() {
  const printLog = () => {
    console.log("testing");
  };

  return (
    <>
      <button onClick={printLog} className={styles.btn}>
        Berubah
      </button>
      <button className={styles["btn-success"]}>Berubah</button>
      <button className={styles["btn-sm"]}>Berubah</button>
    </>
  );
}

export default Contoh;
