import { Box, IconButton, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useDeleteProductColorMutation } from "../../../../../../redux/store/rtk-api/product-rtk/productEndpoints";
import { IProductColor } from "../../../../../../types/Management/IProductInfo";

import CloseIcon from "@mui/icons-material/Close";
import { useParams } from "react-router-dom";
import { useGetProductColorQuery } from "../../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";

interface Props {
  prevData: number[];
}

const DeleteColors: FC<Props> = ({ prevData }) => {
  const params = useParams();
  const { announceId } = params;

  const { data } = useGetProductColorQuery("");
  const [deleteColor] = useDeleteProductColorMutation();

  console.log("prevData: ", prevData);

  const testValues =
    data && prevData.map((prevRow) => data.filter((row) => row.id === prevRow));

  console.log("testValues: ", testValues);

  const sdf = testValues?.map((row) => row[0]);

  console.log("sdf: ", sdf);

  const handleDelete = (id: number) => {
    announceId && deleteColor({ productId: Number(announceId), colorId: id });
  };

  return (
    <Stack spacing={1}>
      <Typography>Удалить Выбранные Цвета</Typography>

      <Stack
        sx={{
          width: "200px",
          padding: "10px",
          border: "1px solid #000",
          borderRadius: "15px",
        }}
      >
        {testValues &&
          testValues.map((row) => (
            <Stack
              direction={"row"}
              justifyContent="space-between"
              alignItems="center"
              key={row[0].id}
            >
              <Stack direction={"row"} spacing={1} alignItems="center">
                <Box
                  sx={{
                    backgroundColor: row[0].value,
                    width: "15px",
                    height: "15px",
                    border: "1px solid #000",
                  }}
                />
                <Typography>{row[0].title}</Typography>
              </Stack>
              <IconButton onClick={() => handleDelete(row[0].id)}>
                <CloseIcon />
              </IconButton>
            </Stack>
          ))}
      </Stack>
    </Stack>
  );
};

export default DeleteColors;
