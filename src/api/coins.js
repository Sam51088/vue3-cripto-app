const BASE_URL = "https://api.coingecko.com/api/v3";
const MARKETS =
  "/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";
const COIN_ID = "coins";

export const getMarkets = async () => {
  const response = await fetch(`${BASE_URL}/${MARKETS}`);
  return await response.json();
};

// eslint-disable-next-line prettier/prettier

export const getCoinsDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/${COIN_ID}/${id}`);
  return await response.json();
};
