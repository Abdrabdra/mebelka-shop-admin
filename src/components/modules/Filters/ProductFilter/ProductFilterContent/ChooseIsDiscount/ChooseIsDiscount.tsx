import { Checkbox, FormControlLabel, Stack, Typography } from "@mui/material";
import React, { FC } from "react";
import { useTypedSelector } from "../../../../../../redux/store";

interface Props {
  handleChangeQuery: (value: any) => void;
}

const ChooseIsDiscount: FC<Props> = ({ handleChangeQuery }) => {
  const selectedValue = useTypedSelector(
    (state) => state.filterProduct.values.discount
  );

  const [checked, setChecked] = React.useState(selectedValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);

    handleChangeQuery({ discount: event.target.checked });
  };

  return (
    <Stack>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="Со скидкой"
      />
    </Stack>
  );
};

export default ChooseIsDiscount;
