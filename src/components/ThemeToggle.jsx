import React, { useEffect, useState } from 'react';

// Reads the initial theme from localStorage (see main.jsx, which applies it
// before first render so there is no flash of the wrong theme).
// inline=true renders the button in normal flow (mobile) instead of pinned
// to the corner, so it never floats over scrolled text.
const ThemeToggle = ({ inline = false }) => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      className={inline ? 'themeToggle themeToggleInline' : 'themeToggle'}
      onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
      title="Toggle light/dark mode"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? '☾ dark' : '☀ light'}
    </button>
  )
}

export default ThemeToggle
