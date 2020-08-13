import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SunIcon } from '../icons/sun.svg';
import { ReactComponent as MoonIcon } from '../icons/moon.svg';

const ToggleContainer = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  background: ${({ theme }) => theme.body};
  border: 2px solid ${({ theme }) => theme.body};;
  outline: none;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  width: 6rem;
  height: 3rem;
  svg {
    height: auto;
    width: 1.5rem;
    transition: all 0.3s linear;
    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(0)' : 'translateY(100px)')};
    }
    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(-100px)' : 'translateY(0)')};
    }
  }
`;
const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer onClick={toggleTheme} lightTheme={isLight}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};
export default Toggle;
