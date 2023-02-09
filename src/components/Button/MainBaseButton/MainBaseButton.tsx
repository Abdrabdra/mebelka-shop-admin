import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { alpha } from "@mui/material";

export type CustomButtonProps = {
  bgcolor?: string;
  bradius?: string;
  fsize?: string;
  color?: string;
  jc?: string;
} & ButtonProps;

const MainBaseButton = styled((props: CustomButtonProps) => (
  <Button
    variant="outlined"
    fullWidth
    {...props}
    sx={{
      backgroundColor: props.bgcolor ? props.bgcolor : "secondary.300",
      borderRadius: props.bradius ? props.bradius : "10px",
      fontSize: props.fsize ? props.fsize : "16px",
      color: props.color ? props.color : "#FFF",
      justifyContent: props.jc ? props.jc : "center",
    }}
  />
))(({ theme }) => ({
  height: "50px",
  lineHeight: "20px",
  fontWeight: 600,
  textTransform: "capitalize",
  alignItems: "center",
  borderColor: "transparent",

  transition: theme.transitions.create([
    "border-color",
    "background-color",
    "box-shadow",
  ]),

  "&:focus, &:hover": {
    borderColor: theme.palette.primary,
    backgroundColor: theme.palette.primary,
  },

  ".Mui-disabled": {
    color: "#fff",
    backgroundColor: "#fff",
  },
}));

export default MainBaseButton;
