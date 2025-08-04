import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

interface ButtonProps {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const getButtonClasses = ({
  variant = "default",
  size = "default",
}: ButtonProps = {}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-green-500 focus-visible:ring-green-500/50 focus-visible:ring-[3px] aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-400/40 aria-invalid:border-red-500";

  const variantClasses = {
    default: "bg-green-600 text-white hover:bg-green-700",
    destructive:
      "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500/20 dark:focus-visible:ring-red-400/40 dark:bg-red-600/60",
    outline:
      "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 hover:text-gray-900 dark:bg-gray-800/30 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-700/50",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700",
    ghost:
      "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800/50 dark:hover:text-gray-100",
    link: "text-green-600 underline-offset-4 hover:underline dark:text-green-400",
  };

  const sizeClasses = {
    default: "h-9 px-4 py-2 has-[>svg]:px-3",
    sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
    lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
    icon: "w-8 h-8 rounded-full", // Adjusted for icon buttons
  };

  return clsx(baseClasses, variantClasses[variant], sizeClasses[size]);
};

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & ButtonProps
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={clsx(getButtonClasses({ variant, size }), className)}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button, getButtonClasses };
