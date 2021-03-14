interface Props {
  onClosButton?: () => void;
}

const ChatPageHeader: React.FC<Props> = ({ onClosButton }) => {
  return (
    <div className=" has-background-info-light">
      <div className="chatPageHeaderContainer is-flex is-justify-content-space-between is-align-items-center">
        <span className="has-background-info-light" onClick={onClosButton}>
          <i className="fas fa-times has-text-primary-dark  is-clickable is-size-4" />
        </span>

        <div className="is-flex is-justify-content-space-around is-align-items-center">
          <img
            className="chatPageHeaderImage is-justify-content-space-between is-align-items-center"
            alt=""
          />
          <div>
            <p className="title is-5 is-size-5  has-text-primary-dark">FARHAD</p>
          </div>
        </div>
        <span>
          <i className="fa fa-ellipsis-v has-text-primary-dark is-clickable is-size-4 mr-1"></i>
        </span>
      </div>
    </div>
  );
};
export default ChatPageHeader;
