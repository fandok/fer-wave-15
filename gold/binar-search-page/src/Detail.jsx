import { Link, useParams } from "react-router-dom";
import useDetail from "./useDetail";

const Detail = () => {
  const params = useParams();
  const { id, car } = params;

  const { detailData } = useDetail(id);

  return (
    <>
      <Link to="/">
        <div>Home</div>
      </Link>
      <div>Detail: {id}</div>
      <div>{car}</div>
      <div>Harga mobil: {detailData.price}</div>
    </>
  );
};

export default Detail;
