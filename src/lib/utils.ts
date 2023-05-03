import { twMerge } from 'tailwind-merge'

export const cn = (...classList: Parameters<typeof twMerge>) =>
  twMerge(classList)
