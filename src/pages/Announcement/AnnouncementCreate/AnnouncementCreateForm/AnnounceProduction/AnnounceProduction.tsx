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

const AnnounceProduction: FC<Props> = ({ prevData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAnnounce({ production: prevData }));
  }, [prevData]);

  const announceProduction = useTypedSelector(
    (state) => state.announce.values.production
  );

  const [production, setProduction] = useState<string>();

  useEffect(() => {
    setProduction(announceProduction);
  }, [announceProduction]);

  const handleChange = (e: any) => {
    const { value } = e.target;

    dispatch(setAnnounce({ production: value }));
  };

  return (
    <Stack spacing={1}>
      <FormTitle title="Название Производителя" />
      <StyledMainInput
        onChange={(e) => handleChange(e)}
        value={production}
        required
        placeholder="Введите Производителя"
      />
    </Stack>
  );
};

export default AnnounceProduction;
