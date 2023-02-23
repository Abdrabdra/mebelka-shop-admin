import { Box } from "@mui/material";
import { FC } from "react";

interface Props {
  image: File;
}

const PictureOne: FC<Props> = ({ image }) => {
  const blob = [image];

  return (
    <Box
      component="img"
      src={URL.createObjectURL(new Blob(blob, { type: "application/image" }))}
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
