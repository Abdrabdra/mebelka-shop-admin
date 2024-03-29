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

const AnnounceDiscount: FC<Props> = ({ prevData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAnnounce({ discount: prevData }));
  }, [prevData]);

  const announceDiscount = useTypedSelector(
    (state) => state.announce.values.discount
  );

  const [discount, setDiscount] = useState<number>();

  useEffect(() => {
    setDiscount(announceDiscount);
  }, [announceDiscount]);

  const handleChange = (e: any) => {
    const { value } = e.target;

    if (value >= 0 && value <= 100) {
      dispatch(setAnnounce({ discount: value }));
    }
  };

  return (
    <Stack spacing={1} sx={{ minWidth: 120 }}>
      <FormTitle title="Скидка" />
      <StyledMainInput
        onChange={(e) => handleChange(e)}
        value={discount}
        required
        placeholder={`Укажите число 0-100 (%)`}
      />
    </Stack>
  );
};

export default AnnounceDiscount;
