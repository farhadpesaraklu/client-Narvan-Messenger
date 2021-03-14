import ChatRow from "./ChatRow";

export default function ChatList(){
    return(
        <div className="chatListContainer is-block">
            <div>
        <ChatRow/>
            </div>
            <div className="chatListBottomContainer has-background-info-light"></div>
        </div>
    )
}