export const SYSTEM_VALUES = ["metric", "imperial"] as const;
export type System = (typeof SYSTEM_VALUES)[number];
