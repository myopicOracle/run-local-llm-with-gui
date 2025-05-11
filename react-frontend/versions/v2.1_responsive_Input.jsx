import React from 'react';
import styled from 'styled-components';

const Input = () => {
  return (
    <StyledWrapper>
      <div>
        <div className="grid" />
        <div id="poda">
          <div className="glow" />
          <div className="darkBorderBg" />
          <div className="darkBorderBg" />
          <div className="darkBorderBg" />
          <div className="white" />
          <div className="border" />
          <div id="main">
            <textarea id="prompt" rows="5" placeholder="Enter your prompt..." className="prompt" ></textarea>
            {/* <div id="input-mask" />
            <div id="pink-mask" /> */}
            <div className="filterBorder" />
            <div id="filter-icon">
              <button id="submit">Submit</button>
            </div>
            <div id="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} viewBox="0 0 24 24" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" height={24} fill="none" className="feather feather-search">
                <path stroke="url(#search)" d="M12 4a8 7 0 1 0 0 14a8 7 0 0 0 0 -14M12 2v20" />
                <defs>
                  <linearGradient gradientTransform="rotate(50)" id="search">
                    <stop stopColor="#f8e7f8" offset="0%" />
                    <stop stopColor="#b6a9b7" offset="50%" />
                  </linearGradient>
                  <linearGradient id="searchl">
                    <stop stopColor="#b6a9b7" offset="0%" />
                    <stop stopColor="#837484" offset="50%" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div id="response"></div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 300px;
  background-color: transparent;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(to right, rgba(15, 15, 16, 0.2) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(15, 15, 16, 0.2) 1px, transparent 1px);
    background-size: 2rem 2rem; /* Scalable grid size */
    mask-image: radial-gradient(circle at center, black 30%, transparent 70%);
    z-index: -2;
  }

  .grid {
    height: 80vh;
    width: 80vw;
    max-height: 800px;
    max-width: 800px;
    background-image: linear-gradient(to right, #0f0f10 1px, transparent 1px),
      linear-gradient(to bottom, #0f0f10 1px, transparent 1px);
    background-size: 1rem 1rem;
    background-position: center center;
    position: absolute;
    z-index: -1;
    filter: blur(1px);
  }

  .white,
  .border,
  .darkBorderBg,
  .glow {
    max-height: 70px;
    max-width: 314px;
    height: 10vh;
    width: 50vw;
    max-width: 314px;
    position: absolute;
    overflow: hidden;
    z-index: -1;
    border-radius: 12px;
    filter: blur(3px);
  }

  .prompt {
    background-color: #010201;
    border: none;
    resize: none;
    overflow-y: hidden;
    padding: 2vw 20vw 1vw 6vw; 
    width: 80vw;
    max-width: 602px;
    height: 15vh;
    max-height: 78px;
    border-radius: 1.5rem;
    color: white;
    font-size: 1rem;
    backdrop-filter: blur(5px);
    box-shadow: 0 0 20px rgba(207, 48, 170, 0.1);
    transition: width 0.3s ease, height 0.3s ease, padding 0.3s ease; /* Smooth transitions */
  }

  #poda {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .prompt::placeholder {
    color: #c0b9c0;
    font-size: 1rem;
    font-weight: 500;
  }

  .prompt:focus {
    outline: none;
  }

  #main:focus-within > #input-mask {
    display: none;
  }

  #input-mask {
    pointer-events: none;
    width: 100px;
    height: 20px;
    position: absolute;
    background: linear-gradient(90deg, transparent, black);
    top: 18px;
    left: 70px;
  }
    
  #pink-mask {
    pointer-events: none;
    width: 30px;
    height: 20px;
    position: absolute;
    background: #cf30aa;
    top: 10px;
    left: 5px;
    filter: blur(20px);
    opacity: 0.8;
    //animation:leftright 4s ease-in infinite;
    transition: all 2s;
    opacity: 0.9; // Increased opacity
    filter: blur(15px); // Adjusted blur
  }
    
  #main:hover > #pink-mask {
    //animation: rotate 4s linear infinite;
    opacity: 0;
  }

  .white {
    max-height: 63px;
    max-width: 307px;
    border-radius: 10px;
    filter: blur(2px);
  }

  .white::before {
    content: "";
    z-index: -2;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(83deg);
    position: absolute;
    width: 600px;
    height: 600px;
    background-repeat: no-repeat;
    background-position: 0 0;
    filter: brightness(1.4);
    background-image: conic-gradient(
      rgba(0, 0, 0, 0) 0%,
      #a099d8,
      rgba(0, 0, 0, 0) 8%,
      rgba(0, 0, 0, 0) 50%,
      #dfa2da,
      rgba(0, 0, 0, 0) 58%
    );
    //  animation: rotate 4s linear infinite;
    transition: all 2s;
  }
  .border {
    max-height: 59px;
    max-width: 303px;
    border-radius: 11px;
    filter: blur(0.5px);
  }
  .border::before {
    content: "";
    z-index: -2;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(70deg);
    position: absolute;
    width: 600px;
    height: 600px;
    filter: brightness(1.3);
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: conic-gradient(
      #1c191c,
      #402fb5 5%,
      #1c191c 14%,
      #1c191c 50%,
      #cf30aa 60%,
      #1c191c 64%
    );
    // animation: rotate 4s 0.1s linear infinite;
    transition: all 2s;
  }
  .darkBorderBg {
    max-height: 65px;
    max-width: 312px;
  }
  .darkBorderBg::before {
    content: "";
    z-index: -2;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(82deg);
    position: absolute;
    width: 600px;
    height: 600px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: conic-gradient(
      rgba(0, 0, 0, 0),
      #18116a,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0) 50%,
      #6e1b60,
      rgba(0, 0, 0, 0) 60%
    );
    transition: all 2s;
  }
  #poda:hover > .darkBorderBg::before {
    transform: translate(-50%, -50%) rotate(262deg);
  }
  #poda:hover > .glow::before {
    transform: translate(-50%, -50%) rotate(240deg);
  }
  #poda:hover > .white::before {
    transform: translate(-50%, -50%) rotate(263deg);
  }
  #poda:hover > .border::before {
    transform: translate(-50%, -50%) rotate(250deg);
  }

  #poda:hover > .darkBorderBg::before {
    transform: translate(-50%, -50%) rotate(-98deg);
  }
  #poda:hover > .glow::before {
    transform: translate(-50%, -50%) rotate(-120deg);
  }
  #poda:hover > .white::before {
    transform: translate(-50%, -50%) rotate(-97deg);
  }
  #poda:hover > .border::before {
    transform: translate(-50%, -50%) rotate(-110deg);
  }

  #poda:focus-within > .darkBorderBg::before {
    transform: translate(-50%, -50%) rotate(442deg);
    transition: all 4s;
  }
  #poda:focus-within > .glow::before {
    transform: translate(-50%, -50%) rotate(420deg);
    transition: all 4s;
  }
  #poda:focus-within > .white::before {
    transform: translate(-50%, -50%) rotate(443deg);
    transition: all 4s;
  }
  #poda:focus-within > .border::before {
    transform: translate(-50%, -50%) rotate(430deg);
    transition: all 4s;
  }

  .glow {
    overflow: hidden;
    filter: blur(30px);
    opacity: 0.4;
    max-height: 130px;
    max-width: 354px;
  }
  .glow:before {
    content: "";
    z-index: -2;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(60deg);
    position: absolute;
    width: 999px;
    height: 999px;
    background-repeat: no-repeat;
    background-position: 0 0;
    /*border color, change middle color*/
    background-image: conic-gradient(
      #000,
      #402fb5 5%,
      #000 38%,
      #000 50%,
      #cf30aa 60%,
      #000 87%
    );
    /* change speed here */
    //animation: rotate 4s 0.3s linear infinite;
    transition: all 2s;
  }

  @keyframes rotate {
    100% {
      transform: translate(-50%, -50%) rotate(450deg);
    }
  }
  @keyframes leftright {
    0% {
      transform: translate(0px, 0px);
      opacity: 1;
    }

    49% {
      transform: translate(250px, 0px);
      opacity: 0;
    }
    80% {
      transform: translate(-40px, 0px);
      opacity: 0;
    }

    100% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
  }

