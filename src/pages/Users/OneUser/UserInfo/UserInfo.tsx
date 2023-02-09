import { Box, Grid, Typography, Button, Stack } from "@mui/material";
import { FC } from "react";
import { useParams } from "react-router-dom";

import { IGetOneProfile } from "../../../../redux/store/rtk-api/user-rtk/user.type";
import { useGetOneProfileQuery } from "../../../../redux/store/rtk-api/user-rtk/userEndpoints";

interface Props {
  query: any;
}

const UserInfo: FC<Props> = ({ query }) => {
  const params = useParams();

  const { userId } = params;

  const { data, isLoading, refetch } = query(userId);

  // const [block, { isLoading: blockLoading }] = useBlockUserMutation();

  const handleBlock = () => {
    // block(Number(userId));
    refetch();
  };
  
  

  return (
    <Grid
      container
      columns={12}
      justifyContent={"space-between"}
      sx={{
        height: "200px",
        borderRadius: "10px",
        p: "20px",
        backgroundColor: "#FFF",
      }}
    >
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#E2E2E2",
            width: "160px",
            height: "160px",
            mr: "30px",
          }}
        />
        <Stack justifyContent={"space-between"}>
          <Typography variant="h20r" color={"secondary.light"}>
            Имя пользователя
          </Typography>
          <Typography variant="h28b">{data?.firstName}</Typography>
          <Box
            sx={{
              display: "flex",
              gap: "15px",
              width: "100%",
              maxWidth: "500px",
            }}
          >
            {data?.block?.block
              ? "Пользователь Заблокирован"
              : "Пользователь не Заблокирован"}

            <Button
              onClick={() => handleBlock()}
              variant="contained"
              color="primary"
            >
              БЛОКАТЬ
            </Button>
          </Box>
        </Stack>
      </Grid>

      <Grid container item xs={5.7}>
        <Grid container item xs direction={"column"} spacing={4}>
          <Grid
            item
            xs
            justifyContent={"flex-start"}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography
              variant="h16r"
              color="secondary.light"
              textTransform="uppercase"
              sx={{ mb: "10px" }}
            >
              Номер телефона
            </Typography>
            <Typography variant="h20b">Нужны данные</Typography>
          </Grid>
          <Grid
            item
            xs
            justifyContent={"flex-start"}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography
              variant="h16r"
              color="secondary.light"
              textTransform="uppercase"
              sx={{ mb: "10px" }}
            >
              Статус
            </Typography>
            <Typography variant="h20b">
              {/* {data?.block?.block === true ? "Заблокирован" : "Не заблокирован"} */}
              Need Status B
            </Typography>
          </Grid>
        </Grid>

        <Grid container item xs direction={"column"} spacing={4}>
          <Grid
            item
            xs
            justifyContent={"flex-start"}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography
              variant="h16r"
              color="secondary.light"
              textTransform="uppercase"
              sx={{ mb: "10px" }}
            >
              Дата рождения
            </Typography>
            <Typography variant="h20b">{data?.age}</Typography>
          </Grid>
          <Grid
            item
            xs
            justifyContent={"flex-start"}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography
              variant="h16r"
              color="secondary.light"
              textTransform="uppercase"
              sx={{ mb: "10px" }}
            >
              Дети
            </Typography>
            <Typography variant="h20b">{data?.kids}</Typography>
          </Grid>
        </Grid>

        <Grid container item xs direction={"column"} spacing={4}>
          <Grid
            item
            xs
            justifyContent={"flex-start"}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography
              variant="h16r"
              color="secondary.light"
              textTransform="uppercase"
              sx={{ mb: "10px" }}
            >
              Пол
            </Typography>
            <Typography variant="h20b">{data?.gender.value}</Typography>
          </Grid>
          <Grid
            item
            xs
            justifyContent={"flex-start"}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography
              variant="h16r"
              color="secondary.light"
              textTransform="uppercase"
              sx={{ mb: "10px" }}
            >
              Религия
            </Typography>
            <Typography variant="h20b">Нужны данные</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserInfo;
