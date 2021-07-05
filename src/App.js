import React from "react";
import Header from "./Header";
import Main from "./Main";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <div className="bodyWrapper">
        <Main />
        {/*<Sidebar /> */}
      </div>
      {/*   <Footer /> */}
    </div>
  );
}

export default App;
