import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { RootState, useTypedSelector } from "@store/index";

interface SubmitButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  onClick?: any;
}

const GetStepButtonTitle = () => {
  const currentStep = useTypedSelector(
    (state: RootState) => state.stepper.step
  );

  return (
    <>
      {currentStep === 14
        ? "Закончить"
        : currentStep === 15
        ? "На Главную"
        : "Подтвердить"}
    </>
  );
};

const SubmitButton = styled(
  ({ type, disabled, onClick }: SubmitButtonProps) => (
    <Button
      onClick={onClick}
      type={type}
      variant="contained"
      fullWidth
      disabled={disabled ? disabled : false}
    >
      {GetStepButtonTitle()}
    </Button>
  )
)(({ theme }) => ({
  backgroundColor: "primary.main",
  borderRadius: "10px",

  fontSize: "18px",
  fontWeight: 600,
}));

export default SubmitButton;
