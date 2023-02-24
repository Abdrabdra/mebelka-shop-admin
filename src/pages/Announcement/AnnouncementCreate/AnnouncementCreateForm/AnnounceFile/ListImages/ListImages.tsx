import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { IconButton, Stack, Typography } from "@mui/material";

import { useTypedSelector } from "../../../../../../redux/store";
import { setAnnounce } from "../../../../../../redux/store/reducers/announce/announce.slice";

import PictureOne from "./PictureOne";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { FC } from "react";
import { useDeleteProductPhotoMutation } from "../../../../../../redux/store/rtk-api/product-rtk/productEndpoints";
import { IImages } from "../../../../../../types/Announcement/OneAnnouncement.type";

interface Props {
  prevData?: IImages[];
}

const ListImages: FC<Props> = ({ prevData }) => {
  const dispatch = useDispatch();

  if (prevData) {
    dispatch(setAnnounce({ serverFile: prevData }));
  }

  const selectedServerImages = useTypedSelector(
    (state) => state.announce.values.serverFile
  );
  const selectedImages = useTypedSelector(
    (state) => state.announce.values.file
  );

  const handleDeleteImage = (id: number) => {
    dispatch(
      setAnnounce({ file: selectedImages.filter((file, index) => index != id) })
    );
  };

  const [deletePhoto] = useDeleteProductPhotoMutation();

  const handleDeleteServerImage = (id: number) => {
    // query for deleting update image
    deletePhoto(id);
  };

  return (
    <Stack>
      <Typography>Первое изображение будет Главной</Typography>

      <Stack direction="row" spacing={1}>
        {selectedServerImages.map((row, index) => (
          <Stack spacing={1} key={index}>
            <Box sx={{ position: "relative", width: "150px" }}>
              <IconButton
                onClick={() => handleDeleteServerImage(row.id)}
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  marginLeft: "auto",
                  marginRight: "auto",
                  bottom: "-30px",
                  width: "30px",
                  height: "30px",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  borderRadius: "5px",
                  color: "#FF0000",
                }}
              >
                <DeleteOutlineIcon />
              </IconButton>

              <PictureOne serverImage={row.imageUrl} />
            </Box>
          </Stack>
        ))}

        {selectedImages.map((row, index) => (
          <Stack spacing={1} key={index}>
            <Box sx={{ position: "relative", width: "150px" }}>
              <IconButton
                onClick={() => handleDeleteImage(index)}
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  marginLeft: "auto",
                  marginRight: "auto",
                  bottom: "-30px",
                  width: "30px",
                  height: "30px",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  borderRadius: "5px",
                  color: "#FF0000",
                }}
              >
                <DeleteOutlineIcon />
              </IconButton>

              <PictureOne image={row} />
            </Box>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default ListImages;
