import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Button, Card, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);
  const productList = useSelector((state) => state.productSlice.productList);

  const cartData = useSelector((state) => state.cartSlice.cartData);

  const toggleDrawer = () => {
    setState(!state);
  };

  const list = () => {
    let totalCartValue = 0;
    return (
      <Box sx={{ width: 350 }} role="presentation">
        {Object.keys(cartData).map((key) => {
          let product = productList.find((val) => val.id == key);
          let productValue = cartData[key] * product.price;
          totalCartValue += productValue;
          return (
            <Card sx={{ p: 2, m: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  {product.label}
                </Grid>
                <Grid item xs={3}>
                  {cartData[key]} * {product.price}
                </Grid>
                <Grid item xs={3}>
                  ${productValue}
                </Grid>
              </Grid>
            </Card>
          );
        })}
        {Object.keys(cartData).length === 0 && (
          <Typography color={"#fff"} sx={{ p: 2, m: 2 }}>
            No products are added in cart yet.
          </Typography>
        )}
        <Grid
          container
          spacing={2}
          sx={{
            p: 2,
            m: 2,
            position: "absolute",
            bottom: 4,
            color: "#fff",
            width: 330,
          }}
        >
          <Grid item xs={6}>
            Total Price
          </Grid>
          <Grid item xs={3}>
            {Object.keys(cartData).length} Items
          </Grid>
          <Grid item xs={3}>
            ${totalCartValue}
          </Grid>
        </Grid>
      </Box>
    );
  };

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer}>View Cart</Button>
        <Drawer
          anchor={"right"}
          open={state}
          onClose={toggleDrawer}
          PaperProps={{ style: { background: "#1c4475" } }}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
