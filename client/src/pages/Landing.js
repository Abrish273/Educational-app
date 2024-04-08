import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Study from "../images/study.jpg";
import SatAI from "../images/satai.jpg";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <Stack justifyContent={"space-between"} height={"90dvh"}>
      <Stack sx={{
        marginLeft: 2,
        marginTop: 2,
      }}>
        <img src={SatAI} width={"5%"} alt="logo" />
      </Stack>

      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack
          sx={{
            width: { xs: "100%", sm: "50%", md: "40%", lg: "30%" },
          }}
        >
          <img src={Study} alt="study" style={{}} />
        </Stack>
        <Typography
          sx={{
            fontSize: "35px",
            fontWeight: "bold",
          }}
        >
          Welcome to{" "}
          <span
            style={{
              color: "#eb2027",
            }}
          >
            Sat
          </span>
          AI
        </Typography>
        <Typography
          sx={{
            marginBottom: "20px",
          }}
        >
          Empowering kids with enjoyable learning
        </Typography>
        <Button variant="contained" sx={{
            backgroundColor: "#f01f1e"
        }} onClick={() => navigate("/home")}>
          Study Now
        </Button>
      </Stack>
    </Stack>
  );
};

export default Landing;
