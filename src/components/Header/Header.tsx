"use client";

import Image from "next/image";
import MenuButton from "./MenuButton";
import ThemeToggle from "../ThemeToggle";

export default function Header() {
    return (
        <header className="w-full border-b border-zinc-200 px-4 py-4 dark:border-zinc-800 sm:px-6">
            <div className="flex items-center justify-between">

                <div className="flex h-12 items-center">
                    <Image
                        src="/logo.png"
                        alt="Hito"
                        width={120}
                        height={60}
                        priority
                        className="h-12 w-auto object-contain dark:invert"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <MenuButton />
                </div>

            </div>
        </header>
    );
}
