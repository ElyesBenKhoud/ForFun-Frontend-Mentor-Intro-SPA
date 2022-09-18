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
        <div className="footer">
          Copyright ©
          <a href="https://www.linkedin.com/in/mohamedelyes-benkhoud/">
            {" "}
            Elyes Ben khoud
          </a>{" "}
          2022
        </div>
      </div>
    </>
  );
}

export default App;
