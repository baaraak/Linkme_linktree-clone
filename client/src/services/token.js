export const getStoredAuthToken = () =>
  localStorage.getItem("linkme__authToken");

export const storeAuthToken = (token) =>
  localStorage.setItem("linkme__authToken", token);

export const removeStoredAuthToken = () =>
  localStorage.removeItem("linkme__authToken");
