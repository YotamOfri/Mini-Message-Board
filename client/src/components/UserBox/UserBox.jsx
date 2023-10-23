import { useContext, useEffect, useState } from "react";
import "../../assets/Styles/Userbox.css";
import { useMutation } from "react-query";
import Profilepic from "./Profilepic/Profilepic";
import Soundbuttons from "./SoundButtons/Soundbuttons";
import UserForm from "./Form/UserForm";
import PostnewMessage from "../../hooks/PostnewMessage";
import SubmitButton from "./Form/SubmitButton";
import { Context } from "../../App";
export default function UserBox() {
  const { messageList, setMessageList } = useContext(Context);
  const [picture, setPicture] = useState(1);
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");
  const [Error, setError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { mutate, isLoading, isError } = useMutation(PostnewMessage, {
    onSuccess: () => {
      setText("");
      setIsSuccess(true);
    },
  });
  useEffect(() => {
    if (isSuccess) setIsSuccess(false);
  }, [isSuccess]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length === 0 || text.length === 0) {
      setError(true);
    } else {
      let Message = {
        username: username,
        text: text,
        picture: picture,
      };
      mutate(Message);
      Message = {
        username: username,
        text: text,
        picture: picture,
        _id: Date + username,
      };
      if (!isError) setMessageList([...messageList, Message]);
    }
  };
  useEffect(() => {
    if (isError) setMessageList(messageList.slice(1));
  }, [isError]);
  return (
    <form className="Userbox sm:px-5 p-2 w-[90%] min-h-[200px] max-w-[1500px] border-[1.5px] border-BorderColor rounded-2xl flex gap-5 items-center">
      <div className="h-full">
        <div className="h-[70%] flex items-end">
          <Profilepic picture={picture} setPicture={setPicture}></Profilepic>
        </div>
        <div className="h-[30%] flex items-end">
          <Soundbuttons></Soundbuttons>
        </div>
      </div>
      <div className="h-full w-full">
        <UserForm
          text={text}
          setText={setText}
          username={username}
          setUsername={setUsername}
          Error={Error}
        ></UserForm>
      </div>
      <SubmitButton
        isLoading={isLoading}
        handleSubmit={handleSubmit}
        isError={isError}
      ></SubmitButton>
    </form>
  );
}
