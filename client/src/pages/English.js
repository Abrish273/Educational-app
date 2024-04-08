import React from "react";
import Typography from "@mui/material/Typography";
import MyAccordion from "../components/MyAccordion";
import { Stack } from "@mui/material";
import Db from "../Data/Db.json";
import SatAI from "../images/satai.jpg";

const Maths = ({ title }) => {
  return (
    <Stack sx={{ width: "100%" }} gap={3}>
      <Stack
        sx={{
          marginLeft: 2,
          marginTop: 2,
        }}
      >
        <img src={SatAI} width={"5%"} alt="logo" />
      </Stack>
      <Stack
        sx={{ background: "#ffffff", height: "10dvh" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography color={"#000000"} fontSize={"24px"} fontWeight={"bold"}>
          Enjoyable English
        </Typography>
      </Stack>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // width: "80%",
          margin: "0px 8%",
          gap: "5px",
        }}
      >
        <MyAccordion
          data={Db.english1}
          defaultExpanded={true}
          title={"Geneneral English"}
        />
        <MyAccordion data={Db.english2} title={"English in details"} />
      </div>
    </Stack>
  );
};

export default Maths;
