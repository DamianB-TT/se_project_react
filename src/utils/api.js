const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwr-damian.jumpingcrab.com"
    : "http://localhost:3001";

const headers = { "Content-Type": "application/json" };

export const handleServerResponse = (res) =>
  res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);

export const getItems = () =>
  fetch(`${baseUrl}/items`, { headers })
    .then(handleServerResponse)
    .then((data) => data.reverse());

export const addItem = ({ name, imageUrl, weather }, token) =>
  fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { ...headers, authorization: `Bearer ${token}` },
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then(handleServerResponse);

export const removeItem = (itemId, token) =>
  fetch(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
    headers: { ...headers, authorization: `Bearer ${token}` },
  }).then(handleServerResponse);

export const updateUser = ({ name, avatar }, token) =>
  fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: { ...headers, authorization: `Bearer ${token}` },
    body: JSON.stringify({ name, avatar }),
  }).then(handleServerResponse);

export const addCardLike = (itemId, token) =>
  fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "PUT",
    headers: { ...headers, authorization: `Bearer ${token}` },
  }).then(handleServerResponse);

export const removeCardLike = (itemId, token) =>
  fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "DELETE",
    headers: { ...headers, authorization: `Bearer ${token}` },
  }).then(handleServerResponse);
