import React from "react";

import Header from "./components/Header/Header";
import LeftSide from "./components/LeftSide/LeftSide";
import RightSide from "./components/RightSide/RightSide";
import CenterSide from "./components/CenterSide/CenterSide";

function App() {
  return (
    <div>
      <Header />

      <div className="flex space-x-7">
        <LeftSide />
        <CenterSide />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
