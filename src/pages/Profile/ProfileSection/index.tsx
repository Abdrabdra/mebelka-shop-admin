// library
import { Grid, Paper } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useTypedSelector } from "../../../redux/store";
import { logout } from "../../../redux/store/reducers/auth/auth.action";
import {
  setAuth,
  setStatus,
} from "../../../redux/store/reducers/auth/auth.slice";
import { setUserMarketId } from "../../../redux/store/reducers/user/user.slice";
import {
  useGetMyMarketQuery,
  useGetMyProfileQuery,
} from "../../../redux/store/rtk-api/profile-rtk/profileEndpoints";

import LeftSideBlock from "./LeftSideBlock";
import RightSideBlock from "./RightSideBlock";

const ProfileSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, isError, error, refetch } = useGetMyProfileQuery("");

  useEffect(() => {
    refetch();
  }, []);

  const { data: marketData } = useGetMyMarketQuery(
    {
      userId: Number(data && data.user.id),
    },
    { skip: data === undefined ? true : false }
  );

  useEffect(() => {
    dispatch(setUserMarketId(marketData?.data[0].id));
  }, [marketData]);

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
