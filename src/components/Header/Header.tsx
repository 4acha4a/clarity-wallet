import ThemeToggle from "./ThemeToggle";
import MenuButton from "./MenuButton";
import Link from "next/link";


export default function Header() {
    return (
        <header className="w-full border-b border-border py-4">
            <div className="section-inner flex items-center justify-between">

                <div className="flex h-12 items-center">
                    <Link href="/" aria-label="Hito home">
                        <span
                            aria-hidden="true"
                            className="block size-12 bg-current mask-[url('/hito-logo.svg')] mask-contain mask-no-repeat mask-center"
                        />
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <MenuButton />
                </div>

            </div>
        </header>
    );
}
