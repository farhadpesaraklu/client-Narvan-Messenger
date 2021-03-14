import "../Styles.scss";

interface Props {
  onSearchClick?: () => void;
  onSideBarClick?: () => void;
}

const TitleBar: React.FC<Props> = ({ onSearchClick, onSideBarClick }) => {
  return (
    <div className="titleBarContainer has-background-info-light is-flex is-justify-content-space-between is-align-items-center ">
      <span className="has-background-info-light" onClick={onSideBarClick}>
        <i className="fas fa-bars has-text-primary-dark  is-clickable is-size-4"></i>
      </span>
      <p className="is-size-4 has-text-primary-dark "> Narvan Messenger</p>
      <span className="has-background-info-light" onClick={onSearchClick}>
        <i className="fas fa-search has-text-primary-dark is-clickable is-size-4 is-clickable is-size-4"></i>
      </span>
    </div>
  );
};

export default TitleBar;