#submit {
    background: linear-gradient(180deg, #161329, black, #1d1b4b);
    border: none;
    color: white;
    padding: 1.5vw 2vw;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 1rem;
    width: 20vw;
    max-width: 64px;
    height: 8vh;
    max-height: 40px;
    backdrop-filter: blur(5px);
    box-shadow: 0 0 15px rgba(207, 48, 170, 0.15);
    transition: width 0.3s ease, height 0.3s ease, padding 0.3s ease; /* Smooth transitions */
  }

  #filter-icon {
    position: absolute;
    bottom: 3vw;
    right: 3vw;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    height: 8vh;
    max-height: 40px;
    width: 25vw;
    max-width: 120px;
    border-radius: 1rem;
    background: linear-gradient(180deg, #161329, black, #1d1b4b);
    box-shadow: 0 0 15px rgba(207, 48, 170, 0.15);
    transition: width 0.3s ease, height 0.3s ease, bottom 0.3s ease, right 0.3s ease; /* Smooth transitions */
  }

  .filterBorder {
    height: 8vh;
    max-height: 42px;
    width: 25vw;
    max-width: 122px;
    position: absolute;
    overflow: hidden;
    bottom: 3vw;
    right: 3vw;
    border-radius: 1rem;
    transition: width 0.3s ease, height 0.3s ease, bottom 0.3s ease, right 0.3s ease; /* Smooth transitions */
  }

  .filterBorder::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    width: 100vw;
    max-width: 600px;
    height: 100vw;
    max-height: 600px;
    background-repeat: no-repeat;
    background-position: 0 0;
    filter: brightness(1.35);
    background-image: conic-gradient(
      rgba(0, 0, 0, 0),
      #3d3a4f,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0) 50%,
      #3d3a4f,
      rgba(0, 0, 0, 0) 100%
    );
    animation: rotate 4s linear infinite;
  }

  #main {
    position: relative;
  }

  #search-icon {
    position: absolute;
    left: 3vw;
    top: 3vw;
  }

  /* Mobile-first media queries */
  @media (min-width: 768px) {
    .prompt {
      width: 60vw;
      max-width: 602px;
      height: 12vh;
      max-height: 78px;
      padding: 2vw 20vw 1vw 6vw;
    }

    #submit {
      width: 15vw;
      max-width: 64px;
      height: 6vh;
      max-height: 40px;
      padding: 1vw 1.5vw;
    }

    #filter-icon {
      width: 20vw;
      max-width: 120px;
      height: 6vh;
      max-height: 40px;
      bottom: 2vw;
      right: 2vw;
    }

    .filterBorder {
      width: 20vw;
      max-width: 122px;
      height: 6vh;
      max-height: 42px;
      bottom: 2vw;
      right: 2vw;
    }

    #search-icon {
      left: 2vw;
      top: 2vw;
    }
  }

  @media (min-width: 1024px) {
    .prompt {
      width: 50vw;
      max-width: 602px;
      height: 10vh;
      max-height: 78px;
      padding: 1vw 12vw 1vw 5vw;
    }

    #submit {
      width: 10vw;
      max-width: 64px;
      height: 5vh;
      max-height: 40px;
      padding: 0.5vw 1vw;
    }

    #filter-icon {
      width: 15vw;
      max-width: 120px;
      height: 5vh;
      max-height: 40px;
      bottom: 1.5vw;
      right: 1.5vw;
    }

    .filterBorder {
      width: 15vw;
      max-width: 122px;
      height: 5vh;
      max-height: 42px;
      bottom: 1.5vw;
      right: 1.5vw;
    }

    #search-icon {
      left: 1.5vw;
      top: 1.5vw;
    }
  }
`;

export default Input;
// Note: The above code is a React component styled with styled-components. It creates a responsive input area with various visual effects and animations. The media queries adjust the styles for different screen sizes, ensuring a good user experience on mobile and desktop devices.