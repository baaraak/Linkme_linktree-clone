import { getStoredAuthToken } from "./token";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://---"
    : "http://localhost:3001";

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
    .then((response) => response.json())
    .then((json) => json);
}

export default {
  auth: {
    me: () => callApi("/auth/me"),
    login: (user) => callApi("/auth/login", "POST", user),
    register: (user) => callApi("/auth/register", "POST", user),
    resetPassword: (user) => callApi("/auth/register", "POST", user),
    forgotPassword: (user) => callApi("/auth/register", "POST", user),
  },
  users: {
    get: () => callApi("/users"),
    update: (id) => callApi("/users", "POST", id),
    delete: (id) => callApi(`/users/${id}`, "DELETE"),
  },
  links: {
    create: () => callApi("/users"),
    update: () => callApi("/users"),
    delete: () => callApi("/users"),
  },
};
