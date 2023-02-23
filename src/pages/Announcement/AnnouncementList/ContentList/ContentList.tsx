import { FC, useEffect } from "react";
import { Stack, Typography } from "@mui/material";

import ContentSkeleton from "./ContentSkeleton";
import ContentListPagination from "./ContentListPagination";
import { useTypedSelector } from "../../../../redux/store";
import ContentListTable from "./ContentListTable";
import { useGetAnnouncementsQuery } from "../../../../redux/store/rtk-api/announcement-rtk/announcementEndpoints";

interface Props {
  forArchive?: boolean;
  forMyAnnouncements?: boolean;
  getCounts?: (value: number) => void;
  withoutPagination?: boolean;
}

const ContentList: FC<Props> = ({ getCounts, withoutPagination }) => {
  const filterProductValues = useTypedSelector(
    (state) => state.filterProduct.values
  );

  const queryWithFilterParams = {
    ...filterProductValues,
  };

  const { data, isLoading, isFetching, isSuccess } = useGetAnnouncementsQuery(
    queryWithFilterParams,
    {
      refetchOnMountOrArgChange: true,
    }
  );

  useEffect(() => {
    if (isSuccess) {
      getCounts && getCounts(data.count);
    }
  }, [data]);

  return (
    <Stack spacing={1.5}>
      {isLoading || isFetching ? (
        <ContentSkeleton />
      ) : isSuccess ? (
        data.count === 0 ? (
          <Typography>Нет Объявлений</Typography>
        ) : (
          <>
            <ContentListTable tableData={data.data} />

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
