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
import { useGetCategoryQuery } from "../../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";
import ChildCategory from "./ChildCategory";

interface Props {
  handleChangeQuery: (value: any) => void;
}

const ChooseCategory: FC<Props> = ({ handleChangeQuery }) => {
  const { data } = useGetCategoryQuery("");

  const [parent, setParent] = useState("");
  const handleParentChange = (event: SelectChangeEvent) => {
    setParent(event.target.value as string);
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

      <ChildCategory parentId={parent} handleChangeQuery={handleChangeQuery} />
    </Stack>
  );
};

export default ChooseCategory;
