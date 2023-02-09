import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
// import ComplaintUserMessages from "../../Complaints/ComplaintsSection/ComplaintUserMessages";
// import ComplaintUsersInfo from "../../Complaints/ComplaintsSection/ComplaintUsersInfo";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import UserInfo from "./UserInfo";
import { useGetOneProfileQuery } from "../../../redux/store/rtk-api/user-rtk/userEndpoints";
import UserComplains from "./UserComplains";
import UserSendReport from "./UserSendReport";

const OneUser = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { userId } = params;
  const { data, isLoading } = useGetOneProfileQuery(userId ? userId : "");

  return (
    <Box
      sx={{ height: "calc(100vh - 59px - 100px)", backgroundColor: "#E4FFF9" }}
    >
      <Button
        variant="contained"
        color="inherit"
        onClick={() => navigate(-1)}
        startIcon={<ChevronLeftIcon />}
        sx={{ width: "130px", mb: "25px" }}
      >
        Назад
      </Button>
      <UserInfo query={useGetOneProfileQuery} />
      <Grid container spacing={3} sx={{ mt: "15px" }} columns={12}>
        {/* <ComplaintUserMessages /> */}
        <UserComplains data={data?.complaints} isLoading={isLoading} />

        <UserSendReport data={data?.sendReports} isLoading={isLoading} />
      </Grid>
    </Box>
  );
};

export default OneUser;
