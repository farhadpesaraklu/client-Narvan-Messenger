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
  // const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const [showChatPage, setShowChatPage] = useState<boolean>(true);

  function handleSearchClick() {
    setShowSearchBox(true);
  }

  // function handleSideBarClick(){
  //   setShowSideBar(true)
  // }

  function handleBackClick() {
    setShowSearchBox(false);
  }

  function handleCloseButton() {
    setShowChatPage(false);
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
            <ChatList />
          </div>
        </div>
        <div>
          {showChatPage ? (
            <ChatPage onClick={handleCloseButton} />
          ) : (
            <DefaultChatPageMode />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
