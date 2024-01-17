import axios from "axios";
import { useEffect, useState } from "react";

const useDetail = (id) => {
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api-car-rental.binaracademy.org/customer/car/${id}`
        );
        setDetailData(response.data);
      } catch (e) {
        console.error("Failed to fetch");
      }
    };

    fetchData();
  }, [id]);

  return { detailData };
};

export default useDetail;
