import React, { useState } from 'react';
import { PromptContext } from './components/PromptContext';
import styled from 'styled-components';


const PredictionComponent = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div>
        <label htmlFor="prompt">Enter Prompt:</label>
        <input
          id="prompt"
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </div>
      <div id="response">
        <strong>{response}</strong>
      </div>
    </div>
  );
};




  // return (
  //   <div>
  //     <PromptContext.Provider value={{ prompt, setPrompt, response, setResponse, isLoading, setIsLoading }}>
  //       <Input
  //         id="prompt"
  //         type="text"
  //         value={prompt}
  //         onChange={(e) => setPrompt(e.target.value)}
  //         placeholder="Enter Prompt: "
  //       />
  //       <Button handleSubmit={handleSubmit} isLoading={isLoading} />
  //       <Response response={response} />
  //     </PromptContext.Provider>
  //   </div>
  // );

  // return (
  //   <div>
  //     <div>
  //       <label htmlFor="prompt">Enter Prompt:</label>
  //       <input
  //         id="prompt"
  //         type="text"
  //         value={prompt}
  //         onChange={(e) => setPrompt(e.target.value)}
  //       />
  //       <button onClick={handleSubmit} disabled={isLoading}>
  //         {isLoading ? 'Loading...' : 'Submit'}
  //       </button>
  //     </div>
  //     <div id="response">
  //       <strong>{response}</strong>
  //     </div>
  //   </div>
  // );
