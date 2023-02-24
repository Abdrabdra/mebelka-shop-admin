import { Stack } from "@mui/material";
import { useNavigate, useRoutes } from "react-router-dom";
import MainBaseButton from "../../../components/Button/MainBaseButton/MainBaseButton";
import { MainButton } from "../../../components/styled-components/StyledButton";
import FilterBox from "./FilterBox";
import ContentList from "./ContentList";

const AnnouncementList = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/app/announcement/create");
  };

  return (
    <Stack>
      <Stack direction="row" justifyContent={"end"}>
        <MainButton
          onClick={handleClick}
          sx={{ width: "200px", backgroundColor: "primary.main", mb: "20px" }}
        >
          Создать Товар
        </MainButton>
      </Stack>

      <FilterBox />
      <ContentList />
    </Stack>
  );
};

export default AnnouncementList;
