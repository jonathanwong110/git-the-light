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
          <div id="mode-container">
            <h3>{theme === 'light' ? 'Light theme' : 'Night theme'}!</h3>
            <br></br>
            <Toggle theme={theme} toggleTheme={toggleTheme} />
          </div>
          <br></br>
          <div id="mode-container-divider"></div>
          <main className="main">
            <section className="posts">
              <article className="post">
                <h4 className="post-title">
                  Post I
                </h4>
                <p className="post-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis veniam alias ea vitae dolores in modi perspiciatis, sequi doloremque similique.
                </p>
              </article>
              <hr className="post-divider"></hr>
              <article className="post">
                <h4 className="post-title">
                  Post II
                </h4>
                <p className="post-text">
                  Obcaecati et dignissimos placeat blanditiis quaerat inventore iste aperiam dolor voluptatem nobis, neque culpa in, harum corporis porro eaque numquam.
                </p>
              </article>
              <hr className="post-divider"></hr>
            </section>
          </main>
        </>
      </ThemeProvider>
    </div>
  );
};

export default App;