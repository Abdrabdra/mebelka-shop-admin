import { FC, useEffect } from "react";
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
import { useDispatch } from "react-redux";
import { refresh } from "../../../../redux/store/reducers/auth/auth.action";
import { AppDispatch } from "../../../../redux/store";
import { IOneAnnouncement } from "../../../../types/Announcement/IOneAnnouncement";
import AnnounceDescription from "./AnnounceDescription";

interface FormProps {
  forUpdate?: boolean;
  updateData?: IOneAnnouncement;
}

const AnnouncementCreateForm: FC<FormProps> = ({ forUpdate, updateData }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Stack spacing={2.5}>
      <AnnounceFile prevData={updateData?.images} />
      <AnnounceTitle prevData={updateData?.title} />
      <AnnounceProduction prevData={updateData?.info.production} />
      <AnnounceDescription prevData={updateData?.description} />
      <AnnounceCity prevData={updateData?.city.id} />
      <AnnouncePrice prevData={updateData?.price} />
      <AnnounceDiscount prevData={updateData?.discount} />
      <AnnounceCategory blocked={forUpdate ? true : false} />
      <AnnounceColor
        untouchedData={updateData?.colors}
        forUpdate={forUpdate}
        prevData={updateData?.colors.map((row) => row.id)}
      />
      <AnnounceSizes
        iheight={updateData?.info.height}
        ilength={updateData?.info.length}
        iwidth={updateData?.info.width}
      />
      <AnnounceFrame
        untouchedData={updateData?.info.frames}
        forUpdate={forUpdate}
        prevData={updateData?.info.frames.map((row) => row.id)}
      />
      <AnnounceDecor prevData={updateData?.info.decor.id} />
      <AnnounceLiftingMechanism prevData={updateData?.info.liftingMechanism} />
      <AnnounceLaundryBoxes prevData={updateData?.info.laundryBoxes} />

      <AnnounceConfirmButton forUpdate={forUpdate} />
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
