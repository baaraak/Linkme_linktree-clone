import { getStoredAuthToken } from "./token";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://---"
    : "http://localhost:4000";

function callApi(url, method = "GET", data) {
  const token = getStoredAuthToken();
  const headers = {
    Accept: "application/json",
    "content-type": "application/json",
    Authorization: token ? `Bearer ${token}` : undefined,
  };
  return fetch(API_URL + "/api" + url, {
    method,
    headers,
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .then((response) => {
      if (response.success === false) {
        return Promise.reject(response);
      }
      return response;
    });
}

export default {
  auth: {
    me: () => callApi("/auth/me"),
    login: (user) => callApi("/auth/login", "POST", user),
    register: (user) => callApi("/auth/register", "POST", user),
    resetPassword: (user) => callApi("/auth/register", "POST", user),
    forgotPassword: (user) => callApi("/auth/register", "POST", user),
    google: (access_token) => callApi("/auth/google", "POST", access_token),
  },
  site: {
    get: (id) => callApi(`/site/${id}`),
    update: (fields) => callApi(`/site`, "PATCH", fields),
  },
  user: {
    site: (username) => callApi(`/user/${username}`),
    update: (fields) => callApi(`/user`, "PATCH", fields),
    delete: () => callApi("/user", "DELETE"),
  },
  link: {
    create: () => callApi("/link", "POST"),
    update: (id, data) => callApi(`/link/${id}`, "PATCH", data),
    reOrder: (links) => callApi("/link/order", "PATCH", links),
    delete: (id) => callApi(`/link/${id}`, "DELETE"),
  },
};
