import React from 'react';
import styled from 'styled-components';

const Input = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submit logic here
    console.log('Form submitted');
  };

  return (
    <StyledWrapper>
      <GridBackground />
      <InputContainer>
        <GlowEffect />
        <DarkBorder />
        <WhiteBorder />
        <InnerBorder />
        <MainContent>
          <StyledTextarea
            id="prompt"
            rows="5"
            placeholder="Enter your prompt..."
          />
          <SearchIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              viewBox="0 0 24 24"
              strokeWidth={2}
              strokeLinejoin="round"
              strokeLinecap="round"
              height={24}
              fill="none"
              className="feather feather-search"
            >
              <path
                stroke="url(#search)"
                d="M12 4a8 7 0 1 0 0 14a8 7 0 0 0 0 -14M12 2v20"
              />
              <defs>
                <linearGradient gradientTransform="rotate(50)" id="search">
                  <stop stopColor="#f8e7f8" offset="0%" />
                  <stop stopColor="#b6a9b7" offset="50%" />
                </linearGradient>
              </defs>
            </svg>
          </SearchIcon>
          <FilterButtonContainer>
            <FilterBorder />
            <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
          </FilterButtonContainer>
        </MainContent>
      </InputContainer>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: transparent;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
        to right,
        rgba(15, 15, 16, 0.2) 1px,
        transparent 1px
      ),
      linear-gradient(
        to bottom,
        rgba(15, 15, 16, 0.2) 1px,
        transparent 1px
      );
    background-size: 1rem 1rem;
    mask-image: radial-gradient(circle at center, black 30%, transparent 70%);
    z-index: -2;
  }
`;

const GridBackground = styled.div`
  height: 800px;
  width: 800px;
  background-image: linear-gradient(to right, #0f0f10 1px, transparent 1px),
    linear-gradient(to bottom, #0f0f10 1px, transparent 1px);
  background-size: 1rem 1rem;
  background-position: center center;
  position: absolute;
  z-index: -1;
  filter: blur(1px);
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const GlowEffect = styled.div`
  max-height: 130px;
  max-width: 354px;
  position: absolute;
  border-radius: 12px;
  filter: blur(30px);
  opacity: 0.4;
  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(60deg);
    width: 999px;
    height: 999px;
    background-image: conic-gradient(
      #000,
      #402fb5 5%,
      #000 38%,
      #000 50%,
      #cf30aa 60%,
      #000 87%
    );
    transition: all 2s;
  }
`;

const DarkBorder = styled.div`
  max-height: 65px;
  max-width: 312px;
  position: absolute;
  border-radius: 12px;
  filter: blur(3px);
  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(82deg);
    width: 600px;
    height: 600px;
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
`;

const WhiteBorder = styled.div`
  max-height: 63px;
  max-width: 307px;
  position: absolute;
  border-radius: 10px;
  filter: blur(2px);
  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(83deg);
    width: 600px;
    height: 600px;
    background-image: conic-gradient(
      rgba(0, 0, 0, 0) 0%,
      #a099d8,
      rgba(0, 0, 0, 0) 8%,
      rgba(0, 0, 0, 0) 50%,
      #dfa2da,
      rgba(0, 0, 0, 0) 58%
    );
    transition: all 2s;
  }
`;

const InnerBorder = styled.div`
  max-height: 59px;
  max-width: 303px;
  position: absolute;
  border-radius: 11px;
  filter: blur(0.5px);
  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(70deg);
    width: 600px;
    height: 600px;
    background-image: conic-gradient(
      #1c191c,
      #402fb5 5%,
      #1c191c 14%,
      #1c191c 50%,
      #cf30aa 60%,
      #1c191c 64%
    );
    transition: all 2s;
  }
`;

const MainContent = styled.div`
  position: relative;
`;

const StyledTextarea = styled.textarea`
  background-color: #010201;
  border: none;
  resize: none;
  overflow-y: hidden;
  padding: 24px 59px 24px 59px;
  width: 602px;
  height: 78px;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  backdrop-filter: blur(5px);
  box-shadow: 0 0 20px rgba(207, 48, 170, 0.1);

  &::placeholder {
    color: #c0b9c0;
    font-size: 20px;
    font-weight: 500;
  }

  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 20px;
  top: 22px;
`;

const FilterButtonContainer = styled.div`
  position: absolute;
  bottom: 21px;
  right: 21px;
  max-height: 40px;
  max-width: 120px;
  border-radius: 10px;
  background: linear-gradient(180deg, #161329, black, #1d1b4b);
  border: 1px solid transparent;
  box-shadow: 0 0 15px rgba(207, 48, 170, 0.15);
  isolation: isolate;
  overflow: hidden;
`;

const FilterBorder = styled.div`
  height: 42px;
  width: 122px;
  position: absolute;
  border-radius: 10px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    width: 600px;
    height: 600px;
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
`;

const SubmitButton = styled.button`
  background: linear-gradient(180deg, #161329, black, #1d1b4b);
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  box-shadow: 0 0 15px rgba(207, 48, 170, 0.15);
`;

const hoverFocusStyles = `
  ${InputContainer}:hover > ${DarkBorder}::before {
    transform: translate(-50%, -50%) rotate(-98deg);
  }
  ${InputContainer}:hover > ${GlowEffect}::before {
    transform: translate(-50%, -50%) rotate(-120deg);
  }
  ${InputContainer}:hover > ${WhiteBorder}::before {
    transform: translate(-50%, -50%) rotate(-97deg);
  }
  ${InputContainer}:hover > ${InnerBorder}::before {
    transform: translate(-50%, -50%) rotate(-110deg);
  }

  ${InputContainer}:focus-within > ${DarkBorder}::before {
    transform: translate(-50%, -50%) rotate(442deg);
    transition: all 4s;
  }
  ${InputContainer}:focus-within > ${GlowEffect}::before {
    transform: translate(-50%, -50%) rotate(420deg);
    transition: all 4s;
  }
  ${InputContainer}:focus-within > ${WhiteBorder}::before {
    transform: translate(-50%, -50%) rotate(443deg);
    transition: all 4s;
  }
  ${InputContainer}:focus-within > ${InnerBorder}::before {
    transform: translate(-50%, -50%) rotate(430deg);
    transition: all 4s;
  }
`;

const globalStyles = `
  @keyframes rotate {
    100% {
      transform: translate(-50%, -50%) rotate(450deg);
    }
  }

  ${GlowEffect}, ${WhiteBorder}, ${InnerBorder}, ${DarkBorder} {
    filter: blur(3px) brightness(1.2);
  }
`;

styled.div`${globalStyles}${hoverFocusStyles}`;

export default Input;