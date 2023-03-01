import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import {
  IMarketOrderItem,
  IOrderItemOne,
} from "../../../../types/Order/IMarketOrderItem";

interface Props {
  data: IOrderItemOne[];
}

const ProductBox: FC<Props> = ({ data }) => {
  return (
    <Stack spacing={2}>
      <Typography>Информация о Товаре</Typography>

      <Stack spacing={1}>
        {data.map((row) => (
          <Stack
            spacing={2}
            sx={{
              backgroundColor: "secondary.light",
              borderRadius: "10px",
              padding: "15px",
            }}
          >
            <Stack>
              <Typography>Артикул Заказа: {row.id}</Typography>
              <Typography>Количество: {row.qty}</Typography>
              <Typography>Итоговая цена: {row.totalPrice}</Typography>
            </Stack>

            <Stack sx={{ paddingLeft: "30px" }}>
              <Typography>Название Продукта: {row.product.title}</Typography>
              <Typography>Цена Продукта: {row.product.price}</Typography>
              <Typography>Скидка Продукта: {row.product?.discount}</Typography>
              <Typography>
                Подтверждение:{" "}
                {row.product.confirm ? "Подтвержден" : "Не рассмотрен"}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default ProductBox;
