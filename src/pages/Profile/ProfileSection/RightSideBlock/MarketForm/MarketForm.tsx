import { Box, Stack, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { FC } from "react";
import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import { StyledInput } from "../../../../../components/styled-components/StyledInput";
import { IMarket } from "../../../../../redux/store/rtk-api/profile-rtk/profile.type";
import {
  useUpdateMarketMutation,
  useUpdateProfileMutation,
} from "../../../../../redux/store/rtk-api/profile-rtk/profileEndpoints";

interface Props {
  data: IMarket;
}

const MarketForm: FC<Props> = ({ data }) => {
  const [update] = useUpdateMarketMutation();

  const { data: marketData } = data;

  return (
    <Stack
      sx={{
        maxWidth: "350px",
        height: "900px",
      }}
    >
      <Typography
        variant={"h4"}
        sx={{
          mb: "20px",
          color: "primary.main",
        }}
      >
        Информация магазина
      </Typography>
      <Formik
        initialValues={{
          title: marketData[0]?.title,
          street: marketData[0]?.street,
          phone: marketData[0]?.phone,
          email: marketData[0]?.email,
        }}
        onSubmit={(values) => {
          update({ body: { ...values }, marketId: marketData[0].id });
        }}
      >
        {({ values, errors, handleChange }) => (
          <Form>
            <Typography sx={{ mb: "10px" }}>Название Магазина</Typography>
            <StyledInput
              name={"title"}
              value={values.title}
              onChange={handleChange}
              label="Название Магазина"
              required
              sx={{ mb: "20px" }}
            />

            <Typography sx={{ mb: "10px" }}>Улица</Typography>
            <StyledInput
              name={"street"}
              value={values.street}
              onChange={handleChange}
              label="Улица"
              required
              sx={{ mb: "20px" }}
            />

            <Typography sx={{ mb: "10px" }}>Номер Телефона</Typography>
            <StyledInput
              name={"phone"}
              value={values.phone}
              onChange={handleChange}
              label="Номер Телефона"
              required
              sx={{ mb: "20px" }}
            />

            <Typography sx={{ mb: "10px" }}>Почта</Typography>
            <StyledInput
              name={"email"}
              value={values.email}
              onChange={handleChange}
              label="Почта"
              required
              sx={{ mb: "20px" }}
            />

            <MainBaseButton type="submit">Обновить магазин</MainBaseButton>
          </Form>
        )}
      </Formik>
    </Stack>
  );
};

export default MarketForm;
