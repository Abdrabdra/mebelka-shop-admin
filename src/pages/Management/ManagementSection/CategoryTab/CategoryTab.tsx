import { Box, Stack, Typography } from "@mui/material";
import CategoryCreate from "./CategoryCreate";
import CategoryList from "./CategoryList";

const CategoryTab = () => {
  return (
    <Box>
      <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
        <Typography
          sx={{
            fontSize: "25px",
            mb: "15px",
            color: "primary.main",
            fontWeight: 600,
          }}
        >
          Категорий
        </Typography>
      </Stack>

      <Stack spacing={2}>
        <CategoryCreate />
        <CategoryList />
      </Stack>
    </Box>
  );
};

export default CategoryTab;
