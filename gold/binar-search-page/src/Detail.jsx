import { Link, useParams } from "react-router-dom";
import useDetail from "./useDetail";
import { Helmet } from "react-helmet-async";

const Detail = () => {
  const params = useParams();
  const { id, car } = params;

  const { detailData } = useDetail(id);

  return (
    <>
      <Helmet>
        <title>Test halaman {id}</title>
      </Helmet>
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
