import { domain } from "node:process";
import React from "react";
import "./App.css";
import { MediaPlayer } from "./MediaPlayer/MediaPlayer";

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>MediaPLayer Wrapper Example</h1>

      <p id={"text-1"}>On Play I should disappear</p>
      <p id={"text-2"} style={{ visibility: "hidden" }}>
        On end I should appear
      </p>
      <MediaPlayer
        compId="vid-1"
        events={[
          {
            domEvent: "play",
            listeners: [
              () => {
                let elem = document.getElementById("text-1");
                if (elem) {
                  elem.style.visibility = "hidden";
                }
              },
            ],
          },
          {
            domEvent: "ended",
            listeners: [
              () => {
                let elem = document.getElementById("text-2");
                if (elem) {
                  elem.style.visibility = "";
                }
              },
            ],
          },
        ]}
        visibility=""
        source={{
          src:
            "//postsms-usw22.streaming.media.azure.net/041be8b3-c50f-42c5-801c-ecefaca07c61/SWF-cartoon-intro.ism/manifest",
          fullscreen: true,
          volumeControl: true,
        }}
        position={{
          top: 200,
          left: 200,
          width: 500,
          height: 400,
        }}
        control={{
          autoPlay: false,
          controlBar: true,
          hidePlayButton: false,
        }}
        ampLoadTimeout={0}
      />
    </div>
  );
}

export default App;
