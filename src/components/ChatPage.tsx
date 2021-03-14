import ChatPageHeader from "./ChatPageHeader";
import ChatInput from "./ChatInput";
import ChatContent from "./ChatContent";

interface Props {
  onClick?: () => void;
}

const ChatPage: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="chatPageContainer">
      <ChatPageHeader onClosButton={onClick} />
      <ChatContent />
      <ChatInput />
    </div>
  );
};
export default ChatPage;
