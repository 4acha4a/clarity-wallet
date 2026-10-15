"use client";

import Button from "@/components/Button";
import { useEffect } from "react";

const themeStorageKey = "hito-theme";

export default function ThemeToggle() {
    useEffect(() => {
        const savedTheme = localStorage.getItem(themeStorageKey);
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const shouldUseDarkTheme =
            savedTheme === "dark" || (savedTheme === null && prefersDark);

        document.documentElement.classList.toggle("dark", shouldUseDarkTheme);
    }, []);

    function toggleTheme() {
        const isDarkTheme = document.documentElement.classList.toggle("dark");
        localStorage.setItem(themeStorageKey, isDarkTheme ? "dark" : "light");
    }

    return (
        <Button
            variant="secondary"
            className="relative size-12 shrink-0 rounded-full p-0"
            aria-label="Toggle color theme"
            title="Toggle color theme"
            onClick={toggleTheme}
        >
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="absolute size-5 rotate-0 scale-100 opacity-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 dark:opacity-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
            >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
            </svg>

            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="absolute size-5 rotate-90 scale-0 opacity-0 transition-all duration-300 dark:rotate-0 dark:scale-100 dark:opacity-100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
            >
                <path d="M20.4 14.6A8.5 8.5 0 0 1 9.4 3.6 8.5 8.5 0 1 0 20.4 14.6Z" />
            </svg>
        </Button>
    );
}
