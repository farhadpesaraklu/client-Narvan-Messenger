import { useState } from "react";
import * as React from "react";
import "./App.css";
import Header from "./components/Header";
import TitleBar from "./components/TitleBar";
import "./Styles.scss";
import "bulma/css/bulma.css";
import ChatPage from "./components/ChatPage";
import ChatList from "./components/ChatList";

import SearchInput from "./components/SearchInput";
import DefaultChatPageMode from "./components/DefaultChatPageMode";

function App() {
  const [showSearchBox, setShowSearchBox] = useState<boolean>(false);
  const [showChatPage, setShowChatPage] = useState<boolean>(false);

  function handleSearchClick() {
    setShowSearchBox(true);
  }

  function handleBackClick() {
    setShowSearchBox(false);
  }

  function handleCloseButton() {
    setShowChatPage(false);
  }
  function handleShowChatPage() {
    setShowChatPage(true);
  }
  return (
    <div className="basicContainer">
      <div>
        <Header />
      </div>
      <div className="is-flex">
        <div className="sideBarContainer">
          {showSearchBox === true ? (
            <SearchInput onBackClick={handleBackClick} />
          ) : (
            <TitleBar onSearchClick={handleSearchClick} />
          )}
          <div>
            <ChatList onRowClick={handleShowChatPage} />
          </div>
        </div>
        <div>
          {showChatPage ? (
            <ChatPage onClick={handleCloseButton}  />
          ) : (
            <DefaultChatPageMode />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
