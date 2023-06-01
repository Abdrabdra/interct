import { Box } from "@mui/material";
import { FC } from "react";

interface Props {
  step: number;
}

const BeforeStep: FC<Props> = ({ step }) => {
  return (
    <>
      {[...Array(step)].map((row, index) => (
        <Box
          key={index}
          sx={{
            width: "17px",
            height: "3px",
            borderRadius: "1px",
            backgroundColor: "primary.main",
          }}
        />
      ))}
    </>
  );
};

export default BeforeStep;
