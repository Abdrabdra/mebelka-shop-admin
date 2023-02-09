import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  GridProps,
  Stack,
  StackProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import { Box, BoxProps, styled } from "@mui/system";
import { MainButton } from "../../../../components/styled-components/StyledButton";

export const GridBlock = styled((props: GridProps) => (
  <Grid container item flexDirection={"column"} direction="row" {...props} />
))(({ theme }) => ({
  padding: "clamp(50px, 7.8125vw, 150px)",
  width: "100%",
  height: "460px",
  alignItems: "center",
  justifyContent: "center",
}));

export const Headline = styled((props: TypographyProps) => (
  <Typography variant="h4" color="primary" {...props} />
))(({ theme }) => ({
  width: "100%",
  fontSize: "clamp(40px, 3.33vw, 64px)",
  fontWeight: 600,
  marginBottom: "clamp(70px, 7.916vw, 152px)",
}));

export const InputBox = styled("div")(({ theme }) => ({
  height: "140px",
}));

export const InputUpperLabel = (props: any) => (
  <Typography variant="h3" sx={{ mb: "clamp(12px, 1.04vw, 20px)", color: "primary.main" }}>
    {props.children}
  </Typography>
);

export const InputHelperText = (props: any) => (
  <Typography variant="h5" sx={{ textAlign: "end" }}>
    {props.children}
  </Typography>
);

export const FormCheckBox = (props: any) => (
  <Box
    sx={{
      width: "240px",
      mb: "clamp(20px, 1.5625vw, 30px)",
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    {props.children}
  </Box>
);

// CheckBox
const MainCheckBox = (props: any) => (
  <Checkbox
    sx={{
      borderRadius: "5px",
      color: "primary.main",
      "& .MuiSvgIcon-root": {
        fontSize: "clamp(24px, 1.5625vw, 30px)",
      },
    }}
  />
);
export const StyledCheckBox = (props: any) => (
  <FormControlLabel
    control={<MainCheckBox />}
    label="Запомнить меня"
    sx={{
      "& .MuiFormControlLabel-label": {
        color: "#666666",
        fontSize: "24px",
      },
    }}
  />
);

export const ReforgedMainButton = styled((props: any) => (
  <MainButton {...props}>{props.children}</MainButton>
))(({ theme }) => ({
  fontSize: "18px, 1.25vw, 24px",
  display: "flex",
  justifyContent: "center",
  height: "60px",
}));
