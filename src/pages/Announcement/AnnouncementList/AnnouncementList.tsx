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
    <Stack spacing={3}>
      <Stack direction="row" justifyContent={"end"}>
        <MainButton
          onClick={handleClick}
          sx={{
            backgroundColor: "primary.main",
            width: "275px",
            fontSize: "18px",
            fontWeight: 600,
          }}
        >
          Добавить новый товар
        </MainButton>
      </Stack>

      <FilterBox />
      <ContentList />
    </Stack>
  );
};

export default AnnouncementList;
