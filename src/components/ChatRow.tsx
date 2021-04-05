import { FC } from "react";
interface Props {
  onRowClick?: () => void;
}

const ChatRow: FC<Props> = ({ onRowClick }) => {
  return (
    <div onClick={onRowClick}>
      <div>
        <div className="chatRowContainer is-flex is-justify-content-space-between is-align-items-center  ">
          <div className="is-flex is-align-items-center">
            <div className="is-flex is-align-items-center">
              <img className="chatPageHeaderImage m-2 " alt="" />
            </div>
            <div className="">
              <p className="title is-5 is-size-5 ">Narvan Chat Room</p>
              <p className="chatRowParagraph subtitle is-size-7 has-text-grey ">
                <b>Admin: </b>Hi Farhad! We see this is your first time chatting
                with us. Welcome to Narvan group.
              </p>
            </div>
          </div>
          <div className=" has-text-grey mr-2 ">
            <p>Yesterday</p>
            <p>15:15</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatRow;
