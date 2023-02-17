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
import { useTypedSelector } from "../../../../../redux/store";
import { setIsSelected } from "../../../../../redux/store/reducers/announce/announce.slice";
import { useGetCategoryQuery } from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";
import { FormTitle } from "../AnnouncementCreateForm";
import ChildCategory from "./ChildCategory";

const AnnounceCategory = () => {
  const dispatch = useDispatch();
  const { data } = useGetCategoryQuery("");

  const [parent, setParent] = useState("");
  const handleParentChange = (event: SelectChangeEvent) => {
    setParent(event.target.value as string);

    dispatch(setIsSelected({ parentCategory: true }));
  };

  return (
    <Stack spacing={2.5}>
      <Stack spacing={1} sx={{ minWidth: 120 }}>
        <FormTitle title="Категория" />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Выбрать категорию
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={parent}
            label="Выбрать категорию"
            onChange={handleParentChange}
          >
            {data?.data.map((row) => (
              <MenuItem value={row.id} key={row.id}>
                {row.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>

      <ChildCategory parentId={parent} />
    </Stack>
  );
};

export default AnnounceCategory;
