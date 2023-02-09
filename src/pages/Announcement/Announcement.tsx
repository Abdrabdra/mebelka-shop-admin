import { Box } from "@mui/material";
import { Suspense } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { HeaderBlock, Poster } from "../mainStyle";

//pages
import Error from "../Error";
import AnnouncementList from "./AnnouncementList";
import AnnouncementOne from "./AnnouncementOne";

const Announcement = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Box sx={{ overflow: "hidden" }}>
      <HeaderBlock>
        <Poster>Мои товары</Poster>
      </HeaderBlock>

      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route index element={<Navigate to="list" />} />

          <Route path={"list"} element={<AnnouncementList />} />
          <Route path={"one/:announceId"} element={<AnnouncementOne />} />

          <Route path={"*"} element={<Error />} />
        </Routes>
      </Suspense>
    </Box>
  );
};

export default Announcement;
