import React from "react";
import "./styles.css";

function Button({ color, disabled, text, onClick }) {
  return (
    <button style={{ color: color }} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}

export default function App() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <Button
      color="red"
      disabled={false}
      text="Click Me"
      onClick={handleClick}
    />
  );
}
