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
import { HeaderBlock, Poster } from "../mainStyle";

//pages
import ProfileSection from "./ProfileSection";
import { useGetMyProfileQuery } from "../../redux/store/rtk-api/profile-rtk/profileEndpoints";
import { setProfileId } from "../../redux/store/reducers/profile/profile.slice";
import { useDispatch } from "react-redux";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: profileData, isLoading, isError } = useGetMyProfileQuery("");
  if (profileData) {
    dispatch(setProfileId(profileData));
  }

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Box sx={{ overflow: "hidden" }}>
      <HeaderBlock>
        <Poster>Профиль</Poster>
      </HeaderBlock>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          {/* <Route index element={<EditPage />} /> */}
          {/*<Route index element={<ProfileSection />} />*/}
        </Routes>
      </Suspense>
    </Box>
  );
};

export default Profile;
