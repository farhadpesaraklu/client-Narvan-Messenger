import { useState, useEffect, useRef } from "react";

interface Props {
  onBackClick?: () => void;
}
const SearchInput: React.FC<Props> = ({ onBackClick }) => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchInputRef && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);
  return (
    <div className="titleBarContainer has-background-info-light is-justify-content-space-between is-align-items-center is-flex ">
      <span className="has-background-info-light" onClick={onBackClick}>
        <i className="fas fa-arrow-left has-text-primary-dark is-clickable is-size-4 m-1"></i>
      </span>
      <input
        className="input is-success has-background-info-light"
        value={searchKeyword}
        onChange={handleSearchInputChange}
        type="text"
        placeholder="Search..."
        ref={searchInputRef}
      ></input>
    </div>
  );
};
export default SearchInput;
