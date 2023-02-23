import { Pagination } from "@mui/material";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../../../redux/store";
import { setFilterProduct } from "../../../../redux/store/reducers/filter/filterProduct/filterProduct.slice";

interface Props {
  count: number;
}

const ContentListPagination: FC<Props> = ({ count }) => {
  const dispatch = useDispatch();

  const selectedLimit = useTypedSelector(
    (state) => state.filterProduct.values.limit
  );
  const selectedPage = useTypedSelector(
    (state) => state.filterProduct.values.page
  );

    console.log()

  const totalPages = Math.ceil(count / selectedLimit);

  console.log("count: ", count);
  console.log("totalPages: ", totalPages);
  console.log("selectedPage: ", selectedPage);

  const [page, setPage] = useState(selectedPage);
  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    dispatch(setFilterProduct({ page: value }));
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
