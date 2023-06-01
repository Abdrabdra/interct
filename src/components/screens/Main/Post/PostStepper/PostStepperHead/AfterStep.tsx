import { Box } from "@mui/material";
import { FC } from "react";

interface Props {
  step: number;
}

const AfterStep: FC<Props> = ({ step }) => {
  return (
    <>
      {[...Array(15 - step)].map((row, index) => (
        <Box
          key={index}
          sx={{
            width: "17px",
            height: "3px",
            borderRadius: "1px",
            backgroundColor: "grey.500",
          }}
        />
      ))}
    </>
  );
};

export default AfterStep;
