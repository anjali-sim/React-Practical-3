// load items from local storage
export const loadItemsFromLocalStorage = (key) => {
  const storedItems = localStorage.getItem(key);
  return storedItems ? JSON.parse(storedItems) : [];
};

// save items to local storage
export const saveItemsToLocalStorage = (key, items) => {
  localStorage.setItem(key, JSON.stringify(items));
};

// remove items from local storage
export const removeItemsFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

// get the current date in the desired format
export const getCurrentDate = () => {
  return new Date().toLocaleDateString();
};
