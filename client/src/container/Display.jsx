import React from "react";
import Cards from "../components/Card";
import Maths from "../images/marts.jpg";
import English from "../images/eng.webp";
import Physics from "../images/physics.jpg";
import Biology from "../images/bio.jpg";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Display = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{
          margin: "25px",
        }}
      >
        <Grid
          item
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            gap: "9px",
            paddingRight: { md: "112px" },
          }}
        >
          <Cards img={Maths} alt={"maths"} onClick={() => navigate("/mat")} />
          <Button variant="contained" onClick={() => navigate("/mat")}  sx={{
            backgroundColor:"#f01f1e"
          }}>
            Study Now
          </Button>
        </Grid>
        <Grid
          item
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            paddingRight: { md: "112px" },
            gap: "9px",
          }}
        >
          <Cards img={Physics} alt={"Physics"}   onClick={() => navigate("/phy")}/>
          <Button variant="contained"  onClick={() => navigate("/phy")} sx={{
            backgroundColor:"#f01f1e"
          }}>Study Now</Button>
        </Grid>

        <Grid
          item
          md={6}
          sx={{
            display: "flex",
            paddingRight: { md: "112px" },
            flexDirection: "column",
            // alignItems: "center",
            gap: "9px",
          }}
        >
          <Cards img={Biology} alt={"Biology"}   onClick={() => navigate("/bio")}/>
          <Button variant="contained"  onClick={() => navigate("/bio")} sx={{
            backgroundColor:"#f01f1e"
          }}>Study Now</Button>
        </Grid>
        <Grid
          item
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            paddingRight: { md: "112px" },
            matginRight: { md: "112px" },
            gap: "9px",
          }}
        >
          <Cards img={English} alt={"English"}   onClick={() => navigate("/eng")}/>
          <Button variant="contained"  onClick={() => navigate("/eng")} sx={{
            backgroundColor:"#f01f1e"
          }}>Study Now</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Display;
