export const copyToClipboard = (text: string) =>
  navigator.clipboard.writeText(text);

export const setLocalStorage = (key: string, value: string) =>
  localStorage.setItem(key, value);

export const getLocalStorage = (key: string) => localStorage.getItem(key);

export const removeLocalStorage = (key: string) => localStorage.removeItem(key);

export const getCurrentPath = () => {
  return window.location.href;
};
