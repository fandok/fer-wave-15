import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HEADERS } from "./constants";
import { formatCurrency } from "./helpers";
import styles from "./Detail.module.css";

const DETAIL_URL = "https://api-car-rental.binaracademy.org/admin/car";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`${DETAIL_URL}/${id}`, {
        headers: HEADERS,
      })
      .then((response) => {
        setData(response.data);
      });
  }, [id]);

  console.log(data);

  return (
    <div className={styles.Detail}>
      Hello World <Link to="/">balik</Link>
      <img width={270} height={160} src={data.image} alt={data.name} />
      <div>{data.name}</div>
      <div>{formatCurrency(data.price)}</div>
    </div>
  );
};

export default Detail;
