import { Grid } from "@mui/material";
import OneStatistic from "./OneStatistic";

const UserStatistics = () => {
  return (
    <Grid container spacing={3} sx={{ mb: "30px" }}>
      <Grid item xs>
        <OneStatistic text={"Всего пользователей"} price={"5"} />
      </Grid>
      <Grid item xs>
        <OneStatistic text={"Новые пользователи"} price={"+2"} />
      </Grid>
      <Grid item xs>
        <OneStatistic text={"Активные пользователей"} price={"3"} />
      </Grid>
      <Grid item xs>
        <OneStatistic text={"Рост пользователей"} price={"+2"} />
      </Grid>
    </Grid>
  );
};

export default UserStatistics;
