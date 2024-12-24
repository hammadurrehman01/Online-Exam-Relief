import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const fetchAllPages = async () => {
  const response = await fetch("/api/get-all-pages", { cache: "reload" });
  return await response.json();
};
