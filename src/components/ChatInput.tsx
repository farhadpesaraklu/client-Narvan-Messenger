import { useState, FC, useRef, useEffect } from "react";
import { clientService } from "../GRPC";
import { Message } from "../protos/chat_pb";

const AttachIcon: FC = () => {
  return (
    <div>
      <i className="fas fa-paperclip has-text-primary-dark is-clickable is-size-4 mx-4" />
    </div>
  );
};

const SendIcon: FC = () => {
  return (
    <div>
      <i className="fa fa-paper-plane has-text-primary-dark is-clickable is-size-4 mx-4" />
    </div>
  );
};
const StickerIcon: FC = () => {
  return (
    <div>
      <i className="far fa-smile has-text-primary-dark is-clickable is-size-4 mx-4" />
    </div>
  );
};
const CameraIcon: FC = () => {
  return (
    <div>
      <i className="fas fa-camera has-text-primary-dark is-clickable is-size-4 mx-3" />
    </div>
  );
};

const VoiceIcon: FC = () => {
  return (
    <div>
      <i className="fas fa-microphone has-text-primary-dark is-clickable is-size-4 mx-4" />
    </div>
  );
};
// interface Props {
//   onInputChange?: () => void;
//   chatKeyword: string;
// }

const ChatInput: FC = () => {
  const [chatKeyword, setChatKeyword] = useState<string>("");

  useEffect(() => {
    const client = clientService;
    const messageTransfer = new Message();
    messageTransfer.setContent(chatKeyword);
    messageTransfer.setChannel("chatroom"); 
    messageTransfer.setSenderId(Math.random().toString());
    let time = new Date();
    messageTransfer.setCreationTime(+time);
    const stream = client.transferMessage(messageTransfer);
    stream.on("data", (response: Message) => {
      const data = response;
      
      console.log("response data", data);
      console.log(time);
    });
  });
  
  function handleInputeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setChatKeyword(e.target.value);
  }

  const chatInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (chatInputRef && chatInputRef.current) {
      chatInputRef.current.focus();
    }
  }, []);

  return (
    <div className="chatInputContainer is-flex is-justify-content-space-between is-align-items-center has-background-info-light p-3">
      <StickerIcon />
      <CameraIcon />
      <AttachIcon />
      <input
        className="input is-success is-rounded is-focused is-normal"
        placeholder="Type a message"
        value={chatKeyword}
        onChange={handleInputeChange}
        ref={chatInputRef}
      ></input>
      <span className="has-background-info-light">
        {!chatKeyword.length ? <VoiceIcon /> : <SendIcon />}
      </span>
    </div>
  );
};
export default ChatInput;
