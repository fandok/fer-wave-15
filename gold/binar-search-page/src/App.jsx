import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styles from "./App.module.css";
import axios from "axios";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Helmet } from "react-helmet-async";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [price, setPrice] = useState(0);
  const [cars, setCars] = useState([]);

  const { pathname, hash, key } = useLocation();

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("name"));
  console.log(searchParams.get("price"));

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

  const handleClick = async () => {
    const queryString = new URLSearchParams({ name: input, price }).toString();
    navigate(`/detail?${queryString}`);
    // try {
    //   const response = await axios.get(
    //     "https://api-car-rental.binaracademy.org/admin/v2/car",
    //     {
    //       headers: {
    //         access_token:
    //           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
    //       },
    //       params: {
    //         name: input,
    //         minPrice: price,
    //       },
    //     }
    //   );
    //   setCars(response.data.cars);
    // } catch (e) {
    //   console.error("Failed to fetch");
    // }
  };

  return (
    <>
      <Helmet>
        <title>Test halaman app</title>
      </Helmet>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className={`logo react ${styles.reactLogo}`}
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="minPrice"
        type="number"
      />
      <button onClick={handleClick}>Search</button>
      <div>
        {cars.map((car) => (
          <Link
            style={{
              cursor: "pointer",
              color: "initial",
            }}
            key={car.id}
            to={`/detail/${car.id}`}
          >
            <span
              onClick={() => {
                console.log(car.id);
              }}
            >
              {car.name} ||{" "}
            </span>
          </Link>
        ))}
      </div>
      <div style={{ height: "100vh" }} className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p id="docs" className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
