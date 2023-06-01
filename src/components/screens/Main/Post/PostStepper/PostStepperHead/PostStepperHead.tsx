import {  Stack } from "@mui/material";

import BeforeStep from "./BeforeStep";
import { RootState, useTypedSelector } from "@store/index";
import AfterStep from "./AfterStep";
import CurrentStep from "./CurrentStep";

const PostStepperHead = () => {
  const activeStep = useTypedSelector((state: RootState) => state.stepper.step);

  return (
    <Stack direction={"row"} spacing={0.8}>
      <BeforeStep step={activeStep} />
      <CurrentStep />
      <AfterStep step={activeStep} />
    </Stack>
  );
};

export default PostStepperHead;
