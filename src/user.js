import "./styles.css";
import { Word } from "./App.js";
import { useContext } from "react";

export default function User() {
  let wordFromApp = useContext(Word);
  return (
    <div>
      <h6> Hello {wordFromApp} </h6>
    </div>
  );
}
