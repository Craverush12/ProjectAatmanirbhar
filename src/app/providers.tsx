"use client";

import { createContext, useEffect, useMemo, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import { SessionProvider } from "next-auth/react";
import { aestheticOptions, type AestheticId } from "@/data/aesthetics";

type Props = {
  children: ReactNode;
};

const defaultTheme: AestheticId = "river-dawn";
const validThemes = new Set(aestheticOptions.map((option) => option.id));

export default function Providers({ children }: Props) {
  const [theme, setTheme] = useState<AestheticId>(() => {
    if (typeof window === "undefined") return defaultTheme;
    const saved = window.localStorage.getItem("pa-theme");
    if (saved && validThemes.has(saved as AestheticId)) return saved as AestheticId;
    if (saved === "dark") return "night-river";
    if (saved === "light") return defaultTheme;
    return defaultTheme;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("pa-theme", theme);
  }, [theme]);

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
      options: aestheticOptions,
    }),
    [theme]
  );

  return (
    <SessionProvider>
      <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
    </SessionProvider>
  );
}

type ThemeContextShape = {
  theme: AestheticId;
  setTheme: Dispatch<SetStateAction<AestheticId>>;
  options: typeof aestheticOptions;
};

export const ThemeContext = createContext<ThemeContextShape>({
  theme: defaultTheme,
  setTheme: () => undefined,
  options: aestheticOptions,
});
