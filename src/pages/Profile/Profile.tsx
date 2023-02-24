// library
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { Suspense } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";

import { HeaderBlock, Poster } from "../mainStyle";

import ProfileSection from "./ProfileSection";

const Profile = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <HeaderBlock>
        <Poster>Профиль</Poster>
      </HeaderBlock>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route index element={<ProfileSection />} />
        </Routes>
      </Suspense>
    </Box>
  );
};

export default Profile;
