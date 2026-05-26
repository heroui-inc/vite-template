import { FC, useCallback } from "react";
import { useTheme } from "@heroui/react";
import clsx from "clsx";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
  const { resolvedTheme, setTheme } = useTheme("light");

  const isLight = resolvedTheme === "light";

  const toggleTheme = useCallback(() => {
    setTheme(isLight ? "dark" : "light");
  }, [isLight, setTheme]);

  if (!resolvedTheme) {
    return <div aria-hidden className="h-6 w-6" />;
  }

  return (
    <button
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      className={clsx(
        "px-px transition-opacity hover:opacity-80 cursor-pointer",
        "inline-flex items-center justify-center",
        "w-auto h-auto bg-transparent border-none rounded-lg",
        className,
      )}
      onClick={toggleTheme}
    >
      {isLight ? <MoonFilledIcon size={22} /> : <SunFilledIcon size={22} />}
    </button>
  );
};
