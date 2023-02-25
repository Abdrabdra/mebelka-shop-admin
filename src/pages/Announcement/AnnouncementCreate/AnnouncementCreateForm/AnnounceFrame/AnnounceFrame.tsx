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
import DeleteFrame from "./DeleteFrame";
import { MenuProps } from "./FrameCheckmarks.utils";

interface Props {
  prevData?: number[];
  forUpdate?: boolean;
  untouchedData?: IFrames[];
}

const AnnounceFrame: FC<Props> = ({ prevData, forUpdate, untouchedData }) => {
  const { data } = useGetProductFrameQuery("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAnnounce({ frames: prevData }));
  }, [prevData]);

  const selectedValues = useTypedSelector(
    (state) => state.announce.values.frames
  );

  const [frame, setFrame] = useState<number[]>(selectedValues);

  useEffect(() => {
    setFrame(selectedValues as number[]);
  }, [selectedValues]);

  const handleChange = (event: SelectChangeEvent<typeof frame>, child: any) => {
    const {
      target: { value },
    } = event;

    if (forUpdate) {
      const selected = frame.filter((row) => row === child.props.value);

      if (
        prevData &&
        prevData.filter((row) => row === selected[0]).length > 0
      ) {
        console.log("Удалите объекты выше");
      } else {
        setFrame(value as number[]);
        dispatch(setAnnounce({ frames: value }));
      }
    } else {
      setFrame(value as number[]);
      dispatch(setAnnounce({ frames: value }));
    }
  };

  return (
    <Stack spacing={2}>
      <FormTitle title="Каркас" />

      {forUpdate && untouchedData && untouchedData.length > 0 && (
        <DeleteFrame untouchedData={untouchedData} />
      )}

      <FormControl fullWidth>
        <InputLabel id="demo-multiple-checkbox-label">
          Выберите каркас
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={frame}
          onChange={(e, child) => handleChange(e, child)}
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
