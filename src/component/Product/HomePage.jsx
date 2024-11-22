import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomePageUi from "./HomePageUi";
import { bUrl } from "../../constant";

const HomePage = () => {
  const [product, setProduct] = useState([]);
  let navigate = useNavigate();

  const getData = async () => {
    try {
      let result = await axios({
        url: `${bUrl}/product`,
        method: "GET",
      });

      setProduct(result.data.result);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);
  // console.log(product)

  let handleView = (id) => {
    return (e) => {
      navigate(`/product/${id}`);
    };
  };

  return (
    <div>
      <HomePageUi product={product} />
    </div>
  );
};

export default HomePage;
