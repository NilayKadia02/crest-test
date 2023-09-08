import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

import Button from "@mui/material/Button";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "label",
    headerName: "Product Name",
    width: 150,
    editable: true,
  },
  {
    field: "description",
    headerName: "Description",
    width: 150,
    editable: true,
  },
  {
    field: "",
    headerName: "Add to cart",
    width: 150,
    renderCell: () => (
      <strong>
        <Button variant="contained" size="small">
          Add to Cart
        </Button>
      </strong>
    ),
  },
];

export default function DataGridDemo(props) {
  const { list } = props;
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={list}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
