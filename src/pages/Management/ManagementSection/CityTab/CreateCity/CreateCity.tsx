import { Stack, Typography } from "@mui/material";
import { Formik } from "formik";
import { FC } from "react";

import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import { StyledMainInput } from "../../../../../components/Input/StyledMainInput";
import {
  useCreateCityInMutation,
  useCreateCityMutation,
} from "../../../../../redux/store/rtk-api/city-rtk/cityEndpoints";

interface Props {
  id?: number;
}

const CreateCity: FC<Props> = ({ id }) => {
  const [create] = useCreateCityMutation();
  const [createCity] = useCreateCityInMutation();

  return (
    <Stack>
      <Typography>Добавить {id ? "город" : "регион"}</Typography>

      <Formik
        initialValues={{ region: "" }}
        onSubmit={(values) => {
          if (id) {
            createCity({ title: values.region, regionId: id });
          } else {
            create({ title: values.region });
          }
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Stack direction={"row"} spacing={2}>
              <StyledMainInput
                value={values.region}
                onChange={handleChange}
                name={"region"}
                bordercolor={"primary"}
              />
              <MainBaseButton
                bgcolor="primary.main"
                sx={{ width: "120px" }}
                type="submit"
              >
                Добавить
              </MainBaseButton>
            </Stack>
          </form>
        )}
      </Formik>
    </Stack>
  );
};

export default CreateCity;
