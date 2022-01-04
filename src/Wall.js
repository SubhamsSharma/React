import React from "react";
import { BackgroundContext } from "./BackgroundContext";

export default function Wall() {
  const color = React.useContext(BackgroundContext);
  return (
    <div style={{ width: 400, height: 400, backgroundColor: color }}>
      {" "}
      Room {console.log(color)}
    </div>
  );
}
