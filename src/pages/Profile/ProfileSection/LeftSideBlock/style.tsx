import {
  Box,
  Paper,
  PaperProps,
  Typography,
  Stack,
  StackProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { TypographyProps } from "@mui/system";

export const PaperContainer = styled((props: PaperProps) => (
  <Paper {...props} />
))(({ theme }) => ({
  height: "100%",
  color: "primary.main",
  borderRadius: "10px",
  fontSize: "24px",
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
  overflow: "hidden",
  overflowY: "hidden",
}));

export const ProfileImageBox = styled((props: StackProps) => (
  <Stack {...props} />
))(({ theme }) => ({
  width: "100%",
  height: "200px",
  backgroundColor: "#E2E2E2",
  borderRadius: "10px",
}));
