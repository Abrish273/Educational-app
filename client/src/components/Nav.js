import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import SatAI from "../images/satai.jpg";
import Learn from "../images/learn.png";

const Nav = () => {
  return (
    <div>
      <AppBar
        sx={{
          backgroundColor: "transparent",
          width: "100.5%",
          marginTop: "-0.45%",
          marginLeft: "-0.4%",
        }}
        position="sticky"
      >
        <Toolbar>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{
              width: "100%",
            }}
          >
            <Stack
              sx={{
                marginLeft: 2,
                marginTop: 1,
              }}
            >
              <img src={SatAI} width={"5%"} alt="logo" />
            </Stack>
            <Stack direction={"row"} alignItems={"center"} gap={3}>
              <img src={Learn} width={"12%"} alt="logo" />
              <Typography
                sx={{
                  color: "#000000",
                }}
              >
                Let's Learn by enjoying!
              </Typography>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
