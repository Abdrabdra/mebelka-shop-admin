import { Box } from "@mui/material";
import { FC } from "react";
import { $image_api } from "../../../../../../api";

interface Props {
  image?: File;
  serverImage?: string;
}

const PictureOne: FC<Props> = ({ image, serverImage }) => {
  const blob = image && [image];

  // console.log("SERVER IMAGE: ", serverImage);

  return (
    <Box
      component="img"
      src={
        image
          ? URL.createObjectURL(new Blob(blob, { type: "application/image" }))
          : `${$image_api}${serverImage}`
      }
      sx={{
        width: "150px",
        height: "85px",
        borderRadius: "10px",
        border: "1px solid #000",
        backgroundColor: "secondary.200",
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        objectPosition: "center",
      }}
    />
  );
};

export default PictureOne;
