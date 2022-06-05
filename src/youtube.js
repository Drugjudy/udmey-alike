import React from "react";

import YoutubeEmbed from "./backend/ytlink";

export default function Yt() {
  return (
    <div className="App">
      <h1>React Youtube Embedding Example</h1>
      <YoutubeEmbed embedId="mLQNp9SZZ-c" />
    </div>
  );
}
