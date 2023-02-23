import { Icon, IconButton, Stack, Typography } from "@mui/material";

import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { MainButton } from "../../../../../../components/Button/MainBaseButton";
import AddIcon from "@mui/icons-material/Add";

import { useTypedSelector } from "../../../../../../redux/store";
import { setAnnounce } from "../../../../../../redux/store/reducers/announce/announce.slice";

import "./UploadFile.modules.scss";

const UploadFile = () => {
  const dispatch = useDispatch();
  const filePicker = useRef<any>(null);
  const selectedImages = useTypedSelector(
    (state) => state.announce.values.file
  );

  const handleChange = (e: any) => {
    const input = e.target;

    if (!input.files?.length) {
      return;
    }

    dispatch(setAnnounce({ file: selectedImages.concat(input.files[0]) }));
  };

  const handleAddImageClick = () => {
    filePicker.current.click();
  };

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      spacing={1}
      sx={{
        width: "130px",
        height: "85px",
        backgroundColor: "secondary.light",
        borderRadius: "10px",
      }}
    >
      <IconButton
        onClick={handleAddImageClick}
        sx={{ backgroundColor: "#fff", borderRadius: "10px" }}
      >
        <input
          type="file"
          ref={filePicker}
          className="hiddenImagePicker"
          onChange={handleChange}
          accept="image/*,.png,.jpg,.jpeg,.web"
        />

        <AddIcon />
      </IconButton>
      <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
        Добавить фото
      </Typography>
    </Stack>
  );
};

export default UploadFile;
