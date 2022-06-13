import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(smiley) {
  return (
    <Entry
      key={smiley.id}
      emoji={smiley.emoji}
      name={smiley.name}
      meaning={smiley.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
