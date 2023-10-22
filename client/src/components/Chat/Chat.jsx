import { useQuery } from "react-query";
import GetTenMessages from "../../hooks/GetTenMessages";
import Message from "./Message";
import Loading from "../events/Loading";
import { useContext, useEffect } from "react";
import { Context } from "../../App";
export default function Chat() {
  const { data, status } = useQuery(["Messages Lamp"], () => GetTenMessages());
  const { messageList, setMessageList } = useContext(Context);
  useEffect(() => {
    if (status === "success" && messageList.length === 0) {
      setMessageList(data);
    }
  }, [status]);
  return (
    <div className="h-[600px] w-[90%]  overflow-scroll max-w-[1500px] bg-ContastColor bg-opacity-40 border-[1.5px] border-BorderColor rounded-2xl flex flex-col items-center  gap-2 p-2 ">
      {status === "success" &&
        messageList.map((message, index) => (
          <Message key={(message._id, index)} message={message} />
        ))}
      {status === "loading" && <Loading></Loading>}
    </div>
  );
}
