/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function AutoComplete() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/list");
      const jsonData = await response.json();

      setProducts(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={products.map((option) => option.productName)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Input Product"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
      />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
