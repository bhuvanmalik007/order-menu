/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';

export default () => {
  const [ theme, setTheme ] = useState('light');
  const [ componentMounted, setComponentMounted ] = useState(false);
  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme
        ? setMode('dark')
        : localTheme
          ? setTheme(localTheme)
          : setMode('light');
    }

    setComponentMounted(true);
  }, []);

  return [ theme, toggleTheme, componentMounted ];
};
