import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import { useTypedSelector } from "../../../../../redux/store";
import { useCreateProductMutation } from "../../../../../redux/store/rtk-api/product-rtk/productEndpoints";

const AnnounceConfirmButton = () => {
  const values = useTypedSelector((state) => state.announce.values);

  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    if (
      values.title &&
      values.production &&
      values.cityId &&
      values.categoryId &&
      values.colors.length > 0 &&
      values.frames.length > 0 &&
      values.decorId
    ) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, [values]);

  const [create] = useCreateProductMutation();

  const formData = new FormData();

  formData.append("file", "");
  formData.append("title", values.title);
  formData.append("price", String(values.price));
  formData.append("categoryId", String(values.categoryId));

  for (let i = 0; i < values.colors.length; i++) {
    formData.append("colors", String(values.colors[i]));
  }
  for (let i = 0; i < values.frames.length; i++) {
    formData.append("frames", String(values.frames[i]));
  }

  formData.append("length", String(values.length));
  formData.append("width", String(values.width));
  formData.append("height", String(values.height));
  formData.append("decorId", String(values.decorId));
  formData.append("liftingMechanism", String(values.liftingMechanism));
  formData.append("laundryBoxes", String(values.laundryBoxes));
  formData.append("production", String(values.production));
  formData.append("cityId", String(values.cityId));
  formData.append("discount", String(values.discount));
  formData.append("marketId", String(3));

  const handleClick = () => {
    create(formData);
  };

  return (
    <Stack>
      <MainBaseButton
        onClick={handleClick}
        disabled={isFilled ? false : true}
        sx={{ maxWidth: "125px" }}
      >
        asd
      </MainBaseButton>
      {!isFilled && <Typography>Заполните выше указанные поля!</Typography>}
    </Stack>
  );
};

export default AnnounceConfirmButton;
