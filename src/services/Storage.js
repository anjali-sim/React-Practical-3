// load items from local storage
export const getLocalStorage = (key) => {
  const storedItems = localStorage.getItem(key);
  return storedItems ? JSON.parse(storedItems) : [];
};

// save items to local storage
export const setLocalStorage = (key, items) => {
  localStorage.setItem(key, JSON.stringify(items));
};
