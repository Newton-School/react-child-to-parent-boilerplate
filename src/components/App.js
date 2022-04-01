import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  return <div id="main">
    <ParentComponent />
  </div>;
};

const ParentComponent = () => {
  const [message, setMessage] = useState("");

  return (
    <div>
      <ChildComponent />
      <h2 id="output">{message}</h2>
    </div>
  )

}

const ChildComponent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Enter your message here</h3>
        <input type="text" name="childData" id="input" placeholder="Enter a message" />
        <br></br>
        <br></br>
        <input id="submit" type="submit" value="Submit" />
        <br></br>
        <br></br>
      </form>
    </div>
  );
};

export default App;
