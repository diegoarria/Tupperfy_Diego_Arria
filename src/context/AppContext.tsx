import React, { createContext, useContext, useState, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { AppColors, lightColors, darkColors } from '../theme';

interface AppContextType {
  colors: AppColors;
  isDark: boolean;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType>({
  colors: lightColors,
  isDark: false,
  toggleTheme: () => {},
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const systemScheme = useColorScheme();
  const [manualTheme, setManualTheme] = useState<'light' | 'dark' | null>(null);

  const isDark = manualTheme ? manualTheme === 'dark' : systemScheme === 'dark';
  const colors = isDark ? darkColors : lightColors;

  const toggleTheme = () => setManualTheme(isDark ? 'light' : 'dark');

  const value = useMemo(() => ({ colors, isDark, toggleTheme }), [colors, isDark]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);
