import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines clsx and tailwind-merge to create a utility function that:
 * 1. Conditionally joins classnames using clsx
 * 2. Merges and deduplicates Tailwind CSS classes using tailwind-merge
 *
 * @param inputs - Class values that can be strings, objects, arrays, etc.
 * @returns A string of merged and deduplicated Tailwind classes
 *
 * @example
 * cn("px-2 py-1", "px-4", { "py-2": true, "text-red-500": false })
 * // Returns: "py-1 px-4 py-2" (px-2 is overridden by px-4)
 *
 * cn("bg-red-500", "bg-blue-500")
 * // Returns: "bg-blue-500" (later bg class wins)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
