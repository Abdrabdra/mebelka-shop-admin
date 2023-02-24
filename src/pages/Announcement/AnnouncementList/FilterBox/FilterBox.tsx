import { InputAdornment, Stack } from "@mui/material";
import MainBaseButton from "../../../../components/Button/MainBaseButton/MainBaseButton";
import { StyledMainInput } from "../../../../components/Input/StyledMainInput";
import SearchIcon from "@mui/icons-material/Search";

import { ProductFilterButton } from "../../../../components/modules/Filters/ProductFilter";

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

      <ProductFilterButton />
    </Stack>
  );
};

export default FilterBox;
