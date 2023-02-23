import { FormControlLabel, Stack, Switch } from "@mui/material";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../../../redux/store";
import { setAnnounce } from "../../../../../redux/store/reducers/announce/announce.slice";

interface Props {
  prevData?: boolean;
}

const AnnounceLiftingMechanism: FC<Props> = ({ prevData }) => {
  const dispatch = useDispatch();

  if (prevData) {
    dispatch(setAnnounce({ liftingMechanism: prevData }));
  }

  const selectedValues = useTypedSelector(
    (state) => state.announce.values.liftingMechanism
  );

  const [checked, setChecked] = useState(selectedValues);

  useEffect(() => {
    setChecked(selectedValues);
  }, [selectedValues]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);

    dispatch(setAnnounce({ liftingMechanism: event.target.checked }));
  };

  return (
    <Stack
      sx={{
        borderRadius: "10px",
        backgroundColor: "secondary.light",
        padding: "5px 10px",
      }}
    >
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        sx={{ justifyContent: "space-between" }}
        labelPlacement="start"
        label="Подъемный механизм"
      />
    </Stack>
  );
};

export default AnnounceLiftingMechanism;
