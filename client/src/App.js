// import { useState } from "react";
// import ChatBot from "./pages/Chatbot";
// import { Button } from "@mui/material";
// import ChatIcon from "@mui/icons-material/Chat";

// function App() {
//   const [isChatBotOpen, setIsChatBotOpen] = useState(false);

//   const handleChatBotToggle = () => {
//     setIsChatBotOpen(!isChatBotOpen);
//   };
//   return (
//     <div style={{ padding: "16px" }}>

//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleChatBotToggle}
//         style={{
//           position: "fixed",
//           bottom: "16px",
//           right: "16px",
//           height: "60px",
//           borderRadius: "50%",
//         }}
//       >
//         <ChatIcon />
//       </Button>
//       {isChatBotOpen && <ChatBot onClose={handleChatBotToggle} />}
//     </div>
//   );
// }

// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Chatbot from "./pages/Chatbot";
import Bio from "./pages/Bio";
import Phy from "./pages/Phy";
import Eng from "./pages/English";
import Maths from "./pages/Maths";
import SharedLayout from "./components/SharedLayout";
import NewPage from "./pages/NewPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="chat" element={<Chatbot />} />
        <Route element={<SharedLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="mat" element={<Maths />} />
          <Route path="bio" element={<Bio />} />
          <Route path="phy" element={<Phy />} />
          <Route path="eng" element={<Eng />} />
          <Route path="img" element={<NewPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
