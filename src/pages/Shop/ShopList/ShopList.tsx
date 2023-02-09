import { Stack } from "@mui/material";
import AnnouncementFilter from "./AnnouncementFilter";
import ContentList from "./ContentList";

const ShopList = () => {
  return (
    <Stack>
      <AnnouncementFilter />
      <ContentList />
    </Stack>
  );
};

export default ShopList;
