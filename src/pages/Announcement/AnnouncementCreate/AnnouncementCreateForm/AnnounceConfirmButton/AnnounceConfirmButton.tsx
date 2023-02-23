import { CircularProgress, Stack, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import { useTypedSelector } from "../../../../../redux/store";
import { announceReset } from "../../../../../redux/store/reducers/announce/announce.slice";
import {
  useCreateProductMutation,
  useUpdateProductMutation,
} from "../../../../../redux/store/rtk-api/product-rtk/productEndpoints";

interface Props {
  forUpdate?: boolean;
}

const AnnounceConfirmButton: FC<Props> = ({ forUpdate }) => {
  const values = useTypedSelector((state) => state.announce.values);

  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    if (
      values.file.length > 0 &&
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

  const [
    create,
    {
      isSuccess: isCreateSuccess,
      isError: isCreateError,
      isLoading: isCreateLoading,
      error: createError,
    },
  ] = useCreateProductMutation();

  const [
    update,
    {
      isSuccess: isUpdateSuccess,
      isError: isUpdateError,
      isLoading: isUpdateLoading,
      error: updateError,
    },
  ] = useUpdateProductMutation();

  const formData = new FormData();

  for (let i = 0; i < values.file.length; i++) {
    formData.append("file", values.file[i]);
  }

  formData.append("title", values.title);
  formData.append("price", String(values.price));
  formData.append("categoryId", String(values.categoryId));

  formData.append("colors", values.colors.join(","));
  formData.append("frames", values.frames.join(","));

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

  const handleCreate = () => {
    create(formData);
  };

  const handleUpdate = () => {
    update(formData);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isUpdateSuccess || isCreateSuccess) {
      setTimeout(() => {
        dispatch(announceReset());
        navigate("/app/announcement/list");
      }, 3000);
    }
  }, [isUpdateSuccess, isCreateSuccess]);

  return (
    <Stack>
      <MainBaseButton
        onClick={forUpdate ? handleUpdate : handleCreate}
        disabled={isFilled ? false : true}
        sx={{ maxWidth: "125px" }}
      >
        {forUpdate ? "Обновить Карточку" : "Создать Карточку"}
      </MainBaseButton>

      {!isFilled && <Typography>Заполните выше указанные поля!</Typography>}
      {isCreateLoading ||
        (isUpdateLoading && (
          <>
            <Typography>Загрузка</Typography>
            <CircularProgress />
          </>
        ))}

      {isUpdateSuccess ||
        (isCreateSuccess && (
          <Typography sx={{ color: "success.main" }}>
            Успешно Отправлено!
          </Typography>
        ))}

      {isUpdateError ||
        (isCreateError && (
          <Typography sx={{ color: "error.main" }}>
            Ошибка при отправке!
          </Typography>
        ))}
    </Stack>
  );
};

export default AnnounceConfirmButton;
