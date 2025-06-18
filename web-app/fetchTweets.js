export async function fetchTweets(bearerToken, userId) {
  const response = await fetch(`https://api.twitter.com/2/users/${userId}/tweets`, {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  });
  if (!response.ok) {
    throw new Error('Error al obtener datos');
  }
  const data = await response.json();
  return data.data || [];
}
