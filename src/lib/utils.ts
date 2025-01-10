import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const openChat = () => {
  if (window.Tawk_API) {
    window.Tawk_API.maximize();
  }
};


