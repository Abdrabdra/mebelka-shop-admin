import { Stack } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { StyledMainInput } from "../../../../../components/Input/StyledMainInput";
import { useTypedSelector } from "../../../../../redux/store";
import { setAnnounce } from "../../../../../redux/store/reducers/announce/announce.slice";
import { FormTitle } from "../AnnouncementCreateForm";

const AnnounceSizes = () => {
  const dispatch = useDispatch();

  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleChange = (e: any, type: "length" | "width" | "height") => {
    const { value } = e.target;

    if (type === "length") {
      dispatch(setAnnounce({ length: value }));
      return setLength(value);
    }
    if (type === "width") {
      dispatch(setAnnounce({ width: value }));
      return setWidth(value);
    }
    if (type === "height") {
      dispatch(setAnnounce({ height: value }));
      return setHeight(value);
    }
  };

  return (
    <Stack direction="row" spacing={2.5}>
      <Stack spacing={1}>
        <FormTitle title="Длина (mm)" />
        <StyledMainInput
          value={length}
          onChange={(e) => handleChange(e, "length")}
          required
          label={`Длина`}
        />
      </Stack>
      <Stack spacing={1}>
        <FormTitle title="Ширина (mm)" />
        <StyledMainInput
          value={width}
          onChange={(e) => handleChange(e, "width")}
          required
          label={`Ширина`}
        />
      </Stack>
      <Stack spacing={1}>
        <FormTitle title="Высота (mm)" />
        <StyledMainInput
          value={height}
          onChange={(e) => handleChange(e, "height")}
          required
          label={`Высота`}
        />
      </Stack>
    </Stack>
  );
};

export default AnnounceSizes;
