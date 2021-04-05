import ChatRow from "./ChatRow";

interface Props {
  onRowClick?: () => void;
}
const ChatList: React.FC<Props> = ({ onRowClick }) => {
  return (
    <div className="chatListContainer is-block">
      <div>
        <ChatRow onRowClick={onRowClick} />
      </div>
      <div className="chatListBottomContainer has-background-info-light"></div>
    </div>
  );
};
export default ChatList;
