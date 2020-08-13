import React from 'react';
import { ThemeProvider } from 'styled-components';
import Heading from './components/Heading';
import GlobalStyles from './global';
import { lightTheme, darkTheme } from './theme';
import useDarkMode from './hooks/useDarkMode';
import Toggle from './components/Toggle';
import Menu from './components/Menu';

function App() {
  const [ theme, toggleTheme, componentMounted ] = useDarkMode();

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Heading />
        <Menu />
      </>
    </ThemeProvider>
  );
}

export default App;
