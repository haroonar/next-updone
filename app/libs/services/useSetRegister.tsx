import { BASE_URL } from "../Constants";

// Function to fetch data and cache the result
export async function registerAction(url: string, body?: any) {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const response = await fetch(`${BASE_URL}${url}`, {
    method: 'POST',
    headers: headers,
    cache: 'force-cache',
    body: JSON.stringify(body) // Convert body object to JSON string
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
}
