import { Stack } from "@mui/material";
import MainBaseButton from "../../../components/Button/MainBaseButton/MainBaseButton";
import { MainButton } from "../../../components/styled-components/StyledButton";
import AnnouncementFilter from "./AnnouncementFilter";
import ContentList from "./ContentList";

const AnnouncementList = () => {
  return (
    <Stack>
      <Stack direction="row" justifyContent={"end"}>
        <MainButton
          sx={{ width: "200px", backgroundColor: "primary.main", mb: "20px" }}
        >
          Создать Товар
        </MainButton>
      </Stack>
      <AnnouncementFilter />
      <ContentList />
    </Stack>
  );
};

export default AnnouncementList;
