import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector } from "react-redux";

export default function ProductSelect(props) {
  const productList = useSelector((state) => state.productSlice.productList);
  const { handleChange, id } = props;
  return (
    <Autocomplete
      id="country-select-demo"
      options={productList}
      autoHighlight
      getOptionLabel={(option) => option.label}
      onChange={(e, value) => handleChange(value, id)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a Product"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
