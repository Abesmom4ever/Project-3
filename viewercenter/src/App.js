import React from "react";
import mainListItems from "./components/listitems";
import Dashboard from "./components/Dashboard";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <Title />
      <Dashboard />
      <mainListItems/>
    </div>
  );
}

export default App;