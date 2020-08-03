import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import WineDetails from "./WineDetails";

const Wine = () => {
  let { wineId } = useParams();
  const [data, setData] = useState(null);

  async function getWineByID() {
    try {
      const response = await axios.get(
        `http://myapi-profstream.herokuapp.com/api/6054d6/wines/${wineId}`
      );
      setData(response.data);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getWineByID();
  }, []);

  return (
    <div>
        {/* { data ? <BookDetails book={ data } /> : "Retrieving book details..." } */}
        { data ?( 
      <WineDetails
        name={data.name}
        year={data.year}
        grapes={data.grapes}
        country={data.country}
        region={data.region}
        desc={data.description}
        pic={data.picture}
        price={data.price}
      />)
        : "Loading..."}
    </div>
  );
};

export default Wine;
