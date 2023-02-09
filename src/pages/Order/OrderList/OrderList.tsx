import { Stack } from "@mui/material";
import AnnouncementFilter from "./AnnouncementFilter";
import ContentList from "./ContentList";

const OrderList = () => {
  return (
    <Stack>
      <AnnouncementFilter />
      <ContentList />
    </Stack>
  );
};

export default OrderList;
