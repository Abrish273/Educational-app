import React from "react";
import Card from "@mui/material/Card";

const Cards = ({ img, alt, onClick }) => {
  return (
    <>
      {img && alt && (
        <Card onClick={onClick} sx={{
            cursor: 'pointer'
        }}>
          <img
            style={{
              width: "100%",
              height: "200px",
            }}
            src={img}
            alt={alt}
          />
        </Card>
      )}
    </>
  );
};

export default Cards;
