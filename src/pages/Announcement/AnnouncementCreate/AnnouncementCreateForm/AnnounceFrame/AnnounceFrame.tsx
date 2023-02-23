import {
  Box,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../../../redux/store";
import { setAnnounce } from "../../../../../redux/store/reducers/announce/announce.slice";
import { useGetProductFrameQuery } from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";
import { FormTitle } from "../AnnouncementCreateForm";
import { MenuProps } from "./FrameCheckmarks.utils";

const AnnounceFrame = () => {
  const { data } = useGetProductFrameQuery("");
  const dispatch = useDispatch();

  const [frame, setFrame] = useState<number[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof frame>) => {
    const {
      target: { value },
    } = event;
    setFrame(value as number[]);
    dispatch(setAnnounce({ frames: value }));
  };

  return (
    <Stack spacing={1}>
      <FormTitle title="Каркас" />

      <FormControl fullWidth>
        <InputLabel id="demo-multiple-checkbox-label">
          Выберите каркас
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={frame}
          onChange={handleChange}
          input={<OutlinedInput label="Выберите каркас" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {data?.map((row) => (
            <MenuItem key={row.id} value={row.id}>
              <Checkbox checked={frame.indexOf(row.id) > -1} />
              <Stack direction="row" spacing={1}>
                <Typography>id: {row.id}</Typography>
                <ListItemText primary={row.title} />
              </Stack>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default AnnounceFrame;
