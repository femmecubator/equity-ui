import { useTheme } from './ThemeContext';

export { ThemeProvider } from './ThemeProvider';
export { useTheme } from './ThemeContext';

// Convenience hook for toggling theme
export const useThemeToggle = () => {
  const { mode, setMode } = useTheme();
  
  const toggleTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return {
    mode,
    toggleTheme,
    isDark: mode === 'dark',
  };
}; 