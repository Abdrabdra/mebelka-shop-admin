import { Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetOneOrderQuery } from "../../../redux/store/rtk-api/order-rtk/orderEndpoints";
import ClientBox from "./ClientBox";
import OrderOneHeader from "./OrderOneHeader";
import ProductBox from "./ProductBox";

const OrderOne = () => {
  const params = useParams();
  const { id } = params;

  const { data } = useGetOneOrderQuery(id && id);

  return (
    <Stack spacing={2}>
      {data && <OrderOneHeader orderStatus={data.status} />}

      <Stack
        direction={"row"}
        justifyContent="space-between"
        sx={{ backgroundColor: "#fff", borderRadius: "10px", padding: "30px" }}
      >
        {data && (
          <>
            <ProductBox data={data.items} />
            <ClientBox data={data} />
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default OrderOne;
