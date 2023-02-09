import { FC } from "react";
import { useNavigate } from "react-router-dom";
import MainBaseButton from "../MainBaseButton/MainBaseButton";

interface Props {
  label: string;
}

const GoBackButton: FC<Props> = ({ label }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return <MainBaseButton onClick={handleClick}>{label}</MainBaseButton>;
};

export default GoBackButton;
