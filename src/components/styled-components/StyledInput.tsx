import { NoEncryptionTwoTone } from "@mui/icons-material";
import {
  InputBase,
  InputBaseProps,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const StyledNewInput = styled(InputBase)(({ theme }) => ({
  width: "100%",

  "& .MuiInputBase-input": {
    borderRadius: "5px",
    position: "relative",
    backgroundColor: theme.palette.primary.light,
    fontSize: "24px",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "25px",
    color: theme.palette.primary.main,

    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),

    "&:focus, &:hover": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.9)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export const StyledInput = styled((props: TextFieldProps) => (
  <TextField variant="outlined" fullWidth hiddenLabel {...props} />
))(({ theme }) => ({
  backgroundColor: "#E4FFF9",
  borderRadius: "5px",

  "& fieldset": {
    borderColor: "#E4FFF9",
    outline: "none",
    "&:focus": {
      outline: "none",
    },

    "&:hover": {
      boder: "none",
      borderColor: "none",
      stroke: "none",
      outline: "none",
    },
  },

  "& .MuiOutlinedInput-root": {
    height: "50px",
    border: "none",
    color: theme.palette.primary,
    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      boder: "none",
      borderColor: "none",
      stroke: "none",
      outline: "none",
    },
  },
  "& .MuiFormHelperText-root": {
    textAlign: "right",
  },
}));
