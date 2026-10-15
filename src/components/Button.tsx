import type { ComponentPropsWithRef, ComponentPropsWithoutRef } from "react";

const variantStyles = {
    primary:
        "border border-primary bg-primary text-on-primary hover:bg-primary-hover",
    primary_selected:
        "border border-accent bg-primary-hover text-on-primary ring-2 ring-inset ring-accent hover:bg-primary-hover",
    secondary:
        "border border-border bg-background text-text hover:bg-surface-muted",
    secondary_selected:
        "border border-primary bg-background-raised text-text hover:bg-background-raised",
    transparent:
        "bg-transparent text-text hover:bg-background-raised",
    transparent_selected:
        "bg-background-raised text-text ring-1 ring-inset ring-border hover:bg-background-raised",
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
    return `inline-flex items-center justify-center rounded-lg text-center font-bold color-transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text disabled:cursor-not-allowed disabled:opacity-50 ${className} ${variantStyles[variant]}`;
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
