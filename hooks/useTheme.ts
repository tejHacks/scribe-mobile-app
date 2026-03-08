import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

interface ThemeColors {
  background: string;
  surface: string;
  surface2: string;
  border: string;
  text: string;
  muted: string;
  accent: string;
  accentLight: string;
}

interface ThemeContextType {
  dark: boolean;
  colors: ThemeColors;
  toggle: () => void;
}

const light: ThemeColors = {
  background: "#fdf8f0",
  surface: "#ffffff",
  surface2: "#faf5ea",
  border: "#e8dcc8",
  text: "#2c2416",
  muted: "#9c8a6e",
  accent: "#c9a227",
  accentLight: "#fdf0d5",
};

const dark: ThemeColors = {
  background: "#0f0e0b",
  surface: "#1a1914",
  surface2: "#232218",
  border: "#2e2c22",
  text: "#f0ead8",
  muted: "#8a8070",
  accent: "#c9a227",
  accentLight: "#2a2210",
};

const THEME_KEY = "scribe_theme";

const ThemeContext = createContext<ThemeContextType>({
  dark: false,
  colors: light,
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(THEME_KEY).then((val) => {
      if (val === "dark") setIsDark(true);
    });
  }, []);

  const toggle = async () => {
    const next = !isDark;
    setIsDark(next);
    await AsyncStorage.setItem(THEME_KEY, next ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ dark: isDark, colors: isDark ? dark : light, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}