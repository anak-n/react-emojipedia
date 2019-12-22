import React from "react";
import Card from "./Card";
import emojis from "../emojipedia";

function getCard(emoji_info) {
  return (
    <Card
      emoji={emoji_info.emoji}
      name={emoji_info.name}
      meaning={emoji_info.meaning}
      key={emoji_info.id}
    />
  );
}

function App() {
  console.log(emojis.map(getCard));
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojis.map(getCard)}</dl>
    </div>
  );
}

export default App;
