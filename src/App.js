import React from 'react';
import './App.css';

function App() {

  const [darkMode, setDarkMode] = React.useState(false)

  return (
    <div className="App" >
      <div
        id="toggle"
        onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}
      >
      </div>
    </div>
  );

}


export default App