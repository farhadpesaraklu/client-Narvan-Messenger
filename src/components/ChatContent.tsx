const ChatContent: React.FC = () => {
  return (
    <div className="chatContentContainer is-flex is-flex-direction-column">
      <span className="receivedMessageStyle p-1 mx-4 my-2">
        <b className="has-text-link">Farhad:</b> Hi everyone!
      </span>
      <span className="receivedMessageStyle p-1 mx-4 my-2">
        <b className="has-text-link">Farhad:</b> it makes me happy to be among
        you :)
      </span>
      <span className="sentMessageStyle p-1 mx-4 my-2">
        <b className="has-text-danger-dark">Admin:</b> Hi Farhad!
      </span>
      <span className="sentMessageStyle p-1 mx-4 my-2">
        <b className="has-text-danger-dark">Admin:</b> We see this is your first
        time chatting with us.
      </span>
      <span className="sentMessageStyle p-1 mx-4 my-2">
        <b className="has-text-danger-dark">Admin:</b> Welcome to Narvan group.
      </span>
    </div>
  );
};
export default ChatContent;
