import React from "react";
import "./App.css";

function MyButton({ title }: { title: string }) {
  return <button>{title}</button>;
}

function App() {
  return (
    <div>
      <h1>Header</h1>
      <MyButton title="Test button" />
    </div>
  );
}

export default App;
