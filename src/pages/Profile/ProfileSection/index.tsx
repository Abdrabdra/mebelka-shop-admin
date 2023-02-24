// library
import { Grid, Paper } from "@mui/material";
import { useGetMyProfileQuery } from "../../../redux/store/rtk-api/profile-rtk/profileEndpoints";

import LeftSideBlock from "./LeftSideBlock";
import RightSideBlock from "./RightSideBlock";

const ProfileSection = () => {
  const { data, isLoading, isError } = useGetMyProfileQuery("");

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
