import { Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { StyledMainInput } from "../../../../../components/Input/StyledMainInput";
import { useTypedSelector } from "../../../../../redux/store";
import { setAnnounce } from "../../../../../redux/store/reducers/announce/announce.slice";
import { FormTitle } from "../AnnouncementCreateForm";

const AnnouncePrice = () => {
  const dispatch = useDispatch();
  const announcePrice = useTypedSelector(
    (state) => state.announce.values.price
  );

  const handleChange = (e: any) => {
    const { value } = e.target;

    dispatch(setAnnounce({ price: value }));
  };

  return (
    <Stack spacing={1}>
      <FormTitle title="Цена KZT" />
      <StyledMainInput
        onChange={(e) => handleChange(e)}
        value={announcePrice}
        required
        placeholder={`Напишите цену`}
      />
    </Stack>
  );
};

export default AnnouncePrice;
