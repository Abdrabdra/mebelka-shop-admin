import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import { useGetCityQuery } from "../../../../../redux/store/rtk-api/city-rtk/cityEndpoints";
import OneCity from "./OneCity";

const ListCity = () => {
  const { data, isSuccess, isLoading, isFetching, refetch } =
    useGetCityQuery("");

  const handleRefetch = () => {
    refetch();
  };

  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Typography>Список Регионов</Typography>
        <MainBaseButton
          onClick={handleRefetch}
          bgcolor="green"
          sx={{ width: "100px" }}
        >
          Обновить
        </MainBaseButton>
      </Stack>

      {isLoading
        ? "Загрузка..."
        : isSuccess
        ? data.map((row) => <OneCity key={row.id} data={row} />)
        : "Ошибка при загрузки"}
    </Stack>
  );
};

export default ListCity;
