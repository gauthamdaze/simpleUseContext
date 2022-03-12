import "./styles.css";
import User from "./user.js";
import React from "react";

export const Word = React.createContext();

export default function App() {
  return (
    <div className="App">
      <Word.Provider value="world">
        <User />
      </Word.Provider>
    </div>
  );
}
