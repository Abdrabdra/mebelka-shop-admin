import { Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useGetOneProductQuery } from "../../../redux/store/rtk-api/product-rtk/productEndpoints";
import AnnouncementCreateForm from "../AnnouncementCreate/AnnouncementCreateForm";

import AnnounceHeader from "./AnnounceHeader";

const AnnouncementOne = () => {
  const { announceId } = useParams();

  const { data, isLoading, isSuccess } = useGetOneProductQuery(
    announceId ? announceId : ""
  );

  return (
    <Stack spacing={4}>
      {announceId && <AnnounceHeader id={Number(announceId)} />}

      {isLoading ? (
        "Загрузка..."
      ) : isSuccess ? (
        <Stack
          spacing={2}
          sx={{
            padding: "30px",
            borderRadius: "10px",
            backgroundColor: "common.white",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
            Редактирование
          </Typography>

          <AnnouncementCreateForm forUpdate={true} updateData={data} />
        </Stack>
      ) : (
        "Ошибка при загрузки"
      )}
    </Stack>
  );
};

export default AnnouncementOne;
