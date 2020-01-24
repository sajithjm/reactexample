import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import HomePage from './components/pages/HomePage'
import theme from './components/themes/default'
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />

        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
