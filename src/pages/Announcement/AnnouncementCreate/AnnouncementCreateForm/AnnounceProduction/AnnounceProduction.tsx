import { Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { StyledMainInput } from "../../../../../components/Input/StyledMainInput";
import { useTypedSelector } from "../../../../../redux/store";
import { setAnnounce } from "../../../../../redux/store/reducers/announce/announce.slice";
import { FormTitle } from "../AnnouncementCreateForm";

const AnnounceProduction = () => {
  const dispatch = useDispatch();
  const announceProduction = useTypedSelector(
    (state) => state.announce.values.production
  );

  const handleChange = (e: any) => {
    const { value } = e.target;

    dispatch(setAnnounce({ production: value }));
  };

  return (
    <Stack spacing={1}>
      <FormTitle title="Название Производителя" />
      <StyledMainInput
        onChange={(e) => handleChange(e)}
        value={announceProduction}
        required
        placeholder="Введите Производителя"
      />
    </Stack>
  );
};

export default AnnounceProduction;
