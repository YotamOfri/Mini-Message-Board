import Chat from "./components/Chat/Chat";
import StarsAnimation from "./components/FallingStars/StarsAnimation";
import UserBox from "./components/UserBox/UserBox";
import React, { useState } from "react";
export const Context = React.createContext();
export default function App() {
  const [messageList, setMessageList] = useState([]);
  const contextValue = { messageList, setMessageList };
  return (
    <div className="h-[100dvh] min-h-[850px] overflow-hidden relative font-mono text-TextColor flex flex-col items-center py-10 gap-2">
      <Context.Provider value={contextValue}>
        <StarsAnimation></StarsAnimation>
        <Chat></Chat>
        <UserBox></UserBox>
      </Context.Provider>
    </div>
  );
}
