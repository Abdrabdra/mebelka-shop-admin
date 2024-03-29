import { FC, useEffect } from "react";
import { Stack, Typography } from "@mui/material";

import ContentSkeleton from "./ContentSkeleton";
import ContentListPagination from "./ContentListPagination";
import { useTypedSelector } from "../../../../redux/store";
import ContentListTable from "./ContentListTable";
import { useGetAnnouncementsQuery } from "../../../../redux/store/rtk-api/announcement-rtk/announcementEndpoints";
import { useGetOrderQuery } from "../../../../redux/store/rtk-api/order-rtk/orderEndpoints";

interface Props {
  forArchive?: boolean;
  forMyAnnouncements?: boolean;
  withoutPagination?: boolean;
}

const ContentList: FC<Props> = ({ withoutPagination }) => {
  const filterProductValues = useTypedSelector(
    (state) => state.filterProduct.values
  );

  const queryWithFilterParams = {
    ...filterProductValues,
  };

  const { data, isLoading, isFetching, isSuccess } = useGetOrderQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
    }
  );

  console.log("data: ", data);

  return (
    <Stack spacing={1.5}>
      {isLoading || isFetching ? (
        <ContentSkeleton />
      ) : isSuccess ? (
        data.count === 0 ? (
          <Typography>Нет Заказов</Typography>
        ) : (
          <>
            <ContentListTable tableData={data} />

            {withoutPagination ? null : (
              <ContentListPagination count={data.count} />
            )}
          </>
        )
      ) : (
        "Ошибка при загрузки"
      )}
    </Stack>
  );
};

export default ContentList;
