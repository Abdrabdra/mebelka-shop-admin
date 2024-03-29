import { InputAdornment, Stack } from "@mui/material";
import { StyledMainInput } from "../../../../components/Input/StyledMainInput";
import SearchIcon from "@mui/icons-material/Search";

import { OrderFilterButton } from "../../../../components/modules/Filters/OrderFilter";

const FilterBox = () => {
  return (
    <Stack
      direction="row"
      spacing={2.5}
      sx={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <StyledMainInput
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        bgcolor="primary.light"
      />

      <OrderFilterButton />
    </Stack>
  );
};

export default FilterBox;
