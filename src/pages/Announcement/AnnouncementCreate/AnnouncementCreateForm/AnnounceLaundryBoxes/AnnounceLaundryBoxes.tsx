import { FormControlLabel, Stack, Switch } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../../../redux/store";
import { setAnnounce } from "../../../../../redux/store/reducers/announce/announce.slice";

const AnnounceLaundryBoxes = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);

    dispatch(setAnnounce({ laundryBoxes: event.target.checked }));
  };

  return (
    <Stack
      sx={{
        borderRadius: "10px",
        backgroundColor: "secondary.light",
        padding: "5px 10px",
      }}
    >
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        sx={{ justifyContent: "space-between" }}
        labelPlacement="start"
        label="Ящики для белья"
      />
    </Stack>
  );
};

export default AnnounceLaundryBoxes;
