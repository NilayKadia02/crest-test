import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";

export default function ActionAreaCard(props) {
  const { product, addToCart, error } = props;

  const inventoryList = useSelector(
    (state) => state.inventorySlice.inventoryList
  );

  const cartData = useSelector((state) => state.cartSlice.cartData);

  const getAvailableCount = () => {
    let inv = inventoryList.find((val) => val.id === product.id);
    if (inv.inventory && cartData[product.id]) {
      return inv.inventory - cartData[product.id];
    }
    return inv.inventory || 0;
  };

  return (
    <Card sx={{ minWidth: 345, m: 4 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/phone.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.label}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Grid container>
            <Grid item sm={9}>
              <Typography color={"blue"} align="left" fontSize={12}>
                {getAvailableCount()} left only.
              </Typography>
              <Typography color={"red"} align="left" fontSize={12}>
                {error[product.id]
                  ? "you can only add " +
                    product.limit +
                    " unit in single cart."
                  : ""}
              </Typography>
            </Grid>
            <Grid item sm={3}>
              <Button
                disabled={error[product.id]}
                variant="contained"
                size="small"
                onClick={() => addToCart(product.id)}
              >
                Add ${product.price}
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
