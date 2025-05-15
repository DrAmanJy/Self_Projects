export async function getQuoteData() {
  const link = `https://api.quotable.io/random`;
  const data = await fetch(link);

  return await data.json();
}
