import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { FC, useState } from "react";

import { FormTitle } from "../../../../../../pages/Announcement/AnnouncementCreate/AnnouncementCreateForm/AnnouncementCreateForm";
import { useTypedSelector } from "../../../../../../redux/store";
import { useGetCityQuery } from "../../../../../../redux/store/rtk-api/city-rtk/cityEndpoints";

interface Props {
  handleChangeQuery: (value: any) => void;
}

const ChooseCity: FC<Props> = ({ handleChangeQuery }) => {
  const { data } = useGetCityQuery("");

  const selectedValue = useTypedSelector(
    (state) => state.filterProduct.values.cityId
  );

  const [cityId, setCityId] = useState(String(selectedValue));

  const handleChildChange = (event: SelectChangeEvent) => {
    setCityId(event.target.value as string);

    handleChangeQuery({ cityId: event.target.value });
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

export default ChooseCity;
