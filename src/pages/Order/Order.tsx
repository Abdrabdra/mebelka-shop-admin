import { Box } from "@mui/material";
import { Suspense } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { HeaderBlock, Poster } from "../mainStyle";
import OrderList from "./OrderList";
import OrderOne from "./OrderOne";

const Order = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Box sx={{ overflow: "hidden" }}>
      <HeaderBlock>
        <Poster>Мои Заказы</Poster>
      </HeaderBlock>

      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route index element={<OrderList />} />

          <Route path={"one/:id"} element={<OrderOne />} />
        </Routes>
      </Suspense>
    </Box>
  );
};

export default Order;
