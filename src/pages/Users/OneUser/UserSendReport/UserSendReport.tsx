import {
  Box,
  Button,
  Grid,
  Skeleton,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ISendReport } from "../../../../redux/store/rtk-api/user-rtk/user.type";
import { Styled } from "../UserComplains/Usercomplains.styled";

interface Props {
  data?: ISendReport[];
  isLoading: boolean;
}

const UserSendReport: FC<Props> = ({ data, isLoading }) => {
  const navigate = useNavigate();

  console.log(data);

  const items = [];
  // const comp = [
  //   { id: 1, firstName: "Maksat", createdAt: "2022", status: false },
  //   { id: 1, firstName: "Maksat", createdAt: "2022", status: false },
  //   { id: 1, firstName: "Maksat", createdAt: "2022", status: false },
  //   { id: 1, firstName: "Maksat", createdAt: "2022", status: false },
  //   { id: 1, firstName: "Maksat", createdAt: "2022", status: false },
  //   { id: 1, firstName: "Maksat", createdAt: "2022", status: false },
  //   { id: 1, firstName: "Maksat", createdAt: "2022", status: false },
  //   { id: 1, firstName: "Maksat", createdAt: "2022", status: false },
  //   { id: 1, firstName: "Maksat", createdAt: "2022", status: false },
  //   { id: 1, firstName: "Maksat", createdAt: "2022", status: false },
  //   { id: 1, firstName: "Maksat", createdAt: "2022", status: false },
  // ];

  for (let i = 0; i < 4; i++) {
    items.push(
      <Styled.BodyRow>
        <Styled.BodyCellFirst>
          <Skeleton
            variant="text"
            animation="wave"
            width={"100%"}
            height={50}
          />
        </Styled.BodyCellFirst>
        <Styled.BodyCell>
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={"100%"}
            height={50}
          />
        </Styled.BodyCell>
        <Styled.BodyCell>
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={"100%"}
            height={50}
          />
        </Styled.BodyCell>
        <Styled.BodyCell>
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={"100%"}
            height={50}
          />
        </Styled.BodyCell>
        <Styled.BodyCellLast>
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={"100%"}
            height={50}
          />
        </Styled.BodyCellLast>
      </Styled.BodyRow>
    );
  }

  return (
    <Grid item xs={5.5}>
      <Typography variant="h28b">Жалобы на этого пользователя</Typography>
      <TableContainer
        component={Box}
        sx={{
          height: "73px",
          overflow: "hidden",
        }}
      >
        <Table
          sx={{
            minWidth: 300,
            boxShadow: "none",
          }}
          aria-label="simple table"
        >
          <TableHead sx={{ position: "relative" }}>
            <Styled.HeadRow>
              <Styled.HeadCell>iD</Styled.HeadCell>
              <Styled.HeadCell>Заявщик</Styled.HeadCell>
              <Styled.HeadCell>Создано</Styled.HeadCell>
              <Styled.HeadCell>Статус</Styled.HeadCell>
            </Styled.HeadRow>
            <Styled.TableDivider />
          </TableHead>
        </Table>
      </TableContainer>
      <TableContainer
        component={Box}
        sx={{
          height: "425px",
          overflowY: "auto",
          overflowX: "auto",

          // Scroll
          /* width */
          "&::-webkit-scrollbar": {
            width: "8px",
            height: "5px",
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
        <Table
          sx={{
            minWidth: 300,
            boxShadow: "none",
          }}
          aria-label="simple table"
        >
          <TableBody>
            {isLoading ? (
              <>{items}</>
            ) : data?.length === 0 ? (
              <>
                <Box
                  sx={{
                    background: "#FFF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "400px",
                    width: "100%",
                    borderRadius: "10px",
                  }}
                >
                  <Typography variant="h28b">Нет Жалоб</Typography>
                </Box>
              </>
            ) : (
              data?.map((row) => (
                <Styled.BodyRow key={row.id}>
                  <Styled.BodyCellFirst>{row.id}</Styled.BodyCellFirst>
                  <Styled.BodyCell>{row.culprit.firstName}</Styled.BodyCell>
                  <Styled.BodyCell>{row.createdAt}</Styled.BodyCell>
                  <Styled.BodyCell>{row.status}</Styled.BodyCell>
                  <Styled.BodyCellLast>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        fontSize: "18px",
                        borderRadius: "10px",
                        px: "40px",
                      }}
                      //   onClick={() => navigate(`/app/users/one/${profile.id}`)}
                    >
                      {`>`}
                    </Button>
                  </Styled.BodyCellLast>
                </Styled.BodyRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default UserSendReport;
