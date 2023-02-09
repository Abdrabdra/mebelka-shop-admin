import { Stack, Typography } from "@mui/material";
import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import { useGetCategoryQuery } from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";
import CategoryOne from "./CategoryOne";

const CategoryList = () => {
  const { data, isSuccess, isLoading, isFetching, refetch } =
    useGetCategoryQuery("");

  return (
    <Stack>
      {isLoading ? (
        "Загрузка..."
      ) : isSuccess ? (
        <Stack spacing={1}>
          <Stack justifyContent={"space-between"} direction="row">
            <Typography>Список Категорий</Typography>
          </Stack>

          {data.data.map((row) => (
            <CategoryOne key={row.id} data={row} />
          ))}
        </Stack>
      ) : (
        "Ошибка при загрузки"
      )}
    </Stack>
  );
};

export default CategoryList;
