import { Paper, Stack, Typography } from "@mui/material";
import { FC } from "react";
//@ts-ignore
import { ReactComponent as GrowSvg } from "../../../../../assets/svg/Vectorgrow.svg";

interface Props {
  text: string;
  price: string;
}

const OneStatistic: FC<Props> = ({ text, price }) => {
  return (
    <Paper
      sx={{
        height: "100px",
        borderRadius: "10px",
        paddingY: "20px",
        paddingX: "25px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <Typography sx={{ mb: "15px" }}>{text}</Typography>
      <Stack justifyContent="space-between" alignItems="center" direction="row">
        <Typography variant="h48b">{price}</Typography>
        <Stack direction={"row"} alignItems="center">
          <GrowSvg />
          <Typography variant="h24b" sx={{ ml: "7px" }}>
            {/* +5% */}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default OneStatistic;
