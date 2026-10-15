import MenuButton from "./MenuButton";

export default function Header() {
    return (
        <header className="w-full border-b border-border bg-background-raised py-4">
            <div className="section-inner flex items-center justify-between">

                <div className="flex h-12 items-center">
                    <span
                        aria-hidden="true"
                        className="size-12 bg-current mask-[url('/hito-logo.svg')] mask-contain mask-no-repeat mask-center"
                    />
                </div>

                <div className="flex items-center">
                    {/* <ThemeToggle /> */}
                    <MenuButton />
                </div>

            </div>
        </header>
    );
}
