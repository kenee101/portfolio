import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { NAV_ITEMS } from "../data";
import type { Theme } from "../hooks/useTheme";

interface NavigationProps {
  activeSection: string;
  isScrolled: boolean;
  theme: Theme;
  onToggleTheme: () => void;
  onNavigate: (section: string) => void;
}

export default function Navigation({
  activeSection,
  isScrolled,
  theme,
  onToggleTheme,
  onNavigate,
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const go = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:border-gray-800"
          : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => go("home")}
            className="text-2xl cursor-pointer font-bold text-brand"
          >
            Elijah.dev
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map(([label, id]) => (
              <button
                key={id}
                onClick={() => go(id)}
                className={`cursor-pointer transition-colors duration-200 hover:text-brand ${
                  activeSection === id
                    ? "text-brand font-semibold"
                    : "text-gray-700 dark:text-gray-200"
                }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-brand/10 dark:hover:bg-brand/20 hover:text-brand transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-brand/10 dark:hover:bg-brand/20 hover:text-brand transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              className="p-2 text-gray-900 dark:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 rounded-lg mt-2 shadow-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            {NAV_ITEMS.map(([label, id]) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="block w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors duration-200"
              >
                <span
                  className={
                    activeSection === id
                      ? "text-brand font-medium"
                      : "text-gray-700 dark:text-gray-300"
                  }
                >
                  {label}
                </span>
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
