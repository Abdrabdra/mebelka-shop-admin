import { Paper, Box, Hidden, Container } from "@mui/material";

import { LoginBlock } from "./style";

// @ts-ignore: Ts че ты хочешь?
import { ReactComponent as AuthBg } from "../../assets/svg/authBg.svg";
import { theme } from "../../theme/theme";
import LoginForm from "./modules/LoginForm";

const LoginPaper = () => {
  return (
    <LoginBlock>
      <Container
        maxWidth="3xl"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",

          [theme.breakpoints.down("lg")]: {
            flexDirection: "column",
            justifyContent: "center",
          },
        }}
      >
        <LoginForm />
      </Container>
    </LoginBlock>
  );
};

export default LoginPaper;
