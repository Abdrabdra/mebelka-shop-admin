import { Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { StyledInput } from "../../../../components/styled-components/StyledInput";
import { PaperRightContainer } from "./style";

const RightSideBlock = () => {
  return (
    <Grid item xs={3}>
      <PaperRightContainer>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "24px",
            color: "#65B7C4",
            mb: "10px",
          }}
        >
          Информация
        </Typography>
        <Divider sx={{ maxWidth: "850px" }} />
        <Grid
          container
          columns={2}
          spacing={3}
          direction={"row"}
          sx={{
            height: "100%",
            marginTop: "0.25px",
            overflow: "hidden",
            overflowY: "scroll",

            // Scroll
            /* width */
            "&::-webkit-scrollbar": {
              width: "6px",
              height: "500px",
              backgroundColor: "#E4FFF9",
              borderRadius: "10px",
            },

            /* Track */
            "&::-webkit-scrollbar-track": {
              borderRadius: "10px",
            },

            /* Handle */
            "&::-webkit-scrollbar-thumb": {
              background: "#2398AB",
              borderRadius: "10px",
            },

            /* Handle on hover */
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#c5f1e8",
            },
          }}
        >
          <Grid
            item
            xs
            sx={{
              display: "flex",
              flexDirection: "column",
              // height: "calc(100vh - 200px)",
            }}
          >
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
                }}
              >
                Личная информация
              </Typography>
              <Typography variant="h5" sx={{ mb: "10px" }}>
                Имя
              </Typography>
              <StyledInput label="Имя" sx={{ mb: "20px" }} />
              <Typography variant="h5" sx={{ mb: "10px" }}>
                Фамилия
              </Typography>
              <StyledInput label="Фамилия" sx={{ mb: "20px" }} />
              <Typography variant="h5" sx={{ mb: "10px" }}>
                Отчество
              </Typography>
              <StyledInput label="Отчество" sx={{ mb: "20px" }} />
              <Typography variant="h5" sx={{ mb: "10px" }}>
                ИИН
              </Typography>
              <StyledInput label="ИИН" sx={{ mb: "20px" }} />
              <Typography variant="h5" sx={{ mb: "10px" }}>
                Дата Рождения
              </Typography>
              <StyledInput label="Дата Рождения" sx={{ mb: "20px" }} />
              <Typography variant="h5" sx={{ mb: "10px" }}>
                Номер телефона
              </Typography>
              <StyledInput label="Номер телефона" sx={{ mb: "20px" }} />
              <Typography variant="h5" sx={{ mb: "10px" }}>
                Email
              </Typography>
              <StyledInput label="Email" sx={{ mb: "20px" }} />
              <Typography variant="h5" sx={{ mb: "10px" }}>
                Пол
              </Typography>
              <StyledInput label="Пол" />
            </Stack>
          </Grid>
          <Grid item xs sx={{ display: "flex", flexDirection: "column" }}>
            <Stack sx={{ maxWidth: "350px" }}>
              <Typography
                variant={"h4"}
                sx={{
                  mb: "20px",
                }}
              >
                Место проживания
              </Typography>
              <Typography variant="h5" sx={{ mb: "10px" }}>
                Страна
              </Typography>
              <StyledInput label="Страна" sx={{ mb: "20px" }} />
              <Typography variant="h5" sx={{ mb: "10px" }}>
                Город
              </Typography>
              <StyledInput label="Город" sx={{ mb: "20px" }} />
              <Typography variant="h5" sx={{ mb: "10px" }}>
                Улица
              </Typography>
              <StyledInput label="Улица" sx={{ mb: "20px" }} />
              <Typography variant="h5" sx={{ mb: "10px" }}>
                Дом
              </Typography>
              <StyledInput label="Дом" sx={{ mb: "20px" }} />
              <Typography variant="h5" sx={{ mb: "10px" }}>
                Индекс
              </Typography>
              <StyledInput label="Индекс" sx={{ mb: "20px" }} />
            </Stack>
          </Grid>
        </Grid>
      </PaperRightContainer>
    </Grid>
  );
};

export default RightSideBlock;
