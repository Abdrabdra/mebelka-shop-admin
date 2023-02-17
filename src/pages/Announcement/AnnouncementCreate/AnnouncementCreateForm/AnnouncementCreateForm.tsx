import { FC } from "react";
import { Stack, Typography } from "@mui/material";

import AnnounceFile from "./AnnounceFile";
import AnnounceCategory from "./AnnounceCategory";
import AnnounceColor from "./AnnounceColor";
import AnnounceDecor from "./AnnounceDecor";
import AnnounceFrame from "./AnnounceFrame";
import AnnouncePrice from "./AnnouncePrice";
import AnnounceSizes from "./AnnounceSizes";
import AnnounceTitle from "./AnnounceTitle";
import AnnounceLaundryBoxes from "./AnnounceLaundryBoxes";
import AnnounceLiftingMechanism from "./AnnounceLiftingMechanism";
import AnnounceConfirmButton from "./AnnounceConfirmButton";
import AnnounceProduction from "./AnnounceProduction";
import AnnounceCity from "./AnnounceCity";
import AnnounceDiscount from "./AnnounceDiscount";

const AnnouncementCreateForm = () => {
  return (
    <Stack spacing={2.5}>
      <AnnounceFile />
      <AnnounceTitle />
      <AnnounceProduction />
      <AnnounceCity />
      <AnnouncePrice />
      <AnnounceDiscount />
      <AnnounceCategory />
      <AnnounceColor />
      <AnnounceSizes />
      <AnnounceFrame />
      <AnnounceDecor />
      <AnnounceLiftingMechanism />
      <AnnounceLaundryBoxes />

      <AnnounceConfirmButton />
    </Stack>
  );
};

export default AnnouncementCreateForm;

interface Props {
  title: string;
}

export const FormTitle: FC<Props> = ({ title }) => {
  return <Typography sx={{ color: "#B8B8B8" }}>{title}</Typography>;
};
