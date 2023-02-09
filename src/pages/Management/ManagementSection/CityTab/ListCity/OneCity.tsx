import { Button, Stack, Typography } from "@mui/material";
import { FC } from "react";
import BaseAccordion from "../../../../../components/BaseAccordion/StepperAccordion";
import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import {
  useCreateCityInMutation,
  useDeleteCityMutation,
  useDeleteCityUnderMutation,
} from "../../../../../redux/store/rtk-api/city-rtk/cityEndpoints";
import { IGetRegion } from "../../../../../types/Management/Region";
import CreateCity from "../CreateCity";

interface Props {
  data: IGetRegion;
}

const OneCity: FC<Props> = ({ data }) => {
  const [deleteItem] = useDeleteCityMutation();
  const [deleteUnderCity] = useDeleteCityUnderMutation();

  const handleDelete = () => {
    deleteItem({ id: data.id });
  };

  const handleDeleteUnder = (id: number) => {
    deleteUnderCity({ id: id });
  };

  return (
    <BaseAccordion summary={data.title}>
      <Stack spacing={2}>
        <MainBaseButton
          onClick={handleDelete}
          sx={{ width: "225px", alignSelf: "center" }}
          bgcolor="error.main"
        >
          Удалить {data.title}
        </MainBaseButton>

        <CreateCity id={data.id} />

        <Stack>
          {data.cities.map((row) => (
            <Stack
              key={row.id}
              direction="row"
              justifyContent="space-between"
              spacing={2}
            >
              <Stack>
                <Stack direction="row" spacing={1}>
                  <Typography>Артикул: </Typography>
                  <Typography>{row.id}</Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Typography>Название: </Typography>
                  <Typography>{row.title}</Typography>
                </Stack>
              </Stack>

              <MainBaseButton
                onClick={() => handleDeleteUnder(row.id)}
                sx={{ width: "90px" }}
                bgcolor="error.main"
              >
                Удалить
              </MainBaseButton>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </BaseAccordion>
  );
};

export default OneCity;
