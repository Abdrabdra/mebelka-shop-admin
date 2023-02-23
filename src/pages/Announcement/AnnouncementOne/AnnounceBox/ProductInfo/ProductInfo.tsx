import { Box, Divider, Stack, Typography } from "@mui/material";

const ProductInfo = () => {
  const stateData = [
    { id: 0, title: "Название товара", value: "Название" },
    { id: 1, title: "Наименование", value: "Наименование" },
    { id: 2, title: "Описание товара", value: "товара" },
    { id: 3, title: "Артикул", value: "Объем двигателя" },
    { id: 4, title: "Цена KZT", value: "KZT" },
    { id: 5, title: "Категория", value: "Мебель" },
    { id: 6, title: "Подкатегория", value: "Подкатегория" },
    { id: 7, title: "Цвет", value: "Текстура" },
    { id: 8, title: "Текстура", value: "Цвет" },
    { id: 9, title: "Длина (mm)", value: "Длина (mm)" },
    { id: 10, title: "Ширина (mm)", value: "Ширина (mm)" },
  ];

  return (
    <Stack spacing={2}>
      <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
        О товаре
      </Typography>

      <Stack
        sx={{
          backgroundColor: "secondary.light",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
          Диван “Lanister”
        </Typography>
        {/* {stateData.map((row) => (
          <Stack key={row.id} spacing={1} sx={{ paddingTop: "0.5rem" }}>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{
                  flex: "1",
                  color: "secondary.900",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {row.title}
              </Typography>
              <Typography
                sx={{
                  flex: "1",
                  display: "display",
                  alignItems: "center",
                  fontWeight: 500,
                }}
              >
                {row.id === 3
                    ? `${row.value}л`
                    : row.id === 4
                    ? row.value
                    : row.id === 7
                    ? row.value === WheelEnum.LEFT
                      ? "Слева"
                      : "Справа"
                    : row.id === 9
                    ? row.value
                      ? "Да"
                      : "Нет"
                    : row.id === 10
                    ? row.value === StatementEnum.EMERGENCY
                      ? "Аварийная"
                      : row.value === StatementEnum.NEW
                      ? "Новое"
                      : "Б/У"
                    : row.value}
              </Typography>
            </Box>
            {stateData.length !== row.id + 1 && <Divider />}
          </Stack>
        ))} */}
      </Stack>
    </Stack>
  );
};

export default ProductInfo;
