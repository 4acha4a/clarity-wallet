"use client";

import { useEffect, useRef, useState } from "react";
import Button from "../Button";

export default function MenuButton() {
    const [buttonPressed, setButtonPressed] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const menuPanelRef = useRef<HTMLElement>(null);

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
                    className="menu-icon menu-icon-open absolute inset-0 flex items-center justify-center"
                    data-open={buttonPressed}
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
                    className="menu-icon menu-icon-close absolute inset-0 flex items-center justify-center"
                    data-open={buttonPressed}
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
                className="menu-backdrop fixed inset-0 z-40 bg-black/50"
                data-open={buttonPressed}
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
                className="menu-panel fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-md rounded-t-3xl border border-b-0 border-border bg-surface px-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-3 shadow-2xl"
                data-open={buttonPressed}
            >
                <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-border" />
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