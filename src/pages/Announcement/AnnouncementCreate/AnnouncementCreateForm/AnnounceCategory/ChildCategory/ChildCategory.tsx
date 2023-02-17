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

const ChildCategory: FC<Props> = ({ parentId }) => {
  const dispatch = useDispatch();
  const { data } = useGetCategoryQuery(
    { parentId: parentId },
    { skip: parentId ? false : true }
  );

  const isParentSelected = useTypedSelector(
    (state) => state.announce.isSelected.parentCategory
  );

  const [child, setChild] = useState("");
  const handleChildChange = (event: SelectChangeEvent) => {
    setChild(event.target.value as string);

    dispatch(setAnnounce({ categoryId: event.target.value }));
  };

  return (
    <Stack spacing={1} sx={{ minWidth: 120 }}>
      <FormTitle title="Подкатегория" />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Выбрать подкатегорию
        </InputLabel>
        <Select
          disabled={isParentSelected ? false : true}
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

export default ChildCategory;
