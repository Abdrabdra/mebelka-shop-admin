import * as React from "react";
import { useDispatch } from "react-redux";
import {
  Slide,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Icon,
  Input,
  Stack,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

import CloseIcon from "@mui/icons-material/Close";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

import { setFilterProductReset } from "../../../../../redux/store/reducers/filter/filterProduct/filterProduct.slice";
import { useTypedSelector } from "../../../../../redux/store";
import { MainButton } from "../../../../Button/MainBaseButton";
import { OrderFilterContent } from "../OrderFilterContent";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const OrderFilterButton = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFilterReset = () => {
    dispatch(setFilterProductReset());
    setOpen(false);
  };

  const val = useTypedSelector((state) => state.filterProduct.values);

  return (
    <>
      <Input placeholder="Поиск" disableUnderline sx={{ flex: 1 }} />
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          minWidth: "50px",
          width: "220px",
          // width: "50px",
          height: "50px",
          borderRadius: "12px",
          color: "#000",
          backgroundColor: "primary.light",
        }}
      >
        Фильтры
        {/* <Icon component={TuneOutlinedIcon} /> */}
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Фильтры Заказов
            </Typography>
            <Stack>
              <MainButton onClick={handleFilterReset} bgcolor="transparent">
                Сбросить
              </MainButton>
            </Stack>
          </Toolbar>
        </AppBar>

        <OrderFilterContent handleClose={handleClose} />
      </Dialog>
    </>
  );
};

export default OrderFilterButton;
