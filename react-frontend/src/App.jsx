import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import PredictionComponent from './PredictionComponent';
import Input from './Input';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: #010201;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const AppWrapper = styled.div`
  padding: 2rem;
  
  h1 {
    position: fixed;
    top: 2rem;
    left: 2rem;
    font-size: 2rem;
    z-index: 10;
  }
    
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <h1>Intelli-G A.I.</h1>
        <Input />
        <PredictionComponent />
      </AppWrapper>
    </>
  );
};

export default App;