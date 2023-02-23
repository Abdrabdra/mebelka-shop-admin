import { Box, Divider, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { $image_api } from "../../../../api";
import { IOneAnnouncement } from "../../../../types/Announcement/OneAnnouncement.type";
import numberWithSpaces from "../../../../utils/numberWithSpaces";
import ProductInfo from "./ProductInfo";
import ShopInfo from "./ShopInfo";

interface Props {
  aData: IOneAnnouncement;
}

const AnnounceBox: FC<Props> = ({ aData }) => {
  return (
    <Stack
      direction="row"
      sx={{
        backgroundColor: "#fff",
        borderRadius: "10px",
        padding: "20px",
        gap: "20px",
      }}
    >
      <Stack sx={{ flex: 1.5 }}>
        <ShopInfo market={aData.market} />
      </Stack>

      <Stack sx={{ flex: 1 }}>
        <ProductInfo />
      </Stack>
    </Stack>
  );
};

export default AnnounceBox;
