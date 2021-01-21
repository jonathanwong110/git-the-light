import React from 'react';
import './App.css'
import { ThemeProvider } from 'styled-components';
import { nightMode } from './nightMode';
import { lightTheme, nightTheme } from './theme';
import { GlobalStyles } from './global';

import Toggle from './components/Toggle.js';

function App() {

  const [theme, toggleTheme, componentMounted] = nightMode();
  const themeMode = theme === 'light' ? lightTheme : nightTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <div className="App">
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />
          <div style={{ fontSize: "20px" }}>{theme === 'light' ? 'Light theme' : 'Night theme'}!</div>
          <br></br>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </>
      </ThemeProvider>
    </div>
  );
};

export default App;