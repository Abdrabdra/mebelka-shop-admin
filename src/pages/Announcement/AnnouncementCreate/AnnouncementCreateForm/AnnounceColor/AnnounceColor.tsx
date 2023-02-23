import {
  Box,
  Checkbox,
  Divider,
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
import { StyledMainInput } from "../../../../../components/Input/StyledMainInput";
import { useTypedSelector } from "../../../../../redux/store";
import { setAnnounce } from "../../../../../redux/store/reducers/announce/announce.slice";
import { useGetProductColorQuery } from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";
import { FormTitle } from "../AnnouncementCreateForm";
import { MenuProps } from "./ColorCheckmarks.utils";

const AnnounceColor = () => {
  const { data } = useGetProductColorQuery("");
  const dispatch = useDispatch();

  const [color, setColor] = useState<number[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof color>) => {
    const {
      target: { value },
    } = event;

    setColor(value as number[]);
    dispatch(setAnnounce({ colors: value }));
  };

  return (
    <Stack spacing={1}>
      <FormTitle title="Цвет" />

      <FormControl fullWidth>
        <InputLabel id="demo-multiple-checkbox-label">
          Выберите цвета
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={color}
          onChange={handleChange}
          input={<OutlinedInput label="Выберите цвета" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {data?.map((row) => (
            <MenuItem key={row.id} value={row.id}>
              <Checkbox checked={color.indexOf(row.id) > -1} />
              <Stack direction="row" spacing={1}>
                <Typography>id: {row.id}</Typography>
                <ListItemText primary={row.title} />
              </Stack>
              <Box
                sx={{
                  backgroundColor: row.value,
                  border: "1px solid #000",
                  width: "15px",
                  height: "15px",
                }}
              />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default AnnounceColor;
