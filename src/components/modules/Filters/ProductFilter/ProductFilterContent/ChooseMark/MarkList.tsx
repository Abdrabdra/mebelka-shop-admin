import { Checkbox, FormControlLabel, Stack } from "@mui/material";

import React, { FC, useEffect, useState } from "react";
import { useGetProductColorQuery } from "../../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";
import MarkOne from "./MarkOne";

interface Props {
  handleChangeQuery: (value: any) => void;
  chosenValues: number[];
}

const MarkList: FC<Props> = ({ handleChangeQuery, chosenValues }) => {
  const { data, isLoading, isSuccess } = useGetProductColorQuery("");

  const [marks, setMarks] = useState<number[]>(chosenValues);

  const handleSetMark = (id: number) => {
    setMarks((prev) => [...prev, id]);
  };
  const handleRemoveMark = (id: number) => {
    setMarks((prev) => [...prev.filter((row) => row !== id)]);
  };

  useEffect(() => {
    handleChangeQuery({ colors: marks });
  }, [marks]);

  return (
    <Stack
      sx={{
        minWidth: "300px",
        backgroundColor: "common.white",
        borderRadius: "12px",
        padding: "20px",
      }}
    >
      {isLoading
        ? "Загрузка..."
        : isSuccess
        ? data.map((row) => (
            <MarkOne
              key={row.id}
              id={row.id}
              title={row.title}
              marks={marks}
              handleSetMark={handleSetMark}
              handleRemoveMark={handleRemoveMark}
            />
          ))
        : "Ошибка при загрузки"}
    </Stack>
  );
};

export default MarkList;
