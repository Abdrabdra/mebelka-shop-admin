import { Box } from "@mui/material";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { HeaderBlock, Poster } from "../mainStyle";
import ShopList from "./ShopList";
import ShopOne from "./ShopOne";

const Shop = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <HeaderBlock>
        <Poster>Магазины</Poster>
      </HeaderBlock>

      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route index element={<ShopList />} />

          <Route path={":id"} element={<ShopOne />} />
        </Routes>
      </Suspense>
    </Box>
  );
};

export default Shop;
