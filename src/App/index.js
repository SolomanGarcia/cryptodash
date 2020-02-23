import React, { Component } from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import styled, {css} from 'styled-components';

class App extends React.Component {
  render() {
    return (
      <div>
        <WelcomeMessage />
      </div>
    );
  }
}

export default App;
