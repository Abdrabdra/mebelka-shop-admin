import { Pagination } from "@mui/material";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../../../redux/store";
import { setFilter } from "../../../../redux/store/reducers/filter/filter.slice";

interface Props {
  count: number;
}

const ContentListPagination: FC<Props> = ({ count }) => {
  const dispatch = useDispatch();
  const totalPages = Math.ceil(count / 5);
  const selectedPage = useTypedSelector((state) => state.filter.values.page);

  const [page, setPage] = useState(selectedPage);
  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    dispatch(setFilter({ page: value }));
  };

  return count ? (
    <Pagination
      page={page}
      onChange={(e, value) => handleChange(e, value)}
      count={totalPages}
    />
  ) : null;
};

export default ContentListPagination;
