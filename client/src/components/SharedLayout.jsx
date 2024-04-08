import { Button } from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ChatIcon from "@mui/icons-material/Chat";

const SharedLayout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Outlet />
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("chat")}
        style={{
          position: "fixed",
          bottom: "16px",
          right: "30px",
          height: "60px",
          borderRadius: "50%",
          zIndex:2,
        }}
      >
        <ChatIcon />
      </Button>
    </div>
  );
};

export default SharedLayout;
