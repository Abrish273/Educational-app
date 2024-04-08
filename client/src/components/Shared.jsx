import { Stack, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const Shared = ({ Enjoyable } ) => {
  return (
    <Stack
      sx={{ background: "#f01f1e", height: "10dvh" }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography color={"#FFFFFF"} fontSize={"24px"} fontWeight={"bold"}>
        {Enjoyable}
      </Typography>
      <Stack>
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default Shared;
