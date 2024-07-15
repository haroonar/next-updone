import { BASE_URL } from "../Constants";


// Function to fetch data and cache the result
export async function fetchAndCache(url: string, token?: any) {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    'Authorization':`Bearer ${token}`
  };

  const response = await fetch(`${BASE_URL}${url}`, { cache: 'force-cache', next: { revalidate: 3600 }, headers });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
}


