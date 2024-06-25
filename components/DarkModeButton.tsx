import { useTheme } from "@/contexts/ThemeContext";
import { Switch } from "@/components/ui/switch"

const DarkModeButton = ( ) => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <Switch
      onClick={toggleDarkMode}
      checked={isDarkMode}
      className="bg-gray
      -200 dark:bg-gray-700 rounded-full"
    >
      Toggle Dark Mode
    </Switch>
  );
};

export default DarkModeButton;
