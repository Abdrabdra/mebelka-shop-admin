import { Stack } from "@mui/material";
import ContentList from "./ContentList";
import FilterBox from "./FilterBox";

const OrderList = () => {
  return (
    <Stack>
      <FilterBox />
      <ContentList />
    </Stack>
  );
};

export default OrderList;
