import * as React from "react";
import { render } from "react-dom";
import { ColoredUserPic } from "./component";

render(
  <React.StrictMode>
    <ColoredUserPic src="./avatar.png" />
    <ColoredUserPic
      src="./avatar.png"
      backgroundSolor="white"
      colors={["red", "orange"]}
      hoverColors={["orange", "red"]}
    />
    <ColoredUserPic src="./avatar.png" size={200} margin={30} colorWidth={30} />
  </React.StrictMode>,
  document.getElementById("root")
);
