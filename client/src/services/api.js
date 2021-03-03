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
  },
  site: {
    get: (userId) => callApi(`/site/${userId}`),
  },
  links: {
    create: () => callApi("/users"),
    update: () => callApi("/users"),
    delete: () => callApi("/users"),
  },
};
