"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "../Button";
import ThemeToggle from "../ThemeToggle";

export default function MenuButton() {
    const [buttonPressed, setButtonPressed] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const menuPanelRef = useRef<HTMLElement>(null);

    const buttonIconProperties = `absolute inset-0 flex items-center justify-center transition-all duration-200`;

    useEffect(() => {
        if (!buttonPressed) return;

        const previousOverflow = document.body.style.overflow;
        const menuButton = menuButtonRef.current;
        document.body.style.overflow = "hidden";
        menuPanelRef.current?.querySelector("a")?.focus();

        function closeOnEscape(event: KeyboardEvent) {
            if (event.key === "Escape") setButtonPressed(false);
        }

        document.addEventListener("keydown", closeOnEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", closeOnEscape);
            menuButton?.focus();
        };
    }, [buttonPressed]);

    return (
        <>
            <Button
                variant="secondary"
                ref={menuButtonRef}
                type="button"
                className="relative h-12 w-12 bg-background-raised hover:bg-background hover:text-text-muted"
                aria-label={buttonPressed ? "Close menu" : "Open menu"}
                aria-expanded={buttonPressed}
                aria-controls="wallet-menu"
                onClick={() => setButtonPressed((pressed) => !pressed)}
            >
                <span
                    className={`${buttonIconProperties} ${buttonPressed ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
                >
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="size-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </span>

                <span
                    className={`${buttonIconProperties} ${buttonPressed ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0"}`}
                >
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="size-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    >
                        <path d="m6 6 12 12M6 18 18 6" />
                    </svg>
                </span>
            </Button>

            <button
                type="button"
                tabIndex={-1}
                aria-label="Close menu"
                aria-hidden={!buttonPressed}
                className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 motion-reduce:transition-none ${buttonPressed ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
                onClick={() => setButtonPressed(false)}
            />

            <section
                ref={menuPanelRef}
                id="wallet-menu"
                role="dialog"
                aria-modal="true"
                aria-labelledby="wallet-menu-title"
                aria-hidden={!buttonPressed}
                inert={!buttonPressed}
                className={`fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-md rounded-t-3xl border border-b-0 border-zinc-200 bg-white px-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-3 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950 transition-transform duration-300 ease-out motion-reduce:transition-none ${buttonPressed ? "translate-y-0" : "translate-y-full"}`}
            >
                <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <h2 id="wallet-menu-title" className="mb-4 text-xl font-semibold">
                    Menu
                </h2>
                <Button
                    variant="primary"
                    href="https://hito.dev/fota/"
                    className="w-full rounded-xl px-4 py-4"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="flex w-full items-center justify-between">
                        <span>Firmware Upgrade</span>
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            className="size-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M7 17 17 7M7 7h10v10" />
                        </svg>
                    </span>
                </Button>
            </section>
        </>
    );
}