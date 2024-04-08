import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MyAccordion = (props) => {
    console.log("from MyAccordion",props);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Accordion defaultExpanded={props.defaultExpanded || false}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="general-accordion-content"
          id="general-accordion-header"
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            {props.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {props.data.map((item, index) => (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index + 1}-content`}
                  id={`panel${index + 1}-header`}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                    }}
                  >
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ fontFamily: "Poppins" }}>
                    {item.answers}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default MyAccordion;
