import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
//@ts-ignore
import { ReactComponent as GrowSvg } from "../../../assets/svg/Vectorgrow.svg";

import { styled } from "@mui/system";

interface Props {
  text: string;
  price: string;
}
export const StyledUsers: React.FC<Props> = ({ text, price }) => (
  <Paper
    elevation={0}
    sx={{
      height: "150px",
      color: "primary.main",
      borderRadius: "10px",
      paddingTop: "20px",
      paddingLeft: "25px",
      paddingRight: "25px",
    }}
  >
    <StyledText>{text}</StyledText>
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontSize: "48px", fontWeight: 600 }}>
        {price}
      </Typography>
      <Stack direction={"row"} sx={{ display: "flex", alignItems: "center" }}>
        <GrowSvg />
        <Typography sx={{ ml: "7px", fontSize: "26px", fontWeight: 600 }}>
          {/* +5% */}
        </Typography>
      </Stack>
    </Stack>
  </Paper>
);
const StyledText = (props: any) => (
  <Typography
    sx={{
      color: "primary.main",
      fontSize: "20px",
      mb: "15px",
    }}
    {...props}
  />
);

export const MainContainer = styled("div")`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 284px;
  font-size: 3rem;
  flex-direction: column;
  background-color: rgb(240, 242, 245);
`;
