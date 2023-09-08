import { Routes, Route, BrowserRouter } from "react-router-dom";
import Products from "../pages/Products";

function UserRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default UserRoutes;
