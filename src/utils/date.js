import { DAYS, MONTHS } from "../constants/constant";

// variables for getting the different date methods
export const dateFormat = new Date();
export const date = dateFormat.getDate();
export const month = MONTHS[dateFormat.getMonth()];
export const shortMonth = month.slice(0, 3);
export const year = dateFormat.getFullYear();
export const day = DAYS[dateFormat.getDay()];

// get the current date in the desired format
export const getCurrentDate = () => {
  return new Date().toLocaleDateString().toString();
};
