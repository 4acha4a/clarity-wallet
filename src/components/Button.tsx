import type { ComponentPropsWithoutRef } from "react";

const variantStyles = {
    primary:
        "border border-zinc-950 bg-zinc-950 text-white hover:bg-zinc-800 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-300",
    secondary:
        "border border-zinc-950 bg-transparent text-zinc-950 hover:bg-zinc-100 dark:border-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-900",
    transparent:
        "bg-transparent text-zinc-950 hover:bg-zinc-100 dark:border-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-900",
} as const;

type SharedProps = {
    variant: keyof typeof variantStyles;
    className?: string;
};

type ButtonProps = SharedProps & ComponentPropsWithoutRef<"button"> & {
    href?: never;
};

type AnchorProps = SharedProps & ComponentPropsWithoutRef<"a"> & {
    href: string;
};

function getClassName(variant: keyof typeof variantStyles, className: string) {
    return `inline-flex items-center justify-center rounded-lg text-center font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 disabled:cursor-not-allowed disabled:opacity-50 dark:focus-visible:outline-zinc-100 ${variantStyles[variant]} ${className}`;
}

export default function Button(props: ButtonProps | AnchorProps) {
    if (typeof props.href === "string") {
        const { variant, className = "", ...anchorProps } = props;

        return (
            <a
                className={getClassName(variant, className)}
                {...anchorProps}
            />
        );
    }

    const { variant, className = "", type = "button", ...buttonProps } = props;

    return (
        <button
            type={type}
            className={getClassName(variant, className)}
            {...buttonProps}
        />
    );
}
