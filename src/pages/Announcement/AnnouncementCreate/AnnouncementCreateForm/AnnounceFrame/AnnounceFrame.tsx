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
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../../../redux/store";
import { setAnnounce } from "../../../../../redux/store/reducers/announce/announce.slice";
import { useGetProductFrameQuery } from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";
import { IFrames } from "../../../../../types/Announcement/OneAnnouncement.type";
import { FormTitle } from "../AnnouncementCreateForm";
import { MenuProps } from "./FrameCheckmarks.utils";

interface Props {
  prevData?: number[];
}

const AnnounceFrame: FC<Props> = ({ prevData }) => {
  const { data } = useGetProductFrameQuery("");
  const dispatch = useDispatch();

  if (prevData) {
    dispatch(setAnnounce({ frames: prevData }));
  }

  const selectedValues = useTypedSelector(
    (state) => state.announce.values.frames
  );

  const [frame, setFrame] = useState<number[]>(selectedValues);

  useEffect(() => {
    setFrame(selectedValues as number[]);
  }, [selectedValues]);

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
