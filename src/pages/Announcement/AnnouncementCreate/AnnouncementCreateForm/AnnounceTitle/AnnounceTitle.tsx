import { Stack } from "@mui/material";
import { FC, useEffect, useState } from "react";
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

  useEffect(() => {
    dispatch(setAnnounce({ title: prevData }));
  }, [prevData]);

  const announceTitle = useTypedSelector(
    (state) => state.announce.values.title
  );

  const [title, setTitle] = useState<string>();

  useEffect(() => {
    setTitle(announceTitle);
  }, [announceTitle]);

  const handleChange = (e: any) => {
    const { value } = e.target;

    setTitle(value);
    dispatch(setAnnounce({ title: value }));
  };

  return (
    <Stack spacing={1}>
      <FormTitle title="Название товара" />
      <StyledMainInput
        onChange={(e) => handleChange(e)}
        value={title}
        required
        placeholder="Введите название"
      />
    </Stack>
  );
};

export default AnnounceTitle;
