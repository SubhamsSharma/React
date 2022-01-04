import React from "react";
import { BackgroundContext } from "./BackgroundContext";

import Home from "./Home";

export default function App() {
  return (
    <BackgroundContext.Provider value="red">
      {console.log(BackgroundContext)}
      <Home />
    </BackgroundContext.Provider>
  );
}
