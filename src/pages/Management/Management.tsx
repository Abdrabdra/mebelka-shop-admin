import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { Suspense } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { HeaderBlock, Poster } from "../mainStyle";

//pages
import { useGetMyProfileQuery } from "../../redux/store/rtk-api/profile-rtk/profileEndpoints";
import { setProfileId } from "../../redux/store/reducers/profile/profile.slice";
import { useDispatch } from "react-redux";
import ManagementSection from "./ManagementSection";
import Error from "../Error";

const Profile = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Box sx={{ overflow: "hidden" }}>
      <HeaderBlock>
        <Poster>Управление</Poster>
      </HeaderBlock>

      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route index element={<Navigate to="city" />} />

          <Route path={"city"} element={<ManagementSection />} />
          <Route path={"marka"} element={<ManagementSection />} />
          <Route path={"model"} element={<ManagementSection />} />

          <Route path={"body"} element={<ManagementSection />} />
          <Route path={"generation"} element={<ManagementSection />} />
          <Route path={"tags"} element={<ManagementSection />} />

          <Route path={"*"} element={<Error />} />
        </Routes>
      </Suspense>
    </Box>
  );
};

export default Profile;
