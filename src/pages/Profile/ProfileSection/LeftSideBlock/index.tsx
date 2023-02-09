import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import {
  MainButton,
  SecondaryButton,
  WarningButton,
} from "../../../../components/styled-components/StyledButton";
import { PaperContainer, ProfileImageBox } from "./style";

// icons
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const LeftSideBlock = () => {
  return (
    <Grid item xs={1} sx={{ height: "calc(100vh - 215px)" }}>
      <PaperContainer>
        <Stack>
          <ProfileImageBox />
          <Typography
            sx={{ fontSize: "28px", fontWeight: 600, color: "#2398AB" }}
          >
            Инсар Еркинбаевs
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<PermIdentityOutlinedIcon />}
              sx={{ mb: "20px" }}
            >
              Аккаунт
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<LockOutlinedIcon />}
              sx={{ p: "10px", fontWeight: 600 }}
            >
              Права доступа
            </Button>
          </Box>
        </Stack>
        <Box>
          <Button variant="contained" color="error">
            Выйти
          </Button>
        </Box>
      </PaperContainer>
    </Grid>
  );
};

export default LeftSideBlock;
