import { Stack } from "@mui/material";
import { FC, useEffect, useState } from "react";
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

  useEffect(() => {
    dispatch(setAnnounce({ width: width }));
  }, [width]);
  useEffect(() => {
    dispatch(setAnnounce({ length: length }));
  }, [length]);
  useEffect(() => {
    dispatch(setAnnounce({ height: height }));
  }, [height]);

  const handleChange = (e: any, type: "length" | "width" | "height") => {
    const { value } = e.target;

    if (type === "length") {
      return setLength(value);
    }
    if (type === "width") {
      return setWidth(value);
    }
    if (type === "height") {
      return setHeight(value);
    }
  };

  return (
    <Stack direction="row" spacing={2.5}>
      <Stack spacing={1}>
        <FormTitle title="Длина (mm)" />
        <StyledMainInput
          name={"length"}
          value={length}
          onChange={(e) => handleChange(e, "length")}
          required
          label={`Длина`}
        />
      </Stack>
      <Stack spacing={1}>
        <FormTitle title="Ширина (mm)" />
        <StyledMainInput
          name={"width"}
          value={width}
          onChange={(e) => handleChange(e, "width")}
          required
          label={`Ширина`}
        />
      </Stack>
      <Stack spacing={1}>
        <FormTitle title="Высота (mm)" />
        <StyledMainInput
          name={"height"}
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
