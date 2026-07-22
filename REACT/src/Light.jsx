import { useState } from "react";
import lightOn from "./assets/Light on.png";
import lightOff from "./assets/light off.png";

function Light() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{ textAlign: "center" }}>
        <h1>LIGHT ON AND OFF</h1>
      <img
        src={isOn ? lightOn : lightOff}
        alt="Light"
        width="250"
      />

      <br /><br />

      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}

export default Light;