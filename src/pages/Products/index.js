import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CardComponent from "../../components/Card/";
import GridComponent from "../../components/Grid/";
import CompareProducts from "../../components/CompareProducts";
import CartDrawer from "../../components/CartDrawer";
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart } from "../../store/thunk/cartThunk";
import { Box, Grid } from "@mui/material";

function Products() {
  const [value, setValue] = React.useState(0);
  const [error, setError] = React.useState({});
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productSlice.productList);

  const cartData = useSelector((state) => state.cartSlice.cartData);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(cartData);
  const validateAddToCart = (id) => {
    let totalCartCount = cartData[id] ? cartData[id] + 1 : 1;
    let product = productList.find((val) => val.id);

    if (product.limit < totalCartCount) {
      setError({
        ...error,
        [id]: true,
      });

      return false;
    } else {
      setError({
        ...error,
        [id]: false,
      });

      return true;
    }
  };

  const addToCart = (id) => {
    let validateError = validateAddToCart(id);

    if (validateError) {
      let cartProducts = {
        ...cartData,
        [id]: cartData[id] ? cartData[id] + 1 : 1,
      };

      dispatch(addProductToCart(cartProducts));
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 3,
          bgcolor: "#65e0f2",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="disabled tabs example"
          centered
        >
          <Tab label="Grid View" />
          <Tab label="Table View" />
        </Tabs>
        <Box sx={{ display: "flex" }}>
          <CartDrawer />
          <CompareProducts />
        </Box>
      </Box>
      {value === 0 ? (
        <Grid container>
          {productList.map((val, index) => (
            <Grid item sm={4} key={index}>
              <CardComponent
                product={val}
                addToCart={addToCart}
                error={error}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <GridComponent list={productList} addToCart={addToCart} />
      )}
    </>
  );
}

export default Products;
