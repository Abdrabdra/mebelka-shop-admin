// library
import { Grid, Paper } from "@mui/material";

import LeftSideBlock from "./LeftSideBlock";
import RightSideBlock from "./RightSideBlock";

const ProfileSection = () => {
  const Item = (props: any) => <Paper {...props} />;

  return (
    <>
      <Grid
        container
        spacing={2}
        columns={4}
      >
        <LeftSideBlock />
        <RightSideBlock />
      </Grid>
    </>
  );
};
export default ProfileSection;
