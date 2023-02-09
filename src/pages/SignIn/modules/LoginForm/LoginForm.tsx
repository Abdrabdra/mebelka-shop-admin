// library
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  CircularProgress,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

// store
import { useTypedSelector } from "../../../../redux/store";
import { login } from "../../../../redux/store/reducers/auth/auth.action";

// validation
import { loginSchema } from "../../../../utils/schema/validation";
// styledComponents
import { StyledNewInput } from "../../../../components/styled-components/StyledInput";
import { ActionsEnum } from "../../../../redux/store/enum";

// style
import {
  FormCheckBox,
  GridBlock,
  Headline,
  InputBox,
  InputHelperText,
  InputUpperLabel,
  ReforgedMainButton,
  StyledCheckBox,
} from "./style";
import { setStatus } from "../../../../redux/store/reducers/auth/auth.slice";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();

  const { isAuth, error, status } = useTypedSelector((state) => state.auth);
  const [isLimit, setIsLimit] = useState(false);

  const formik = useFormik({
    initialValues: {
      phone: "", // 8747 411 81 59
      password: "", // 12345
    },
    onSubmit: async (values) => {
      if (isLimit) {
        setIsLimit(false);
      }

      // @ts-ignore
      dispatch(login(values));

      if (ActionsEnum.LOADING) {
        setTimeout(() => {
          if (ActionsEnum.LOADING) {
            setIsLimit(true);
            dispatch(setStatus(ActionsEnum.LIMIT));
          }
        }, 3000);
      }
    },
    validationSchema: loginSchema,
  });

  const { values, errors, handleChange, handleSubmit } = formik;
  const { phone, password } = values;

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <GridBlock>
      <Stack sx={{ width: "clamp(250px, 100%, 600px)" }}>
        <Headline>Вход</Headline>
        <form onSubmit={handleSubmit}>
          <>
            <InputBox>
              <InputUpperLabel>Номер телефона</InputUpperLabel>
              <StyledNewInput
                ref={inputRef}
                name="phone"
                value={phone}
                required
                onChange={handleChange}
                placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _"
              />
              {errors.phone && (
                <InputHelperText>{errors.phone}</InputHelperText>
              )}
            </InputBox>
            <InputBox>
              <InputUpperLabel>Пароль</InputUpperLabel>
              <StyledNewInput
                id="my-input"
                aria-describedby="my-helper-text"
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
                placeholder="Введите пароль"
              />
              {errors.password && (
                <InputHelperText>{errors.password}</InputHelperText>
              )}
            </InputBox>
            <FormCheckBox>
              <FormGroup>
                <StyledCheckBox />
              </FormGroup>
            </FormCheckBox>
            <Button
              variant="contained"
              color="primary"
              disabled={status === ActionsEnum.LOADING}
              startIcon={
                status === ActionsEnum.LOADING && (
                  <CircularProgress sx={{ color: "#FFF" }} />
                )
              }
              type="submit"
            >
              Войти
            </Button>
            {status === ActionsEnum.LIMIT && (
              <Typography sx={{ mt: "20px" }} color="error">
                Превышено время ожидания! Попробуйте еще раз
              </Typography>
            )}
          </>
        </form>
      </Stack>
    </GridBlock>
  );
};

export default LoginForm;
