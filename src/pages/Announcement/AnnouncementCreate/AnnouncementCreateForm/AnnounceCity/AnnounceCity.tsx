import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAnnounce } from "../../../../../redux/store/reducers/announce/announce.slice";
import { useGetCityQuery } from "../../../../../redux/store/rtk-api/city-rtk/cityEndpoints";
import { FormTitle } from "../AnnouncementCreateForm";

const AnnounceCity = () => {
  const dispatch = useDispatch();
  const { data } = useGetCityQuery("");

  const [cityId, setCityId] = useState("");
  const handleChildChange = (event: SelectChangeEvent) => {
    setCityId(event.target.value as string);

    dispatch(setAnnounce({ cityId: event.target.value }));
  };

  return (
    <Stack spacing={1} sx={{ minWidth: 120 }}>
      <FormTitle title="Город" />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Выбрать Город</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cityId}
          label="Выбрать Город"
          onChange={handleChildChange}
        >
          {data?.map((row) =>
            row.cities.map((city) => (
              <MenuItem key={city.id} value={city.id}>
                {city.title}
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default AnnounceCity;
