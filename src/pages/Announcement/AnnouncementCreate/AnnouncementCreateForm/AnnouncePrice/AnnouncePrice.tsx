import { Stack } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { StyledMainInput } from "../../../../../components/Input/StyledMainInput";
import { useTypedSelector } from "../../../../../redux/store";
import { setAnnounce } from "../../../../../redux/store/reducers/announce/announce.slice";
import { FormTitle } from "../AnnouncementCreateForm";

interface Props {
  prevData?: number;
}

const AnnouncePrice: FC<Props> = ({ prevData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAnnounce({ price: prevData }));
  }, [prevData]);

  const announcePrice = useTypedSelector(
    (state) => state.announce.values.price
  );

  const [price, setPrice] = useState<number>();

  useEffect(() => {
    setPrice(announcePrice);
  }, [announcePrice]);

  const handleChange = (e: any) => {
    const { value } = e.target;

    dispatch(setAnnounce({ price: value }));
  };

  return (
    <Stack spacing={1}>
      <FormTitle title="Цена KZT" />
      <StyledMainInput
        onChange={(e) => handleChange(e)}
        value={price}
        required
        placeholder={`Напишите цену`}
      />
    </Stack>
  );
};

export default AnnouncePrice;
