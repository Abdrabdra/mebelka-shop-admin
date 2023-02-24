import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { FC } from "react";

import { PaperContainer, ProfileImageBox } from "./style";

interface Props {
  data: {
    firstName: string;
    secondName: string;
  };
}

const LeftSideBlock: FC<Props> = ({ data }) => {
  return (
    <Grid item xs={1} sx={{ height: "calc(100vh - 215px)" }}>
      <PaperContainer>
        <Stack spacing={2.5}>
          <ProfileImageBox />
          <Typography
            sx={{ fontSize: "28px", fontWeight: 600, color: "primary.main" }}
          >
            {`${data.secondName} ${data.firstName}`}
          </Typography>
        </Stack>
      </PaperContainer>
    </Grid>
  );
};

export default LeftSideBlock;
