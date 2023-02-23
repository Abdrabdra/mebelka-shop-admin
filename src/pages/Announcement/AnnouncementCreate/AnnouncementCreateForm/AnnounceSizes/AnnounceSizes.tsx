import { Stack } from "@mui/material";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { StyledMainInput } from "../../../../../components/Input/StyledMainInput";
import { useTypedSelector } from "../../../../../redux/store";
import { setAnnounce } from "../../../../../redux/store/reducers/announce/announce.slice";
import { FormTitle } from "../AnnouncementCreateForm";

interface Props {
  iwidth?: number;
  iheight?: number;
  ilength?: number;
}

const AnnounceSizes: FC<Props> = ({ iwidth, iheight, ilength }) => {
  const dispatch = useDispatch();

  const selectedValues = useTypedSelector((state) => state.announce.values);

  const [length, setLength] = useState(
    ilength ? ilength : selectedValues.length
  );
  const [width, setWidth] = useState(iwidth ? iwidth : selectedValues.width);
  const [height, setHeight] = useState(
    iheight ? iheight : selectedValues.height
  );

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
