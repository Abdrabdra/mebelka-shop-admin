import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { StyledMainInput } from "../../../../../components/Input/StyledMainInput";
import { IMarket } from "../../../../../types/Announcement/OneAnnouncement.type";

interface Props {
  market: IMarket;
}

const ShopInfo: FC<Props> = ({ market }) => {
  return (
    <Stack spacing={2}>
      <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
        Информация
      </Typography>

      <Stack direction="row" spacing={3}>
        <Stack spacing={2}>
          <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
            Информация о заказчике
          </Typography>

          <Stack>
            <Typography sx={{ fontSize: "16px" }}>Имя</Typography>
            <StyledMainInput
              value={market.title}
              bgcolor="secondary.light"
              bordercolor="transparent"
              disabled
            />
          </Stack>
          <Stack>
            <Typography sx={{ fontSize: "16px" }}>Номер телефона</Typography>
            <StyledMainInput
              value={market.street}
              bgcolor="secondary.light"
              bordercolor="transparent"
              disabled
            />
          </Stack>
          <Stack>
            <Typography sx={{ fontSize: "16px" }}>E-mail</Typography>
            <StyledMainInput
              value={market.phone}
              bgcolor="secondary.light"
              bordercolor="transparent"
              disabled
            />
          </Stack>
          <Stack>
            <Typography sx={{ fontSize: "16px" }}>Адрес</Typography>
            <StyledMainInput
              value={market.email}
              bgcolor="secondary.light"
              bordercolor="transparent"
              disabled
            />
          </Stack>
        </Stack>

        <Stack spacing={2}>
          <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
            Информация о вас
          </Typography>

          <Stack>
            <Typography sx={{ fontSize: "16px" }}>Название компании</Typography>
            <StyledMainInput
              value={market.title}
              bgcolor="secondary.light"
              bordercolor="transparent"
              disabled
            />
          </Stack>
          <Stack>
            <Typography sx={{ fontSize: "16px" }}>Название улицы</Typography>
            <StyledMainInput
              value={market.street}
              bgcolor="secondary.light"
              bordercolor="transparent"
              disabled
            />
          </Stack>
          <Stack>
            <Typography sx={{ fontSize: "16px" }}>Номер телефона</Typography>
            <StyledMainInput
              value={market.phone}
              bgcolor="secondary.light"
              bordercolor="transparent"
              disabled
            />
          </Stack>
          <Stack>
            <Typography sx={{ fontSize: "16px" }}>Почта</Typography>
            <StyledMainInput
              value={market.email}
              bgcolor="secondary.light"
              bordercolor="transparent"
              disabled
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ShopInfo;
