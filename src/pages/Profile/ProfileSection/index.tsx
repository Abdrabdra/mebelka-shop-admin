// library
import { Grid, Paper } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { logout } from "../../../redux/store/reducers/auth/auth.action";
import {
  setAuth,
  setStatus,
} from "../../../redux/store/reducers/auth/auth.slice";
import {
  useGetMyMarketQuery,
  useGetMyProfileQuery,
} from "../../../redux/store/rtk-api/profile-rtk/profileEndpoints";

import LeftSideBlock from "./LeftSideBlock";
import RightSideBlock from "./RightSideBlock";

const ProfileSection = () => {
  useEffect(() => {
    refetch();
  }, []);

  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, isError, error, refetch } = useGetMyProfileQuery("");

  const { data: marketData } = useGetMyMarketQuery(
    {
      userId: Number(data && data.id),
    },
    { skip: data === undefined ? true : false }
  );

  useEffect(() => {
    if (error && "status" in error && error.status === 401) {
      dispatch(logout());
    }
  }, [error]);

  return (
    <Grid container spacing={2} columns={4}>
      {data && marketData && (
        <>
          <LeftSideBlock
            data={{ secondName: data?.secondName, firstName: data?.firstName }}
          />
          <RightSideBlock data={data} marketData={marketData} />
        </>
      )}
    </Grid>
  );
};
export default ProfileSection;
