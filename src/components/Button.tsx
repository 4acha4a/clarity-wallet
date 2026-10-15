import type { ComponentPropsWithRef, ComponentPropsWithoutRef } from "react";

const variantStyles = {
    primary:
        "border border-primary bg-primary text-background hover:bg-on-primary dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-300",
    primary_selected:
        "border border-accent bg-on-primary text-background ring-2 ring-inset ring-accent hover:bg-on-primary dark:border-accent dark:bg-zinc-300 dark:text-zinc-950 dark:hover:bg-zinc-300",
    secondary:
        "border border-border bg-background text-text hover:bg-surface-muted dark:border-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-900",
    secondary_selected:
        "border border-primary bg-background-raised text-text hover:bg-background-raised dark:border-zinc-100 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-800",
    transparent:
        "bg-transparent text-zinc-950 hover:bg-background-raised dark:border-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-900",
    transparent_selected:
        "bg-background-raised text-text ring-1 ring-inset ring-border hover:bg-background-raised dark:bg-zinc-800 dark:text-zinc-100 dark:ring-zinc-600 dark:hover:bg-zinc-800",
} as const;

type SharedProps = {
    variant: keyof typeof variantStyles;
    className?: string;
};

type ButtonProps = SharedProps & ComponentPropsWithRef<"button"> & {
    href?: never;
};

type AnchorProps = SharedProps & ComponentPropsWithoutRef<"a"> & {
    href: string;
};

function getClassName(variant: keyof typeof variantStyles, className: string) {
    return `inline-flex items-center justify-center rounded-lg text-center font-bold color-transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 disabled:cursor-not-allowed disabled:opacity-50 dark:focus-visible:outline-zinc-100 ${className} ${variantStyles[variant]}`;
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
