// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Are we here? </p>
//         <p>Amir's React Web </p>

//         <p>a new text here</p>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

function App() {
  let [counter, changeCounter] = useState(1);
  window.changeCounter = changeCounter;
  return (
    <div>
      <h1>{"The counter is " + counter}</h1>
      <h4>{"The counter is " + counter}</h4>
    </div>
  );
}

export default App;
