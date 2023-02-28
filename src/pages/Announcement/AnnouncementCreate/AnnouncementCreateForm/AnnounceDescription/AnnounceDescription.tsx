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

const AnnounceDescription: FC<Props> = ({ prevData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAnnounce({ description: prevData }));
  }, [prevData]);

  const announceDescription = useTypedSelector(
    (state) => state.announce.values.description
  );

  const [description, setDescription] = useState<string>();

  useEffect(() => {
    setDescription(announceDescription);
  }, [announceDescription]);

  const handleChange = (e: any) => {
    const { value } = e.target;

    dispatch(setAnnounce({ description: value }));
  };

  return (
    <Stack spacing={1}>
      <FormTitle title="Описание" />
      <StyledMainInput
        onChange={(e) => handleChange(e)}
        value={description}
        required
        placeholder="Введите Описание"
      />
    </Stack>
  );
};

export default AnnounceDescription;
