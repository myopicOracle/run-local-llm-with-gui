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
        <h1 className="title-orbitron" style={{ fontSize: 'clamp(28px, 5vw, 60px)' /* Test override */ }}>Intelli-G A.I.</h1>
        {/* <h1 className="title-exo2">Intelli-G A.I.</h1> */}
        <Input />
        <PredictionComponent />
        <h1
          className="title-orbitron"
          style={{ fontSize: 'clamp(8px, 10px, 14px)'}}
        >
          <a
            href="https://github.com/myopicOracle"
            style={{
              color: 'inherit',
              textDecoration: 'none',
              position: 'fixed',
              bottom: '3vw',
              left: '50%',
              transform: 'translateX(-50%)',
              // textShadow: '0 0 6px rgba(255, 255, 255, 0.8), 0 0 12px rgba(255, 255, 255, 0.6)', // Enhanced glow effect
            }}
          >
            {/* Made with ❤️ by{' '} */}
            {/* <span style={{ color: '#00ff00' }}>@myopicOracle</span> */}
            {/* <span>@myopicOracle</span> */}
            <span style={{ color: '#ffffff' }}>@</span>
            <span>myopicOracle</span>
            {/* <span style={{ color: '#00ff00' }}>Oracle</span> */}
            {/* <br />
            <span style={{ color: '#00ff00' }}>GitHub:</span>{' '}
            <span style={{ color: '#00ff00' }}>@myopicOracle</span>
            <br />
            <span style={{ color: '#00ff00' }}>LinkedIn:</span>{' '}
            <span style={{ color: '#00ff00' }}>linkedin.com/xiagary</span> */}
          </a>
        </h1>
      </AppWrapper>
    </>
  );
};

export default App;