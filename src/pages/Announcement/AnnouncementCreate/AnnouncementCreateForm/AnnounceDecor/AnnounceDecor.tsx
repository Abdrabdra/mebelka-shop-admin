import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAnnounce } from "../../../../../redux/store/reducers/announce/announce.slice";
import { useGetProductDecorQuery } from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";
import { FormTitle } from "../AnnouncementCreateForm";

const AnnounceDecor = () => {
  const dispatch = useDispatch();
  const { data } = useGetProductDecorQuery("");

  const [decor, setDecor] = useState("");
  const handleChildChange = (event: SelectChangeEvent) => {
    setDecor(event.target.value as string);

    dispatch(setAnnounce({ decorId: event.target.value }));
  };

  return (
    <Stack spacing={1} sx={{ minWidth: 120 }}>
      <FormTitle title="Декор" />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Выбрать Декор</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={decor}
          label="Выбрать Декор"
          onChange={handleChildChange}
        >
          {data?.map((row) => (
            <MenuItem key={row.id} value={row.id}>
              {row.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default AnnounceDecor;
