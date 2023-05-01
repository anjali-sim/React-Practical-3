import { dayNames, monthNames } from "../constants/dummyText"

// variables for getting the different date methods
export const dateFormat = new Date();
export const date = dateFormat.getDate();
export const month = monthNames[dateFormat.getMonth()];
export const shortMonth = month.slice(0, 3);
export const year = dateFormat.getFullYear();
export const day = dayNames[dateFormat.getDay()];
