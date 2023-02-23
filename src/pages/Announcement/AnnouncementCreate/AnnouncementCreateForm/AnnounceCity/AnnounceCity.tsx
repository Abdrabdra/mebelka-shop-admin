import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../../../redux/store";
import { setAnnounce } from "../../../../../redux/store/reducers/announce/announce.slice";
import { useGetCityQuery } from "../../../../../redux/store/rtk-api/city-rtk/cityEndpoints";
import { FormTitle } from "../AnnouncementCreateForm";

interface Props {
  prevData?: number;
}

const AnnounceCity: FC<Props> = ({ prevData }) => {
  const dispatch = useDispatch();
  const { data } = useGetCityQuery("");

  if (prevData) {
    dispatch(setAnnounce({ cityId: prevData }));
  }

  const selectedCityId = useTypedSelector(
    (state) => state.announce.values.cityId
  );

  const [cityId, setCityId] = useState(String(selectedCityId));

  useEffect(() => {
    setCityId(String(selectedCityId));
  }, [selectedCityId]);

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
          value={cityId && cityId}
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
