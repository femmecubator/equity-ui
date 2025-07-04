import React, { useState, useEffect, useMemo } from 'react';
import { ThemeContext } from './ThemeContext';
import { ThemeMode, getTheme } from '../../../../tokens';

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultMode?: ThemeMode;
  storageKey?: string;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultMode = 'light',
  storageKey = 'equity-ui-theme-mode',
}) => {
  // Initialize theme from localStorage or default
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return defaultMode;
    
    const savedMode = window.localStorage.getItem(storageKey);
    if (savedMode === 'light' || savedMode === 'dark') {
      return savedMode;
    }
    
    // Check system preference if no saved mode
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return defaultMode;
  });

  // Get theme object based on current mode
  const theme = useMemo(() => getTheme(mode), [mode]);

  // Update localStorage and document class when mode changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Save to localStorage
    window.localStorage.setItem(storageKey, mode);

    // Update document class
    document.documentElement.classList.remove('light-theme', 'dark-theme');
    document.documentElement.classList.add(`${mode}-theme`);

    // Update meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content',
        mode === 'dark' ? theme.color.background : theme.color.background
      );
    }
  }, [mode, theme, storageKey]);

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      const savedMode = window.localStorage.getItem(storageKey);
      // Only update if user hasn't manually set a preference
      if (!savedMode) {
        setMode(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [storageKey]);

  const value = useMemo(
    () => ({
      theme,
      mode,
      setMode,
    }),
    [theme, mode]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}; 