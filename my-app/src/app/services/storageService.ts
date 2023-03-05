const setItem = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

const getItem = (key: string) => {
  const item = localStorage.getItem(key);

  return item;
};

const clearStorage = () => {
  localStorage.clear();
};

export {
  setItem,
  getItem,
  clearStorage,
};
