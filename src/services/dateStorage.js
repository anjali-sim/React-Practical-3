// getting the expiry date from local storage
export function getExpiryDate() {
  return localStorage.getItem("expiryDate");
}

// saving the expiry date to local storage
export function setExpiryDate(date) {
  localStorage.setItem("expiryDate", date);
}
