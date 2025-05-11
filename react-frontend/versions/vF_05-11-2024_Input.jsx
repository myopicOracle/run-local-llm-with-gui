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
  background-color: transparent; // Changed from #010201
  isolation: isolate; // Add this to create stacking context

  // Add this to create the grid effect with better contrast
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(to right, rgba(15, 15, 16, 0.2) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(15, 15, 16, 0.2) 1px, transparent 1px);
    background-size: 1rem 1rem;
    mask-image: radial-gradient(circle at center, black 30%, transparent 70%);
    z-index: -2;
  }

  // Enhance the glow effects
  .glow, .white, .border, .darkBorderBg {
    filter: blur(3px) brightness(1.2); // Increased brightness
  }

  .grid {
    height: 800px;
    width: 800px;
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
    height: 100%;
    width: 100%;
    position: absolute;
    overflow: hidden;
    z-index: -1;
    /* Border Radius */
    border-radius: 12px;
    filter: blur(3px);
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

  #poda {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .prompt {
    background-color: #010201;
    border: none;
    resize: none;
    overflow-y: hidden;
    padding: 24px 70px 60px 60px;
    width: 70vw;
    height: 30vh;
    border-radius: 10px;
    color: white;
    // padding-inline: 59px 146px;
    font-size: 12px;
    backdrop-filter: blur(5px); // Add subtle blur effect
    box-shadow: 0 0 20px rgba(207, 48, 170, 0.1); // Add subtle glow
  }

  .prompt::placeholder {
    color: #c0b9c0;
    font-size: 12px;
    font-weight: 500;
  }

  .prompt:focus {
    outline: none;
  }

  #submit {
    // background: linear-gradient(90deg, #402fb5, #cf30aa);
    background: linear-gradient(180deg, #161329, black, #1d1b4b);
    border: 1px solid transparent;
    border: none;
    color: white;
    padding: 3px 8px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 500;
    text-decoration: none;
    display: inline-block;
    margin: 3px 1px;
    cursor: pointer;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    box-shadow: 0 0 15px rgba(207, 48, 170, 0.15);
  }

  // #submit {
  //   position: absolute;
  //   top: 8px;
  //   right: 8px;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   z-index: 2;
  //   max-height: 40px;
  //   max-width: 64px;
  //   height: 100%;
  //   width: 100%;

  //   isolation: isolate;
  //   overflow: hidden;
  //   /* Border Radius */
  //   border-radius: 10px;
  //   background: linear-gradient(180deg, #161329, black, #1d1b4b);
  //   border: 1px solid transparent;
  // }

  #filter-icon {
    position: absolute;
    bottom: 21px; /* Changed from top to bottom */
    right: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    max-height: 30px;
    max-width: 80px;
    height: 100%;
    width: 100%;

    isolation: isolate;
    overflow: hidden;
    /* Border Radius */
    border-radius: 10px;
    background: linear-gradient(180deg, #161329, black, #1d1b4b);
    border: 1px solid transparent;

    box-shadow: 0 0 15px rgba(207, 48, 170, 0.15);
  }

  .filterBorder {
    height: 32px;
    width: 82px;
    position: absolute;
    overflow: hidden;
    bottom: 20px; /* Changed from top to bottom */
    right: 20px;
    border-radius: 10px;
  }

  .filterBorder::before {
    content: "";

    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    position: absolute;
    width: 600px;
    height: 600px;
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
    left: 20px;
    top: 22px;
  }

  /* Mobile-first media queries */
  @media (min-width: 768px) {

  .prompt {
    background-color: #010201;
    border: none;
    resize: none;
    overflow-y: hidden;
    padding: 24px 20px;
    width: 602px;
    height: 78px;
    border-radius: 10px;
    color: white;
    padding-inline: 59px 146px;
    font-size: 16px;
    backdrop-filter: blur(5px); // Add subtle blur effect
    box-shadow: 0 0 20px rgba(207, 48, 170, 0.1); // Add subtle glow
  }

  #submit {
    // background: linear-gradient(90deg, #402fb5, #cf30aa);
    background: linear-gradient(180deg, #161329, black, #1d1b4b);
    border: 1px solid transparent;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    box-shadow: 0 0 15px rgba(207, 48, 170, 0.15);
  }


  #filter-icon {
    position: absolute;
    bottom: 21px; /* Changed from top to bottom */
    right: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    max-height: 40px;
    max-width: 120px;
    height: 100%;
    width: 100%;

    isolation: isolate;
    overflow: hidden;
    /* Border Radius */
    border-radius: 10px;
    background: linear-gradient(180deg, #161329, black, #1d1b4b);
    border: 1px solid transparent;

    box-shadow: 0 0 15px rgba(207, 48, 170, 0.15);
  }

  .filterBorder {
      height: 42px;
      width: 122px;
      position: absolute;
      overflow: hidden;
      bottom: 20px; /* Changed from top to bottom */
      right: 20px;
      border-radius: 10px;
    }

    .filterBorder::before {
      content: "";

      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(90deg);
      position: absolute;
      width: 600px;
      height: 600px;
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
      left: 20px;
      top: 22px;
    }

  }

`;

export default Input;
