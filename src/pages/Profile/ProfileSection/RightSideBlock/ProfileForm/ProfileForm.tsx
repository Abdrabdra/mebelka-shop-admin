import { Box, Stack, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { FC } from "react";
import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import { StyledInput } from "../../../../../components/styled-components/StyledInput";
import { IProfile } from "../../../../../redux/store/rtk-api/profile-rtk/profile.type";
import { useUpdateProfileMutation } from "../../../../../redux/store/rtk-api/profile-rtk/profileEndpoints";

interface Props {
  data: IProfile;
}

const ProfileForm: FC<Props> = ({ data }) => {
  const [update] = useUpdateProfileMutation();

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
        Личная информация
      </Typography>
      <Formik
        initialValues={{
          firstName: data?.firstName,
          secondName: data?.secondName,
          email: data?.email,
        }}
        onSubmit={(values) => {
          update({ ...values });
        }}
      >
        {({ values, errors, handleChange }) => (
          <Form>
            <Typography sx={{ mb: "10px" }}>Имя</Typography>
            <StyledInput
              name={"firstName"}
              value={values.firstName}
              onChange={handleChange}
              label="Имя"
              sx={{ mb: "20px" }}
            />

            <Typography sx={{ mb: "10px" }}>Фамилия</Typography>
            <StyledInput
              name={"secondName"}
              value={values.secondName}
              onChange={handleChange}
              label="Фамилия"
              sx={{ mb: "20px" }}
            />

            <Typography sx={{ mb: "10px" }}>Почта</Typography>
            <StyledInput
              name={"email"}
              value={values.email}
              onChange={handleChange}
              label="Почта"
              sx={{ mb: "20px" }}
            />

            <MainBaseButton type="submit">Обновить данные</MainBaseButton>
          </Form>
        )}
      </Formik>
    </Stack>
  );
};

export default ProfileForm;
