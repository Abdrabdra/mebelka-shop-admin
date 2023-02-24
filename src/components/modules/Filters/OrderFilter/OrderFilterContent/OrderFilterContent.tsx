import { FC, useState } from "react";
import { Container, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useTypedSelector } from "../../../../../redux/store";
import { setFilterProduct } from "../../../../../redux/store/reducers/filter/filterProduct/filterProduct.slice";
import AbsoluteBox from "../../../AbsoluteBox";
import { MainButton } from "../../../../Button/MainBaseButton";

interface Props {
  handleClose: () => void;
}

const OrderFilterContent: FC<Props> = ({ handleClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedMarks = useTypedSelector((state) => state.filterProduct.values);

  const [filterValues, setFilterValues] = useState({
    colors: [],

    // photo: undefined,
    // discount: null,
    // cityId: null,
    // categoryId: null,

    // priceFrom: "",
    // priceTo: "",
  });

  const handleChangeQuery = (value: object) => {
    setFilterValues((prev) => {
      return {
        ...prev,
        ...value,
      };
    });
  };

  const handleFilterSubmit = () => {
    dispatch(setFilterProduct({ page: 1, ...filterValues }));
    handleClose();
    navigate("/app/announcement/list");
  };

  return (
    <Stack sx={{ paddingTop: "20px" }}>
      <Container>
        <Stack spacing={2}>
          {/* <ChooseMark
            handleChangeQuery={(value) => handleChangeQuery(value)}
            chosenValues={filterValues.colors}
          /> */}
        </Stack>
      </Container>

      <AbsoluteBox>
        <MainButton onClick={handleFilterSubmit} bgcolor="primary.main">
          Подтвердить
        </MainButton>
      </AbsoluteBox>
    </Stack>
  );
};

export default OrderFilterContent;
