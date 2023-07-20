import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../../../../redux/store";
import { setAnnounce } from "../../../../../../redux/store/reducers/announce/announce.slice";
import { useGetCategoryQuery } from "../../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";
import { FormTitle } from "../../AnnouncementCreateForm";

interface Props {
  parentId: string | number;
}

const ChildCategory2: FC<Props> = ({ parentId }) => {
  const dispatch = useDispatch();

  const lvl2Category = useTypedSelector(
    (state) => state.announce.values.lvl2Category
  );

  const { data } = useGetCategoryQuery(
    { parentId: lvl2Category },
    { skip: parentId ? false : true }
  );

  const isLvl2Category = useTypedSelector(
    (state) => state.announce.isSelected.lvl2Category
  );

  const [child, setChild] = useState("");
  const handleChildChange = (event: SelectChangeEvent) => {
    setChild(event.target.value as string);

    dispatch(setAnnounce({ lvl3Category: event.target.value }));
  };

  return (
    <Stack spacing={1} sx={{ minWidth: 120 }}>
      <FormTitle title="Подкатегория 3" />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Выбрать подкатегорию
        </InputLabel>
        <Select
          disabled={isLvl2Category ? false : true}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={child}
          label="Выбрать подкатегорию"
          onChange={handleChildChange}
        >
          {data?.data.map((row) => (
            <MenuItem key={row.id} value={row.id}>
              {row.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default ChildCategory2;
