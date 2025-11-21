import { useTheme } from "@src/components/theme";
import LightThemeIcon from "@src/components/atoms/LightThemeIcon";
import DarkThemeIcon from "@src/components/atoms/DarkThemeIcon";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <LightThemeIcon /> : <DarkThemeIcon />}
    </button>
  );
};
