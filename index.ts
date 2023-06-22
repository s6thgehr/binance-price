import axios from "axios";

const baseUrl = "https://api.binance.com/api/v3";
const ticker = "BTCUSDT";

async function getBinancePrice(symbol: string) {
  const response = await axios.get(`${baseUrl}/avgPrice?symbol=${symbol}`);
  return response;
}

async function main() {
  const response = await getBinancePrice(ticker);
  console.log("Price:", response.data.price);
}

main();
