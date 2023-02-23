import { Stack } from "@mui/material";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { StyledMainInput } from "../../../../../components/Input/StyledMainInput";
import { useTypedSelector } from "../../../../../redux/store";
import { setAnnounce } from "../../../../../redux/store/reducers/announce/announce.slice";
import { FormTitle } from "../AnnouncementCreateForm";

interface Props {
  prevData?: string;
}

const AnnounceTitle: FC<Props> = ({ prevData }) => {
  const dispatch = useDispatch();

  if (prevData) {
    dispatch(setAnnounce({ title: prevData }));
  }

  const announceTitle = useTypedSelector(
    (state) => state.announce.values.title
  );

  const handleChange = (e: any) => {
    const { value } = e.target;

    dispatch(setAnnounce({ title: value }));
  };

  return (
    <Stack spacing={1}>
      <FormTitle title="Название товара" />
      <StyledMainInput
        onChange={(e) => handleChange(e)}
        value={announceTitle}
        required
        placeholder="Введите название"
      />
    </Stack>
  );
};

export default AnnounceTitle;
