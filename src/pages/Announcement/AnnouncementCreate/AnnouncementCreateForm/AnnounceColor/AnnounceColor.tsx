import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormGroup,
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
import { useParams } from "react-router-dom";
import { StyledMainInput } from "../../../../../components/Input/StyledMainInput";
import { useTypedSelector } from "../../../../../redux/store";
import {
  setAnnounce,
  setAnnounceColor,
} from "../../../../../redux/store/reducers/announce/announce.slice";
import { useGetProductColorQuery } from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";
import { useDeleteProductColorMutation } from "../../../../../redux/store/rtk-api/product-rtk/productEndpoints";
import { IColors } from "../../../../../types/Announcement/OneAnnouncement.type";
import { FormTitle } from "../AnnouncementCreateForm";
import { MenuProps } from "./ColorCheckmarks.utils";
import DeleteColors from "./DeleteColors";

interface Props {
  prevData?: number[];
  forUpdate?: boolean;
  untouchedData?: IColors[];
}

const AnnounceColor: FC<Props> = ({ prevData, forUpdate }) => {
  const { data } = useGetProductColorQuery("");
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("TEST!");
    dispatch(setAnnounce({ colors: prevData }));
  }, [prevData]);

  const selectedValues = useTypedSelector(
    (state) => state.announce.values.colors
  );

  const [color, setColor] = useState<number[]>(selectedValues);

  useEffect(() => {
    setColor(selectedValues as number[]);
  }, [selectedValues]);

  const handleChange = (event: any, child: any) => {
    const {
      target: { value },
    } = event;

    if (forUpdate) {
      const selected = color.filter((row) => row === child.props.value);

      if (
        prevData &&
        prevData.filter((row) => row === selected[0]).length > 0
      ) {
        console.log("Удалите объекты выше");
      } else {
        setColor(value as number[]);
        dispatch(setAnnounce({ colors: value }));
      }
    } else {
      console.log("ВТОРАЯ");

      setColor(value as number[]);
      dispatch(setAnnounce({ colors: value }));
    }
  };

  return (
    <Stack spacing={2}>
      <FormTitle title="Цвет" />

      {forUpdate && prevData && prevData.length > 0 && (
        <DeleteColors prevData={prevData} />
      )}

      <FormControl fullWidth>
        <InputLabel id="demo-multiple-checkbox-label">
          Выберите цвета
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={color}
          onChange={(e, child) => handleChange(e, child)}
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
