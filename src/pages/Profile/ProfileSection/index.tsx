// library
import { Grid, Paper } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setAuth,
  setStatus,
} from "../../../redux/store/reducers/auth/auth.slice";
import { useGetMyProfileQuery } from "../../../redux/store/rtk-api/profile-rtk/profileEndpoints";

import LeftSideBlock from "./LeftSideBlock";
import RightSideBlock from "./RightSideBlock";

const ProfileSection = () => {
  const { data, isLoading, isError, error } = useGetMyProfileQuery("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (error && "status" in error && error.status === 401) {
      localStorage.removeItem("access_token");
      dispatch(setAuth(false));
    }
  }, [error]);

  return (
    <Grid container spacing={2} columns={4}>
      {data && (
        <>
          <LeftSideBlock
            data={{ secondName: data?.secondName, firstName: data?.firstName }}
          />
          <RightSideBlock data={data} />
        </>
      )}
    </Grid>
  );
};
export default ProfileSection;
