import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { HEADERS } from "./constants";
import { formatCurrency } from "./helpers";
import styles from "./App.module.css";

const PLACEHOLDER_URL = "https://fakeimg.pl/270x160";
const LIST_URL = "https://api-car-rental.binaracademy.org/admin/v2/car";

const Car = ({ id, name, image, price }) => (
  <div key={id}>
    <img width={270} height={160} src={image || PLACEHOLDER_URL} alt={name} />
    <div>{name}</div>
    <div>{formatCurrency(price)} / hari</div>
    <div className={styles.carBackground}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.{" "}
    </div>
    <Button>
      <Link to={`detail/${id}`}>Pilih Mobil</Link>
    </Button>
  </div>
);

const App = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(LIST_URL, {
        headers: HEADERS,
      })
      .then((response) => {
        setList(response.data.cars);
      });
  }, []);

  const handleSubmit = () => {
    axios
      .get(LIST_URL, {
        headers: HEADERS,
        params: { name: value },
      })
      .then((response) => {
        setList(response.data.cars);
      });
  };

  return (
    <>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        type="text"
        placeholder="name car"
      />
      <button onClick={handleSubmit}>search</button>
      <div>
        {list.length > 0 ? (
          <>
            <Car car={list[2]} />
            {list.map((car) => (
              <Car key={car.id} {...car} />
            ))}
          </>
        ) : (
          <h1>loading...</h1>
        )}
      </div>
    </>
  );
};

export default App;
