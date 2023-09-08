import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ProductSelect from "../autoComplete";
import { Grid } from "@mui/material";

export default function FormDialog() {
  const [selectedProduct, setSelectedProduct] = React.useState({
    first: 0,
    second: 0,
    third: 0,
  });
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setSelectedProduct({
      first: 0,
      second: 0,
      third: 0,
    });
  }, [open]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(selectedProduct);
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Compare Products
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth={"xl"}>
        <DialogTitle>Compare Products</DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={2}></Grid>

            <Grid item xs={10}>
              <Grid container sx={{ py: 2 }}>
                <Grid item xs={4} sx={{ px: 1 }}>
                  <ProductSelect
                    value={selectedProduct}
                    handleChange={(value, id) =>
                      setSelectedProduct({ ...selectedProduct, [id]: value })
                    }
                    id="first"
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    borderRight: "1px solid grey",
                    borderLeft: "1px solid grey",
                    px: 1,
                  }}
                >
                  <ProductSelect
                    value={selectedProduct}
                    handleChange={(value, id) =>
                      setSelectedProduct({ ...selectedProduct, [id]: value })
                    }
                    id="second"
                  />
                </Grid>
                <Grid item xs={4} sx={{ px: 1 }}>
                  <ProductSelect
                    value={selectedProduct}
                    handleChange={(value, id) =>
                      setSelectedProduct({ ...selectedProduct, [id]: value })
                    }
                    id="third"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {compareParams.map((val) => (
            <Grid container>
              <Grid item xs={2}>
                {val.label}
              </Grid>

              <Grid item xs={10}>
                <Grid container sx={{ py: 2 }}>
                  <Grid item xs={4} sx={{ px: 1 }}>
                    {selectedProduct.first
                      ? selectedProduct.first[val.key]
                      : "n.a."}
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      borderRight: "1px solid grey",
                      borderLeft: "1px solid grey",
                      px: 1,
                    }}
                  >
                    {selectedProduct.first
                      ? selectedProduct.second[val.key]
                      : "n.a."}
                  </Grid>
                  <Grid item xs={4} sx={{ px: 1 }}>
                    {selectedProduct.first
                      ? selectedProduct.third[val.key]
                      : "n.a."}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const compareParams = [
  { label: "Ram", key: "ram" },
  { label: "Camera", key: "cam" },
  { label: "Storage", key: "storage" },
  { label: "Processor", key: "processor" },
  { label: "Ratings", key: "rating" },
];
