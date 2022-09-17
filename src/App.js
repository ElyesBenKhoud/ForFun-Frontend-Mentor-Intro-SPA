import React from "react";
import "./App.css";
import BodyContainer from "./component/BodyContainer";
import Header from "./component/Header";
function App() {
  return (
    <>
      <div className="homePage">
        <Header />
        <BodyContainer />
      </div>
    </>
  );
}

export default App;
