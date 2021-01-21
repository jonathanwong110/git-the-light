import { useEffect, useState } from 'react';

export const nightMode = () => {
  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('night')
    } else {
      setMode('light')
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');

    window.matchMedia && window.matchMedia('(prefers-color-scheme: night)').matches && !localTheme ?
      setMode('night') :
      localTheme ?
        setTheme(localTheme) :
        setMode('light');

    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted]
};