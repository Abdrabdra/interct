import { Box } from "@mui/material";

const AbsoluteElements = () => {
  return (
    <>
      <Box
        sx={{
          top: "-5px",
          left: "0",
          right: "0",
          width: "32px",
          height: "3px",
          marginLeft: "auto",
          marginRight: "auto",
          position: "absolute",
          borderRadius: "20px",
          backgroundColor: "primary.main",
        }}
      />
      <Box
        sx={{
          content: '""',
          width: "40px",
          height: "0px",
          top: -2,
          left: "0",
          right: "0",
          marginLeft: "auto",
          marginRight: "auto",
          position: "absolute",
          background:
            "linear-gradient(180deg, rgba(45, 195, 106, 0.2) 0%, rgba(45, 195, 106, 0) 99.4%)",
          borderRight: "10px solid transparent",
          borderLeft: "10px solid transparent",
          borderBottom: "40px solid  rgba(45, 195, 106, 0.2) ",
        }}
      />
    </>
  );
};

export default AbsoluteElements;
