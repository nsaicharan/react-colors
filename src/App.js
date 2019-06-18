import React from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";

function App() {
  return (
    <div>
      <Palette palette={seedColors[0]} />
    </div>
  );
}

export default App;
